export type ProductDetail = {
  id: string;
  slug: string;
  section: 'services' | 'products';
  label: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  ctaHref: string;
  ctaLabel: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  overview: string;
  features: { title: string; description: string }[];
  outcome: string;
  stats?: { value: string; label: string }[];
  targetAudience?: string[];
  testimonials?: { quote: string; author: string; role: string }[];
  faqs?: { question: string; answer: string }[];
};

export const productDetails: ProductDetail[] = [
  {
    id: 'priority-ai',
    slug: 'priority-ai',
    section: 'services',
    label: 'DIAGNOSTIC TOOL',
    name: 'Priority AI',
    tagline: 'Find out where AI fits in your business.',
    description:
      'Maps opportunity, fluency, and change readiness by department, then gives you a prioritised action plan.',
    image: '/images/priority_ai_hero.jpg',
    ctaHref: 'https://calendar.app.google/bZ3j6WLHznPt1FP4A',
    ctaLabel: 'Start your diagnostic',
    hero: {
      headline: 'Discover your true AI ROI.',
      subheadline:
        'An intelligent diagnostic tool that integrates directly with your payroll to pinpoint where AI will deliver the greatest commercial impact.',
    },
    overview:
      'Priority AI removes the guesswork from AI adoption. By analysing your specific workforce data and payroll structures, it identifies the high-value opportunities where AI automation will move the needle most. The comprehensive 81-question diagnostic takes just 14-20 minutes to complete, delivering a ranked roadmap of AI initiatives categorised by effort versus reward.',
    features: [
      { title: 'Payroll Integration', description: 'Connects seamlessly with your existing payroll systems to map AI opportunities against real workforce costs and identify significant savings.' },
      { title: 'Effort vs Reward Matrix', description: 'Every potential AI application is ranked on a clear matrix, ensuring you focus on high-impact, achievable wins first rather than complex, low-yield projects.' },
      { title: 'Departmental Analysis', description: 'Granular insights across every department, revealing hidden inefficiencies and automation opportunities that are often overlooked by general market research.' },
      { title: 'Rapid Diagnostic', description: 'A streamlined 81-question assessment that takes only 14-20 minutes, minimising disruption to your team while maximising strategic value for leadership.' },
    ],
    outcome:
      'A prioritised, data-backed roadmap detailing exactly where to invest your AI budget for maximum return on investment.',
    stats: [
      { value: '81', label: 'Diagnostic Questions' },
      { value: '14 min', label: 'Average Completion' },
      { value: '3×', label: 'Faster ROI Identification' },
      { value: '100%', label: 'Data-Backed' },
    ],
    targetAudience: [
      'CEOs and business owners exploring where AI fits in their operations',
      'Operations leaders who want to eliminate inefficiency with precision',
      'HR and finance teams managing workforce cost optimisation',
      'Businesses that have tried AI pilots but seen inconsistent results',
    ],
    faqs: [
      { question: 'How long does the diagnostic actually take?', answer: 'Most teams complete it in 14–20 minutes. It is designed to be efficient and practical for business leaders.' },
      { question: 'Do I need technical knowledge to use Priority AI?', answer: 'No. Priority AI is built for business leaders, not engineers.' },
      { question: 'What do I receive at the end?', answer: 'A prioritised roadmap of AI opportunities ranked by effort versus reward, segmented by department, with clear recommended next steps.' },
    ],
  },
  {
    id: 'ai-consultancy',
    slug: 'ai-consultancy',
    section: 'services',
    label: 'AI STRATEGY & CONSULTATION',
    name: 'AI Consultancy',
    tagline: 'Bespoke AI strategy.',
    description: 'Practical, commercial, results focused. Workshops, masterclasses and a clear roadmap.',
    image: '/images/ai_consultancy_hero.jpg',
    ctaHref: 'https://calendar.app.google/bZ3j6WLHznPt1FP4A',
    ctaLabel: 'Book a Consultation',
    hero: {
      headline: 'Bespoke AI strategy tailored for commercial impact.',
      subheadline:
        'Practical, results-focused consultation, workshops, and masterclasses to build your clear roadmap.',
    },
    overview:
      'Our AI Consultancy provides bespoke, highly commercial strategies that cut through the hype. We focus strictly on practical implementations that deliver measurable results for your bottom line. Through targeted executive workshops, intensive masterclasses, and deep-dive consulting, we partner with your leadership to construct a clear, actionable roadmap for meaningful AI integration across your enterprise.',
    features: [
      { title: 'Bespoke Strategy Development', description: 'Customised AI roadmaps aligned with your commercial objectives, risk appetite, and industry context.' },
      { title: 'Executive Workshops', description: 'Facilitated strategy sessions designed to align leadership teams on generative AI capabilities and strategic prioritisation.' },
      { title: 'Immersive Masterclasses', description: 'Hands-on training for key personnel to build internal capability and drive sustainable AI adoption.' },
      { title: 'Results-Focused Implementation', description: 'A rigorous focus on applications that offer a clear return on investment.' },
    ],
    outcome:
      'A future-proofed business model powered by intelligent AI strategy, fully supported by the human expertise to keep it delivering value.',
    stats: [
      { value: '50+', label: 'Enterprises Transformed' },
      { value: '12+', label: 'Industries Covered' },
      { value: '3×', label: 'Average Productivity Uplift' },
      { value: '100%', label: 'Commercial Focus' },
    ],
    faqs: [
      { question: 'What does a typical engagement look like?', answer: 'We start with discovery, then deliver a tailored strategy workshop followed by a written roadmap and implementation support.' },
      { question: 'Is this only for large enterprises?', answer: 'No. We work with growing SMEs through to enterprise teams.' },
      { question: 'How long does an engagement run?', answer: 'Engagements can range from a focused strategy day to a longer embedded advisory partnership.' },
    ],
  },
  {
    id: 'geo-audit',
    slug: 'geo-audit',
    section: 'services',
    label: 'GET FOUND',
    name: 'GEO Audit',
    tagline: 'Can AI search engines see your brand?',
    description: 'Analyses your visibility across ChatGPT, Gemini, and Perplexity. Shows you how to get cited.',
    image: '/images/geo_audit_hero.jpg',
    ctaHref: 'https://calendar.app.google/bZ3j6WLHznPt1FP4A',
    ctaLabel: 'Start the audit',
    hero: {
      headline: 'Own the new era of search.',
      subheadline:
        'Measure and maximise your brand’s share of voice across ChatGPT, Perplexity, Grok, and the world’s leading AI models.',
    },
    overview:
      'As Generative AI rapidly reshapes how consumers discover information, traditional SEO is no longer enough. The GEO Audit provides a definitive analysis of your brand’s share of voice across major AI engines. Our methodology moves from a comprehensive audit, to identifying strategic opportunities, to activation and ongoing monitoring.',
    features: [
      { title: 'Comprehensive Audit', description: 'A baseline measurement showing how frequently, and how accurately, your brand is cited by leading AI models.' },
      { title: 'Opportunity Mapping', description: 'Identify the specific queries and topics where your competitors are winning the AI conversation.' },
      { title: 'Targeted Activation', description: 'Deploy content, PR, and structured-data strategies designed for AI retrieval and citation.' },
      { title: 'Ongoing Retainer', description: 'Continuous monitoring and strategy adjustment to maintain visibility as AI models evolve.' },
    ],
    outcome:
      'A clear picture of your AI search presence today and a targeted strategic roadmap to ensure your brand is consistently recommended by AI.',
    stats: [
      { value: '5+', label: 'AI Engines Audited' },
      { value: '87%', label: 'of Consumers Use AI Search' },
      { value: '0%', label: 'Traditional SEO Overlap' },
      { value: '1st', label: 'to Market in AU' },
    ],
    faqs: [
      { question: 'What exactly does a GEO Audit reveal?', answer: 'It maps your current share of voice across major AI engines, shows which queries you’re cited for, benchmarks you against competitors, and identifies content gaps.' },
      { question: 'How is GEO different from traditional SEO?', answer: 'SEO optimises for keyword-based search rankings. GEO optimises for citation frequency and sentiment in AI-generated responses.' },
      { question: 'How long does the audit take?', answer: 'The initial audit usually takes 5–7 business days and ends with a strategic briefing.' },
    ],
  },
  {
    id: 'agent-alice',
    slug: 'agent-alice',
    section: 'products',
    label: 'MARKETING & CONTENT',
    name: 'Agent Alice',
    tagline: '25 years of marketing expertise in one agent.',
    description: 'One piece of content in, a full multichannel campaign out. Matched to your tone of voice.',
    image: '/images/agent_alice_orchestra_v2.png',
    ctaHref: 'https://agent-alice.vercel.app/login',
    ctaLabel: 'Meet Agent Alice',
    hero: {
      headline: '25 years of marketing expertise in one agent.',
      subheadline:
        'Instantly repurpose existing content or generate new campaigns from scratch, fully optimised for modern search.',
    },
    overview:
      'Agent Alice is your tireless marketing director. Embedded with 25 years of strategic marketing intelligence, Alice can take a simple brief and transform it into a full suite of brand-aligned materials. Every output is optimised for both traditional SEO and the new frontier of GEO.',
    features: [
      { title: 'Intelligent Repurposing', description: 'Transform a single whitepaper or webinar into months of tailored social content, email sequences, and blog posts.' },
      { title: 'Brief from Scratch', description: 'Provide basic parameters and let Alice develop comprehensive, creative marketing campaigns.' },
      { title: 'SEO & GEO Optimised', description: 'Content engineered to rank and be favourably cited by leading AI models.' },
      { title: 'Unwavering Brand Voice', description: 'Strict adherence to your tone of voice guidelines across every output.' },
    ],
    outcome:
      'A highly efficient content engine that scales your marketing output without compromising on quality or brand consistency.',
    stats: [
      { value: '25 yrs', label: 'Marketing Expertise' },
      { value: '10×', label: 'Content Output Speed' },
      { value: '40+', label: 'Output Formats' },
      { value: '100%', label: 'Brand Voice Matched' },
    ],
  },
  {
    id: 'gatha-ai',
    slug: 'gatha-ai',
    section: 'products',
    label: 'PERSONAL DASHBOARD',
    name: 'Gatha.ai',
    tagline: 'Every saved link, article, newsletter and purchase on one visual wall.',
    description: 'Synthesise into a daily brief or podcast.',
    image: '/images/gatha_hero.png',
    ctaHref: 'https://calendar.app.google/bZ3j6WLHznPt1FP4A',
    ctaLabel: 'Explore Gatha.ai',
    hero: {
      headline: 'Your digital life, perfectly synthesised.',
      subheadline:
        'Bring every saved link, article, and newsletter onto a single visual wall, then turn it into a daily brief or bespoke podcast.',
    },
    overview:
      'Gatha.ai automatically aggregates your scattered digital consumption and organises it onto an intuitive visual wall. It then synthesises that content into a concise daily written brief or a personalised audio podcast.',
    features: [
      { title: 'Unified Visual Wall', description: 'A beautiful interface that gathers saved items, articles, and digital receipts in one searchable location.' },
      { title: 'Intelligent Synthesis', description: 'Advanced AI summarises complex articles and newsletters into the core insights you actually need.' },
      { title: 'Personalised Daily Briefs', description: 'Receive a custom-written morning summary of everything you saved but did not have time to read.' },
      { title: 'Audio Podcast Generation', description: 'Convert your reading list into a professional-grade synthesised audio podcast.' },
    ],
    outcome:
      'A unified workspace where personal knowledge is instantly accessible, synthesised, and actionable.',
  },
  {
    id: 'sarah-speaks',
    slug: 'sarah-speaks',
    section: 'products',
    label: 'AI TRAINING COURSE',
    name: 'Sarah Speaks',
    tagline: 'No jargon. No hype. Just skills.',
    description: 'Practical AI training for business leaders and teams. Skills you can use on Monday.',
    image: '/images/sarah_speaks_hero_new.jpg',
    ctaHref: 'https://calendar.app.google/bZ3j6WLHznPt1FP4A',
    ctaLabel: 'Start Learning',
    hero: {
      headline: 'Master AI at your own pace.',
      subheadline:
        'Transform from overwhelmed to confident with practical, self-paced AI fluency courses designed for professionals.',
    },
    overview:
      'Sarah Speaks demystifies AI with self-paced training courses designed to guide professionals through their first steps into AI. The focus is practical, everyday application rather than technical jargon.',
    features: [
      { title: 'Self-Paced Learning', description: 'Flexible modules designed to fit into busy professional schedules.' },
      { title: 'Practical Fluency', description: 'Focus on tools, prompts, and workflows that deliver immediate value.' },
      { title: 'Zero Jargon Guarantee', description: 'Complex concepts translated into clear, accessible language.' },
      { title: 'Progressive Curriculum', description: 'A structured path from beginner to confident AI user.' },
    ],
    outcome:
      'A workforce fully equipped to use AI as a force multiplier, moving quickly from overwhelmed to confident and capable.',
    stats: [
      { value: '12+', label: 'Hours of Content' },
      { value: '4', label: 'Core Modules' },
      { value: '5,000+', label: 'Professionals Trained' },
      { value: '100%', label: 'Self-Paced' },
    ],
    faqs: [
      { question: 'Who is this course designed for?', answer: 'Sarah Speaks is built for business leaders, managers, and professionals who want to use AI in their day-to-day work — no technical background required.' },
      { question: 'How long does the course take?', answer: 'The full curriculum is 12+ hours of content, broken into self-paced modules you can complete on your own schedule.' },
      { question: 'Is there any coding involved?', answer: 'None at all. Every lesson focuses on the interface, the strategy, and the human workflow — no coding required.' },
      { question: 'Will I get lifetime access?', answer: 'Yes. Once enrolled, you have lifetime access to all current content plus future updates as the course evolves.' },
    ],
  },
];

export function getProductBySectionAndSlug(section: string, slug: string) {
  return productDetails.find((product) => product.section === section && product.slug === slug);
}

export function getProductBySlug(slug: string) {
  return productDetails.find((product) => product.slug === slug);
}
