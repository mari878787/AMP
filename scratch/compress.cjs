const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(process.cwd(), 'public', 'images');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      const ext = path.extname(name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(name);
      }
    }
  }
  return files;
}

async function compressImages() {
  const allImages = getFiles(publicImagesDir);
  console.log(`Found ${allImages.length} images to check.`);
  let savedBytes = 0;
  let processedCount = 0;

  for (const filePath of allImages) {
    const stat = fs.statSync(filePath);
    if (stat.size > 500 * 1024) { // Only compress files larger than 500KB
      const ext = path.extname(filePath).toLowerCase();
      const tmpPath = filePath + '.tmp';
      try {
        let imagePipeline = sharp(filePath);
        const metadata = await imagePipeline.metadata();
        
        if (metadata.width > 2560) {
          imagePipeline = imagePipeline.resize({ width: 2560, withoutEnlargement: true });
        }

        if (ext === '.png') {
          await imagePipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tmpPath);
        } else {
          await imagePipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpPath);
        }

        const newStat = fs.statSync(tmpPath);
        if (newStat.size < stat.size) {
          const diff = stat.size - newStat.size;
          savedBytes += diff;
          fs.renameSync(tmpPath, filePath);
          console.log(`Compressed: ${path.relative(publicImagesDir, filePath)} | ${(stat.size/1024/1024).toFixed(2)}MB -> ${(newStat.size/1024/1024).toFixed(2)}MB (saved ${(diff/1024/1024).toFixed(2)}MB)`);
          processedCount++;
        } else {
          fs.unlinkSync(tmpPath);
        }
      } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      }
    }
  }
  console.log(`Done! Compressed ${processedCount} images. Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB.`);
}

compressImages();
