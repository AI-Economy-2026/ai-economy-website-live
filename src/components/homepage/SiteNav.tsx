import { homepageNavItems } from '@/content/homepage';
import { siteConfig } from '@/content/site';

export function SiteNav() {
  return (
    <div className="fixed inset-x-0 top-8 z-40 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="text-[15px] font-bold tracking-tight text-black">
          {siteConfig.shortName}
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {homepageNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-black/70 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
