import { homepageSocialLinks } from '@/content/homepage';
import { SocialIcon } from '@/components/homepage/SocialIcon';

export function NavSocialBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#F5F5F7]">
      <div className="mx-auto flex h-8 w-full max-w-[1200px] items-center justify-end gap-1 px-6 md:px-12">
        {homepageSocialLinks.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-7 w-7 items-center justify-center rounded-full text-black/45 transition hover:text-black"
          >
            <SocialIcon label={label} />
          </a>
        ))}
      </div>
    </div>
  );
}
