import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';


const __dirname = dirname(fileURLToPath(import.meta.url));

const urls = [
    'https://https://vazhipokkan.netlify.app/',
    'https://https://vazhipokkan.netlify.app/about',
    'https://https://vazhipokkan.netlify.app/attractions',
    'https://https://vazhipokkan.netlify.app/contact',
    'https://https://vazhipokkan.netlify.app/destinations',
    'https://https://vazhipokkan.netlify.app/gallery',
    'https://https://vazhipokkan.netlify.app/map',
    'https://https://vazhipokkan.netlify.app/travel-essentials',
];

const generateSitemap = () => {
  const sitemapContent = `
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

