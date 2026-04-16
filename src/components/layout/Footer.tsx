import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SocialIcon } from '@/components/homepage/SocialIcon';
import {
  footerSections,
  minimalFooterContent,
  siteConfig,
  type SiteLink,
} from '@/content/site';

interface FooterProps {
  minimal?: boolean;
}

function FooterLink({ item }: { item: SiteLink }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground transition-colors"
      >
        {item.label}
      </a>
    );
  }

  if (item.href.startsWith('/')) {
    return (
      <Link to={item.href} className="hover:text-foreground transition-colors">
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.href} className="hover:text-foreground transition-colors">
      {item.label}
    </a>
  );
}

export function Footer({ minimal = false }: FooterProps) {
  if (minimal) {
    return (
      <footer className="bg-secondary/30 border-t py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
              {minimalFooterContent.titlePrefix}{' '}
              <a
                href={siteConfig.contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {minimalFooterContent.titleLinkLabel}
              </a>
            </h2>
            <div className="flex flex-col items-center justify-between space-y-6 border-t pt-12 text-[12px] font-medium text-foreground/30 md:flex-row md:space-y-0">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-lg font-extrabold uppercase tracking-tighter">
                  {siteConfig.name}
                </Link>
                <p>{siteConfig.copyright}</p>
              </div>
              <div className="flex items-center space-x-8">
                {footerSections
                  .find((section) => section.title === 'Legal')
                  ?.items.map((item) => <FooterLink key={item.label} item={item} />)}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative overflow-hidden border-t bg-secondary/30 pb-16 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-16 lg:grid-cols-5">
          <div className="col-span-2 mb-8 lg:col-span-1 lg:mb-0">
            <Link to="/" className="mb-6 block text-2xl font-extrabold uppercase tracking-tighter">
              {siteConfig.name}
            </Link>
            <p className="mb-8 max-w-xs text-[14px] font-medium leading-relaxed text-foreground/40">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.footerSocialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:bg-black hover:text-white"
                  aria-label={item.label}
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-8 text-[12px] font-bold uppercase tracking-widest text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-4 text-[13px] font-medium text-foreground/50">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <FooterLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between space-y-6 border-t pt-12 text-[12px] font-medium text-foreground/30 md:flex-row md:space-y-0">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center space-x-8">
            {footerSections
              .find((section) => section.title === 'Legal')
              ?.items.map((item) => <FooterLink key={item.label} item={item} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}
