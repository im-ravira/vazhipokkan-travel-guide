import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const urls = [
    'https://vazhipokkan.netlify.app/',
    'https://vazhipokkan.netlify.app/about',
    'https://vazhipokkan.netlify.app/attractions',
    'https://vazhipokkan.netlify.app/contact',
    'https://vazhipokkan.netlify.app/destinations',
    'https://vazhipokkan.netlify.app/destinations/madurai',
    'https://vazhipokkan.netlify.app/gallery',
    'https://vazhipokkan.netlify.app/map',
    'https://vazhipokkan.netlify.app/travel-essentials',
];

const generateSitemap = () => {
  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`
        )
        .join('')}
    </urlset>
  `;

  writeFileSync(resolve(__dirname, './public/sitemap.xml'), sitemapContent.trim());
};

generateSitemap();


