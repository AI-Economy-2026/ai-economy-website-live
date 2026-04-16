import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function collectMatches(source, regex, group = 1) {
  return [...source.matchAll(regex)].map((match) => match[group]);
}

function ensureUnique(items, label) {
  const seen = new Set();

  for (const item of items) {
    assert(!seen.has(item), `${label} contains duplicate value: ${item}`);
    seen.add(item);
  }
}

function ensureNonEmpty(items, label) {
  for (const item of items) {
    assert(Boolean(item), `${label} contains an empty value`);
  }
}

function extractBlock(source, name) {
  const blockMatch = source.match(new RegExp(`${name}:\\s*\\[(.*?)\\]\\s*,`, 's'));
  return blockMatch?.[1] ?? '';
}

try {
  const productsSource = read('src/content/products.ts');
  const homepageSource = read('src/content/homepage.ts');
  const siteSource = read('src/content/site.ts');
  const legalSource = read('src/content/legal.ts');
  const socialLinksBlock = extractBlock(siteSource, 'socialLinks');
  const footerSocialLinksBlock = extractBlock(siteSource, 'footerSocialLinks');

  const productIds = collectMatches(productsSource, /id:\s*'([^']+)'/g);
  const homepageCardIds = collectMatches(homepageSource, /id:\s*'([^']+)'/g);
  const homepageProductRefs = collectMatches(homepageSource, /productId:\s*'([^']+)'/g);
  const navLabels = collectMatches(homepageSource, /label:\s*'([^']+)'\s*,\s*href:\s*'#[^']+'/g);
  const socialLabels = collectMatches(socialLinksBlock, /label:\s*'([^']+)'/g);
  const footerSocialLabels = collectMatches(footerSocialLinksBlock, /label:\s*'([^']+)'/g);
  const footerTitles = collectMatches(siteSource, /title:\s*'([^']+)'/g);
  const legalTitles = collectMatches(legalSource, /title:\s*'([^']+)'/g);
  const hrefs = collectMatches(siteSource, /href:\s*'([^']+)'/g);
  const legalUpdatedDates = collectMatches(legalSource, /updatedAt:\s*'([^']+)'/g);

  ensureUnique(productIds, 'products');
  ensureUnique(homepageCardIds, 'homepage card ids');
  ensureUnique(navLabels, 'homepage nav labels');
  ensureUnique(socialLabels, 'social labels');
  ensureUnique(footerSocialLabels, 'footer social labels');
  ensureUnique(footerTitles, 'footer section titles');
  ensureUnique(legalTitles, 'legal page titles');
  ensureNonEmpty(hrefs, 'site hrefs');
  ensureNonEmpty(legalUpdatedDates, 'legal updated dates');

  for (const ref of homepageProductRefs) {
    assert(productIds.includes(ref), `homepageFeaturedCards references missing productId: ${ref}`);
  }

  assert(/contactHref:\s*'[^']+'/.test(siteSource), 'siteConfig.contactHref is required');
  assert(/aboutHref:\s*'[^']+'/.test(siteSource), 'siteConfig.aboutHref is required');
  assert(/privacyPageContent/.test(legalSource), 'privacyPageContent export is required');
  assert(/termsPageContent/.test(legalSource), 'termsPageContent export is required');

  console.log('Content checks passed');
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
