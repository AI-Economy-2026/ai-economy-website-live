import { products, type Product } from '@/content/products';
import { siteConfig } from '@/content/site';

export type HomepageCardItem = {
  id: string;
  productId?: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  ctaSecondary?: string;
  hrefSecondary?: string;
  ctaAsButton?: boolean;
  image?: string;
  external?: boolean;
  comingSoon?: boolean;
};

export type HomepageStatItem = {
  value: string;
  label: string;
  source: string;
  sourceHref: string;
};

export type HomepageStepItem = {
  number: string;
  title: string;
  subtitle: string;
  text: string;
  tags: string[];
  image: string;
};

export type HomepageApproachStep = {
  title: string;
  sub: string;
  body: string;
  tags: string[];
};

export type HomepageSectionIntro = {
  eyebrow?: string;
  title: string;
  body: string;
};

export type HomepageJourneyStep = {
  number: string;
  title: string;
  body: string;
};

const productMap = Object.fromEntries(
  products.map((product) => [product.id, product]),
) as Record<string, Product>;

const featuredCardConfig: HomepageCardItem[] = [
  {
    id: 'ai-consultancy',
    productId: 'ai-consultancy',
    label: 'AI CONSULTANCY',
    title: 'AI Consultancy',
    description:
      'Strategic advice, diagnostics, and implementation support to turn AI into measurable business outcomes.',
    cta: "Let's Talk",
    href: '/product/ai-consultancy',
  },
  {
    id: 'priority-ai',
    productId: 'priority-ai',
    label: 'DIAGNOSTIC TOOL',
    title: 'Priority AI',
    description: 'Find out where AI fits in your business and where the best ROI opportunities sit right now.',
    cta: 'Learn More',
    href: '/product/priority-ai',
  },
  {
    id: 'ai-toolkit',
    productId: 'ai-toolkit',
    label: 'AI TOOLKIT',
    title: 'AI Toolkit',
    description:
      'Hundreds of tools tested over three years. These are the ones I use every day to get ahead with AI.',
    cta: 'Unlock Now',
    href: '/toolkit',
  },
  {
    id: 'geo-audit',
    productId: 'geo-audit',
    label: 'AI VISIBILITY',
    title: 'AI Visibility Ranking',
    description: 'Check how often your brand is surfaced across ChatGPT, Gemini, Perplexity, and other AI engines.',
    cta: 'Check Your Visibility',
    href: '/product/geo-audit',
  },
  {
    id: 'partner-program',
    label: 'AI NETWORK',
    title: 'AI Economy Partner Program',
    description:
      'When it comes to AI it is really hard to know who to go to. We connect clients to trusted AI partners. If you are providing AI services and would like to be featured, get in touch.',
    cta: 'Get Listed',
    href: '/partners/apply',
    ctaAsButton: true,
    image: '/images/agent_alice_orchestra_v2.png',
  },
  {
    id: 'sarah-speaks',
    productId: 'sarah-speaks',
    label: 'AI TRAINING',
    title: 'Sarah Speaks',
    description: 'Practical AI education for leaders and teams. No jargon. No hype. Just usable skills.',
    cta: 'Join the Waitlist',
    href: '/product/sarah-speaks',
    comingSoon: true,
  },
  {
    id: 'prolinks',
    productId: 'prolinks',
    label: 'DOCUMENT AI',
    title: 'Prolinks',
    description:
      'Turn static documents into dynamic AI-powered web experiences with heatmaps, analytics, and signatures.',
    cta: 'Join the Waitlist',
    href: 'https://prolinksai.com/',
    external: true,
    comingSoon: true,
  },
  {
    id: 'parently',
    productId: 'parently',
    label: 'LIFE ADMIN AI',
    title: 'Parently',
    description:
      'A practical assistant for managing the endless life admin that comes with parenting and family logistics.',
    cta: 'Join the Waitlist',
    href: 'https://parently.ai/',
    external: true,
    comingSoon: true,
  },
];

export const homepageFeaturedCards: HomepageCardItem[] = featuredCardConfig.map((card) => ({
  ...card,
  image: card.image ?? (card.productId ? productMap[card.productId]?.image : undefined),
}));

export const homepageFeaturedIntro: HomepageSectionIntro = {
  title: 'Cut through AI overwhelm',
  body: 'Explore our services',
};

export const homepageStats: HomepageStatItem[] = [
  {
    value: '78%',
    label: 'of organisations already use AI in at least one business function.',
    source: 'McKinsey, 2025',
    sourceHref: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    value: '59%',
    label: 'of professionals say AI literacy is now essential for career growth.',
    source: 'DataCamp, 2026',
    sourceHref:
      'https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap',
  },
  {
    value: '74%',
    label: 'of enterprises say AI is already delivering measurable business value.',
    source: 'Deloitte, 2026',
    sourceHref:
      'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
  },
  {
    value: '35%',
    label: 'of businesses cite lack of internal skills as the main barrier to AI adoption.',
    source: 'Netguru, 2025',
    sourceHref: 'https://www.netguru.com/blog/ai-adoption-statistics',
  },
  {
    value: '61%',
    label: 'say they need more confidence to use AI well at work.',
    source: 'DataCamp, 2026',
    sourceHref:
      'https://www.datacamp.com/blog/the-state-of-data-and-ai-literacy-in-2026-definitions-statistics-and-the-ai-skills-gap',
  },
  {
    value: '67%',
    label: 'of leaders expect AI to reshape how customers discover and buy.',
    source: 'Deloitte, 2026',
    sourceHref:
      'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
  },
];

export const homepageRoadmapSteps: HomepageStepItem[] = [
  {
    number: '01',
    title: 'Discover where AI will actually make a difference',
    subtitle: 'DISCOVER',
    text:
      'Start with a practical diagnostic, not generic hype. We identify where AI can reduce wasted head hours, improve service, strengthen delivery, and create a clearer roadmap for what to do next.',
    tags: ['Priority AI', 'Readiness audit', 'Opportunity mapping'],
    image: '/images/roadmap_discover.jpg',
  },
  {
    number: '02',
    title: 'Train your team so they can use AI with confidence',
    subtitle: 'TRAIN',
    text:
      'Once the opportunities are clear, the next step is capability. We train leaders and teams with practical tools, workflows, and language they can actually apply on Monday morning.',
    tags: ['Sarah Speaks', 'Workshops', 'Leadership fluency'],
    image: '/images/roadmap_train.jpg',
  },
  {
    number: '03',
    title: 'Activate AI tools, workflows, and visibility',
    subtitle: 'ACTIVATE',
    text:
      'Then we move from planning to implementation. That can mean deploying tools, improving your internal operations, or making sure your business is visible when AI engines answer your customers.',
    tags: ['Implementation', 'GEO', 'Automation'],
    image: '/images/roadmap_activate.jpg',
  },
];

export const homepageSocialLinks = [
  ...siteConfig.socialLinks,
];

export const homepageNavItems = [
  { label: 'Explore', href: '#products' },
  { label: 'About', href: '#founder' },
  { label: 'Resources', href: '#roadmap' },
  { label: 'Contact', href: '/contact' },
];

export const homepageApproachSteps: HomepageApproachStep[] = [
  {
    title: 'Discover',
    sub: 'Find your AI starting point',
    body: 'Unpack your business, identify where AI delivers the highest ROI, and build your custom roadmap to implementation.',
    tags: ['Priority AI', 'AI Consultancy'],
  },
  {
    title: 'Train',
    sub: 'Build the skills to deliver',
    body: 'Equip your team with practical AI skills through workshops, courses, and hands-on training with real tools and real workflows.',
    tags: ['AI Training', 'Workshops'],
  },
  {
    title: 'Activate',
    sub: 'Put AI into production',
    body: 'Move from planning to doing. Implement AI tools, automate workflows, and track results across your business operations.',
    tags: ['AI Toolkit', 'AI Visibility'],
  },
];

export const homepageApproachIntro: HomepageSectionIntro = {
  eyebrow: 'OUR APPROACH',
  title: 'Three steps',
  body:
    'One focused approach. Every tool and service we offer connects back to this core strategy.',
};

export const homepageHero = {
  title: 'AI That Works',
  body:
    "AI is everywhere, and it's hard to know where to start. Whether you're just trying to make sense of it all, or you're ready to put AI to work in your business, you're in the right place. I'll help you find your starting point, build your confidence, and get real results.",
  ctaHref: '#products',
  videoSrc: '/ai-economy-video.mp4',
};

export const homepageFounder = {
  eyebrow: 'BUILT BY SARAH',
  title: 'Start your AI journey right',
  name: 'Sarah Balmer · CEO and Founder',
  chips: [
    '25+ years digital',
    'AI Strategist',
    'AI Trainer',
    'Consultant',
    'CEO, Balmer Agency',
  ],
  contactLabel: siteConfig.contactLabel,
  aboutLabel: siteConfig.aboutLabel,
  linkedInLabel: 'Connect on LinkedIn',
  body: [
    'Sarah Balmer has spent more than 25 years helping businesses simplify the complex and focus on what works. She brings that same practical lens to AI.',
    "This is not about hype, jargon, or chasing every new tool. It's about figuring out where AI can create real value, building confidence in your team, and putting the right systems in place.",
    'From strategic consulting and training to GEO and product innovation, AI Economy is designed to help leaders move with clarity.',
  ],
};

export const homepageMomentum = {
  title: 'AI is moving fast.\nIs your business keeping up?',
  body:
    'The businesses that move early are building efficiency, confidence, and visibility. The ones that wait are losing ground in skills, operations, and discoverability.',
};

export const homepageRoadmapIntro = {
  title: "Here's what you can expect",
  body:
    'The AI Economy model is simple: discover where value sits, train people to use AI well, then activate the tools and visibility layers that create results.',
};

export const homepageGeoSection = {
  title: "Will your business be found when AI answers your customers' questions?",
  intro:
    "AI search is changing how customers find businesses. ChatGPT, Perplexity, Gemini and Copilot are already answering the questions your customers used to type into Google. If your business isn't showing up in those answers, you're invisible to a growing share of your market.",
  stats: [
    {
      value: '5x',
      label: 'more engaged traffic from AI search compared to traditional search',
    },
    {
      value: '400%',
      label: 'increase in AI-powered search usage in the last 12 months',
    },
  ],
  outro:
    'GEO (generative engine optimisation) is no longer optional. The businesses that act now will own the AI search results in their category. The ones that wait will wonder where their traffic went.',
  cardTitle: 'RankCo · AI search visibility tool',
  cardBody: 'Get found in AI searches. Prioritise what to do first.',
  cardHref: '/product/geo-audit',
  cardCta: 'Check your visibility',
};

export const homepageJourney = {
  eyebrow: 'YOUR AI ECONOMY JOURNEY',
  title: 'How we work with you',
  body:
    'A structured, repeatable process that takes AI from uncertain to indispensable across your business.',
};

export const homepageJourneySteps: HomepageJourneyStep[] = [
  {
    number: '01',
    title: 'The conversation',
    body:
      "We start with a conversation about where your business is today, what's working, and where AI could make the biggest difference.",
  },
  {
    number: '02',
    title: 'The diagnostic',
    body:
      'We run your business through Priority AI to map readiness, opportunities, and operational priorities.',
  },
  {
    number: '03',
    title: 'The audit',
    body:
      'A focused audit produces a clear roadmap tied to revenue, efficiency, workflow, and customer visibility.',
  },
  {
    number: '04',
    title: 'The activation',
    body:
      'Hands-on implementation and training help your team use AI tools independently and see results quickly.',
  },
];

export const homepageCta = {
  title: 'Start now.',
  body:
    'Discover. Train. Activate. Find out where AI fits in your business and start getting real results.',
  buttonLabel: 'Get in Touch',
  buttonHref: siteConfig.contactHref,
};
