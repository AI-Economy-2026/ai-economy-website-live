export type ProductCard = {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  comingSoon?: boolean;
  external?: boolean;
};

export const featuredCards: ProductCard[] = [
  {
    id: 'ai-consultancy',
    label: 'AI Economy',
    title: 'AI Consultancy',
    description: "I'll help you tackle the overwhelm and start right with AI",
    cta: "Let's Talk",
    href: '/services/ai-consultancy',
    image: '/images/ai_consultancy_hero.jpg',
  },
  {
    id: 'priority-ai',
    label: 'AI Diagnostic',
    title: 'Priority AI',
    description: 'AI lives everywhere. But where does it get you the best AI ROI?',
    cta: 'Find Out',
    href: '/services/priority-ai',
    image: '/images/priority_ai_hero.jpg',
  },
  {
    id: 'ai-toolkit',
    label: 'AI Tools',
    title: 'AI Toolkit',
    description:
      'Overwhelmed? Get access to a curated collection of tried and tested AI tools that I use every day.',
    cta: 'Explore the Tools',
    href: 'https://aitoolkit-ashy.vercel.app/',
    image: '/images/ai_toolkit_hero.jpg',
    external: true,
  },
  {
    id: 'geo-audit',
    label: 'AI Search AKA GEO',
    title: 'AI Visibility Ranking',
    description: 'Find out whether your business is showing up when AI answers your customers.',
    cta: 'Check Your Visibility',
    href: '/services/geo-audit',
    image: '/images/geo_audit_hero.jpg',
  },
  {
    id: 'sarah-speaks',
    label: 'AI Training',
    title: 'Sarah Speaks',
    description: 'Practical AI training for business leaders and teams. Skills you can use on Monday.',
    cta: 'Join the Waitlist',
    href: '/products/sarah-speaks',
    image: '/images/sarah_speaks_hero_new.jpg',
    comingSoon: true,
  },
  {
    id: 'ask-sarah',
    label: 'Marketing Agent',
    title: 'Ask Sarah',
    description: 'Repurpose content, match your brand voice, and build SEO/GEO-ready campaigns.',
    cta: 'Join the Waitlist',
    href: '/products/agent-alice',
    image: '/images/agent_alice_orchestra_v2.png',
    comingSoon: true,
  },
  {
    id: 'prolinks',
    label: 'Document AI',
    title: 'Prolinks',
    description: 'Transform static documents into dynamic AI-powered web experiences.',
    cta: 'Join the Waitlist',
    href: 'https://prolinksai.com/',
    image: '/images/prolinks_hero.jpg',
    comingSoon: true,
    external: true,
  },
  {
    id: 'parently',
    label: 'Life Admin AI',
    title: 'Parently',
    description: 'A practical assistant for managing modern family logistics and life admin.',
    cta: 'Join the Waitlist',
    href: 'https://parently.ai/',
    image: '/images/parently_hero_new.png',
    comingSoon: true,
    external: true,
  },
];
