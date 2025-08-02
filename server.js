import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sharp from 'sharp';
import compression from 'compression';
import expressStaticGzip from 'express-static-gzip';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Redirect apex domain to www
app.use((req, res, next) => {
  if (
    req.headers.host === 'jcoatx.com' ||
    req.headers.host === 'jcoatx.com:80' ||
    req.headers.host === 'jcoatx.com:443'
  ) {
    return res.redirect(301, 'https://www.jcoatx.com' + req.originalUrl);
  }
  next();
});

// Enable compression
app.use(compression());

// Cache control middleware (for future use)
const _cacheControl = (duration) => {
  return (req, res, next) => {
    res.set('Cache-Control', `public, max-age=${duration}`);
    next();
  };
};

// Image optimization middleware
const optimizeImage = async (req, res, next) => {
  try {
    const imagePath = join(__dirname, 'src/Images/optimized', req.params.image);
    const imageBuffer = await fs.readFile(imagePath);
    
    // Get image dimensions
    const metadata = await sharp(imageBuffer).metadata();
    
    // Parse query parameters
    const width = parseInt(req.query.w) || metadata.width;
    const quality = parseInt(req.query.q) || 80;
    
    // Optimize image
    const optimizedImage = await sharp(imageBuffer)
      .resize(width, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toBuffer();

    // Set response headers
    res.set('Content-Type', 'image/webp');
    res.set('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    res.set('Last-Modified', (new Date()).toUTCString());
    
    res.send(optimizedImage);
  } catch (error) {
    console.error('Image optimization error:', error);
    next(error);
  }
};

// Serve optimized images
app.get('/api/images/:image', optimizeImage);

// Serve static files with gzip/brotli compression
app.use('/', expressStaticGzip(join(__dirname, 'dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  serveStatic: {
    maxAge: '1y',
    etag: true
  }
}));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
