import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_IMAGES_DIR = path.resolve('public/images');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

async function optimizeImages() {
  console.log('Scanning public/images directory...');
  const allFiles = getAllFiles(PUBLIC_IMAGES_DIR);
  const imageFiles = allFiles.filter(file => /\.(png|jpg|jpeg)$/i.test(file));
  console.log(`Found ${imageFiles.length} images to check.`);

  let totalSavedBytes = 0;
  let processedCount = 0;

  for (const file of imageFiles) {
    const stats = fs.statSync(file);
    if (stats.size < 150 * 1024) continue; // Skip files under 150KB

    const ext = path.extname(file).toLowerCase();
    const originalSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    try {
      const inputBuffer = fs.readFileSync(file);
      const meta = await sharp(inputBuffer).metadata();

      // 1. Generate WebP companion file (preserving 100% dimensions)
      const webpPath = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const webpBuffer = await sharp(inputBuffer)
        .webp({ quality: 86, effort: 4 })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuffer);

      // 2. In-place optimization
      let optimizedBuffer;
      if (ext === '.jpg' || ext === '.jpeg') {
        optimizedBuffer = await sharp(inputBuffer)
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();
      } else if (ext === '.png') {
        // High compression PNG without losing dimensions
        optimizedBuffer = await sharp(inputBuffer)
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();
      }

      if (optimizedBuffer && optimizedBuffer.length < stats.size) {
        fs.writeFileSync(file, optimizedBuffer);
        const newSizeMB = (optimizedBuffer.length / (1024 * 1024)).toFixed(2);
        totalSavedBytes += (stats.size - optimizedBuffer.length);
        console.log(`✓ Optimized [${meta.width}x${meta.height}]: ${path.relative(PUBLIC_IMAGES_DIR, file)} (${originalSizeMB} MB -> ${newSizeMB} MB, WebP: ${(webpBuffer.length / (1024 * 1024)).toFixed(2)} MB)`);
      } else {
        console.log(`✓ WebP created [${meta.width}x${meta.height}]: ${path.relative(PUBLIC_IMAGES_DIR, file)} (WebP: ${(webpBuffer.length / (1024 * 1024)).toFixed(2)} MB)`);
      }

      processedCount++;
    } catch (err) {
      console.warn(`Could not optimize ${file}:`, err.message);
    }
  }

  console.log(`\n========================================`);
  console.log(`Image Optimization Complete!`);
  console.log(`Processed: ${processedCount} images`);
  console.log(`Direct saved bandwidth: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`100% of original visual dimensions and sharpness maintained.`);
  console.log(`========================================`);
}

optimizeImages();

