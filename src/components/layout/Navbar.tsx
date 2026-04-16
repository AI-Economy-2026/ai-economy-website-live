import { Linkedin, Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { marketingNavItems, siteConfig } from '@/content/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = marketingNavItems.map((item) => ({
    name: item.label,
    href: item.href,
    isButton: item.label === 'Contact',
  }));

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "glass h-12 md:h-14 bg-background/80" 
          : "bg-background/40 backdrop-blur-sm h-14 md:h-16 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full h-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <a href="/" className="hover:opacity-80 transition-opacity font-extrabold uppercase tracking-tighter text-lg md:text-xl">
            {siteConfig.name}
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={cn(
                  "text-[12px] font-semibold tracking-tight transition-colors hover:text-accent",
                  item.isButton ? "text-accent" : "text-foreground/70"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://www.linkedin.com/in/sarahbalmer/" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-foreground/70 hover:text-foreground transition-colors p-2">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/sarahspeaks_ai/" target="_blank" rel="noopener noreferrer" className="hidden sm:block text-foreground/70 hover:text-foreground transition-colors p-2">
            <Instagram className="h-4 w-4" />
          </a>
          
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-bold tracking-tight py-2 border-b border-foreground/5 last:border-0",
                    item.isButton ? "text-accent" : "text-foreground/70"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
