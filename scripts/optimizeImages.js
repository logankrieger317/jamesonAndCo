import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { width: 640, suffix: 'sm', quality: 68 },   // Mobile - lower quality is fine on small screens
  { width: 1024, suffix: 'md', quality: 72 },   // Tablet
  { width: 1500, suffix: 'lg', quality: 72 }    // Desktop
];

async function optimizeImages() {
  try {
    // Source and destination directories
    const sourceDir = join(__dirname, '../src/Images/optimized');
    const cacheDir = join(__dirname, '../public/img-cache');

    // Create cache directory if it doesn't exist
    await mkdir(cacheDir, { recursive: true });

    // Get all images from source directory
    const files = await readdir(sourceDir);
    const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|webp)$/i));

    // Process each image
    for (const file of imageFiles) {
      const sourcePath = join(sourceDir, file);
      const filename = file.split('.')[0];

      // Create optimized versions for each size
      for (const size of sizes) {
        const outputPath = join(cacheDir, `${filename}-${size.suffix}.webp`);
        
        await sharp(sourcePath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: size.quality,
            effort: 6,       // Higher compression effort
            smartSubsample: true,  // Better chroma subsampling
            nearLossless: false
          })
          .toFile(outputPath);
        
        console.log(`Optimized ${file} to ${size.width}px width`);
      }
    }

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
