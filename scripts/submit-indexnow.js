const http = require('http');
const https = require('https');
const fs = require('fs');

const API_KEY = '957acf3444d64b779fdf08138ffeae6b';
const HOST = 'eagle4k.us';
const SITE_URL = `https://${HOST}`;
const KEY_LOCATION = `${SITE_URL}/${API_KEY}.txt`;

// Read blog posts to extract all URLs
const blogTsPath = 'c:\\Users\\Simo\\Desktop\\Eagle4k_uswebsite\\src\\lib\\blog.ts';

let blogSlugs = [];
try {
  const blogContent = fs.readFileSync(blogTsPath, 'utf8');
  const matches = blogContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
  for (const match of matches) {
    if (match[1] && !blogSlugs.includes(match[1])) {
      blogSlugs.push(match[1]);
    }
  }
} catch (e) {
  console.error('Error reading blog.ts:', e);
}

const locales = ['en', 'fr', 'nl', 'ar', 'es'];
const routes = ['', '/contact', '/dmca', '/privacy', '/refund-policy', '/terms', '/blog'];

const urlList = [];

// Static routes
locales.forEach((locale) => {
  routes.forEach((route) => {
    urlList.push(`${SITE_URL}/${locale}${route}`);
  });
});

// Blog post routes
blogSlugs.forEach((slug) => {
  locales.forEach((locale) => {
    urlList.push(`${SITE_URL}/${locale}/blog/${slug}`);
  });
});

// Root URL
urlList.push(SITE_URL);

console.log(`Submitting ${urlList.length} URLs to Bing IndexNow...`);

const payload = JSON.stringify({
  host: HOST,
  key: API_KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList,
});

const endpoints = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
];

function submitToIndexNow(endpoint) {
  return new Promise((resolve) => {
    const url = new URL(endpoint);
    const options = {
      hostname: url.hostname,
      port: 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        console.log(`[${endpoint}] Response Status: ${res.statusCode}`);
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`SUCCESS: ${endpoint} accepted IndexNow submission!`);
        } else {
          console.log(`Response Body: ${body}`);
        }
        resolve(res.statusCode);
      });
    });

    req.on('error', (error) => {
      console.error(`[${endpoint}] Error:`, error.message);
      resolve(null);
    });

    req.write(payload);
    req.end();
  });
}

async function run() {
  for (const endpoint of endpoints) {
    await submitToIndexNow(endpoint);
  }
}

run();
