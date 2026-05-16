export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterSection = {
  title: string;
  items: SiteLink[];
};

export const siteConfig = {
  name: 'AI Economy',
  shortName: 'AI ECONOMY',
  description:
    'Helping businesses simplify the complex and focus on what works in the AI era.',
  copyright: '© 2026 AI Economy. All rights reserved.',
  contactHref: '/contact',
  contactLabel: 'Contact',
  contactEmail: 'sarah@aieconomy.ai',
  aboutHref: 'https://www.balmeragency.com.au/profile/',
  aboutLabel: 'About',
  socialLinks: [
    { href: 'https://www.linkedin.com/in/sarahbalmer/', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/sarahspeaksai', label: 'Facebook' },
    { href: 'https://www.instagram.com/sarahspeaks_ai/', label: 'Instagram' },
    { href: 'https://www.youtube.com/@aieconomyai', label: 'YouTube' },
  ],
  footerSocialLinks: [
    { href: 'https://www.instagram.com/sarahspeaks_ai/', label: 'Instagram' },
    { href: 'https://www.facebook.com/sarahspeaksai', label: 'Facebook' },
    { href: 'https://www.tiktok.com/@sarahspeaks_ai?lang=en', label: 'TikTok' },
    { href: 'https://www.youtube.com/@aieconomyai', label: 'YouTube' },
  ],
};

export const marketingNavItems: SiteLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Toolkit', href: '#products' },
  { label: 'Roadmap', href: '#approach' },
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Contact', href: '/contact' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Products',
    items: [
      { label: 'AI Consultancy', href: '/product/ai-consultancy' },
      { label: 'Priority AI', href: '/product/priority-ai' },
      { label: 'AI Toolkit', href: '/product/ai-toolkit' },
      { label: 'AI Visibility Ranking', href: '/product/geo-audit' },
      { label: 'Sarah Speaks AI', href: '/product/sarah-speaks' },
    ],
  },
  {
    title: 'Ecosystem',
    items: [
      { label: 'Ask Sarah', href: '/product/agent-alice' },
      { label: 'Prolinks', href: 'https://prolinksai.com/', external: true },
      { label: 'Parently', href: 'https://parently.ai/', external: true },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Sarah', href: '#founder' },
      { label: 'Resources', href: '#roadmap' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of use', href: '/terms' },
    ],
  },
];

export const minimalFooterContent = {
  titlePrefix: 'Get Started with AI Today.',
  titleLinkLabel: 'Contact us',
};
