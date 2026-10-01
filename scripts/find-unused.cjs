const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');

// 1. Gather all source files (JSX, JS, CSS, HTML)
function getAllFiles(dir, exts = ['.jsx', '.js', '.css', '.html', '.json']) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'node_modules' || item.name === 'dist' || item.name === '.git') continue;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else {
      if (exts.includes(path.extname(item.name).toLowerCase())) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const sourceFiles = getAllFiles(SRC).concat([path.join(ROOT, 'index.html')]);

// Read all source file contents into one big string or cache
const sourceContents = sourceFiles.map(f => ({
  file: f,
  rel: path.relative(ROOT, f),
  content: fs.readFileSync(f, 'utf8')
}));

const fullCodebaseText = sourceContents.map(s => s.content).join('\n');

// 2. Check unused components in src/
const allSrcFiles = getAllFiles(SRC, ['.jsx', '.js']);
const unusedSrcFiles = [];

for (const sf of allSrcFiles) {
  const base = path.basename(sf, path.extname(sf));
  const rel = path.relative(ROOT, sf).replace(/\\/g, '/');

  // Entry points and routes
  if (['main', 'App', 'index'].includes(base)) continue;

  // Check if base name or relative path is imported anywhere in other files
  let isUsed = false;
  for (const sc of sourceContents) {
    if (sc.file === sf) continue;
    // Check for import of this file
    if (sc.content.includes(base)) {
      isUsed = true;
      break;
    }
  }
  if (!isUsed) {
    unusedSrcFiles.push(rel);
  }
}

// 3. Check unused images in public/
function getAllAssetFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllAssetFiles(fullPath));
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.mp4', '.pdf'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const publicAssets = getAllAssetFiles(PUBLIC);
const unusedAssets = [];

for (const asset of publicAssets) {
  const filename = path.basename(asset);
  const rel = path.relative(ROOT, asset).replace(/\\/g, '/');
  const webPath = rel.replace('public/', '/');

  // Check if filename or webPath is present in any source code
  // Handle URI encoding or exact filename
  const encodedName = encodeURI(filename);
  const decodedName = decodeURI(filename);

  let isUsed = fullCodebaseText.includes(filename) || 
               fullCodebaseText.includes(encodedName) || 
               fullCodebaseText.includes(decodedName) ||
               fullCodebaseText.includes(webPath) ||
               fullCodebaseText.includes(encodeURI(webPath));

  if (!isUsed) {
    unusedAssets.push(rel);
  }
}

console.log('=== UNUSED SRC FILES (' + unusedSrcFiles.length + ') ===');
unusedSrcFiles.forEach(f => console.log('  ' + f));

console.log('\n=== UNUSED PUBLIC ASSETS (' + unusedAssets.length + ') ===');
unusedAssets.forEach(f => console.log('  ' + f));
