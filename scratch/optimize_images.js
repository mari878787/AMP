import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await optimizeDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(file) && stat.size > 800 * 1024) {
      const origSize = (stat.size / (1024 * 1024)).toFixed(2);
      const tempPath = fullPath + '.tmp';

      try {
        if (/\.png$/i.test(file)) {
          // Resize if wider than 1920px and compress png
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true })
            .png({ quality: 80, compressionLevel: 9, effort: 7 })
            .toFile(tempPath);
        } else {
          await sharp(fullPath)
            .resize({ width: 1920, withoutEnlargement: true })
            .jpeg({ quality: 82, mozjpeg: true })
            .toFile(tempPath);
        }

        const newStat = fs.statSync(tempPath);
        const newSize = (newStat.size / (1024 * 1024)).toFixed(2);

        if (newStat.size < stat.size) {
          fs.unlinkSync(fullPath);
          fs.renameSync(tempPath, fullPath);
          console.log(`⚡ Compressed ${file}: ${origSize}MB -> ${newSize}MB`);
        } else {
          fs.unlinkSync(tempPath);
        }
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

async function run() {
  console.log('Optimizing project images in public/images/project...');
  await optimizeDirectory(path.resolve('public/images/project'));
  console.log('Done optimizing images!');
}

run();
