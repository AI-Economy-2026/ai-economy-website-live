import { cn } from '@/lib/utils';
import { marketingNavItems, siteConfig } from '@/content/site';

export function Header() {
  const headerItems = marketingNavItems.slice(0, 4);

  return (
    <header className="sticky top-12 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">
        <div />

        <nav className="hidden sm:flex items-center space-x-6 text-[12px] font-medium text-foreground/70">
          {headerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'hover:text-accent transition-colors',
                item.label === 'Contact' && 'text-accent font-bold',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sm:hidden">
           <button className="text-[12px] font-medium text-accent">{siteConfig.contactLabel}</button>
        </div>
      </div>
    </header>
  );
}
