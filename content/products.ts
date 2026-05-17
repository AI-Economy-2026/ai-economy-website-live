export interface Product {
  id: string;
  slug: string;
  type: 'product' | 'service';
  label: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  letter: string;
  isBlack?: boolean;
  color: string;
  externalLink?: string;
  ctaLink?: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  overview: string;
  features: { title: string; description: string }[];
  outcome: string;
  cta: string;
  videoUrl?: string;
  stats?: { value: string; label: string }[];
  targetAudience?: string[];
  testimonials?: { quote: string; author: string; role: string }[];
  faqs?: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
}

export const products: Product[] = [
  {
    id: 'priority-ai',
    slug: 'priority-ai',
    type: 'product',
    label: 'DIAGNOSTIC TOOL',
    name: 'Priority AI.',
    tagline: 'Find out where AI fits in your business.',
    description:
      'Maps opportunity, fluency, and change readiness by department, then gives you a prioritised action plan.',
    image: '/images/priority_ai_hero.jpg',
    letter: 'P',
    color: '#2563EB',
    ctaLink: '#subscribe',
    hero: {
      headline: 'Discover your true AI ROI.',
      subheadline:
        'An intelligent diagnostic tool that integrates directly with your payroll to pinpoint where AI will deliver the greatest commercial impact.',
    },
    overview:
      'Priority AI removes the guesswork from AI adoption. By analysing your specific workforce data and payroll structures, it identifies the high-value opportunities where AI automation will move the needle most. The comprehensive 81-question diagnostic takes just 14-20 minutes to complete, delivering a ranked roadmap of AI initiatives categorised by effort versus reward.',
    features: [
      {
        title: 'Payroll Integration',
        description:
          'Connects seamlessly with your existing payroll systems to map AI opportunities against real workforce costs and identify significant savings.',
      },
      {
        title: 'Effort vs Reward Matrix',
        description:
          'Every potential AI application is ranked on a clear matrix, ensuring you focus on high-impact, achievable wins first rather than complex, low-yield projects.',
      },
      {
        title: 'Departmental Analysis',
        description:
          'Granular insights across every department, revealing hidden inefficiencies and automation opportunities that are often overlooked by general market research.',
      },
      {
        title: 'Rapid Diagnostic',
        description:
          'A streamlined 81-question assessment that takes only 14-20 minutes, minimising disruption to your team while maximising strategic value for leadership.',
      },
    ],
    outcome:
      'A prioritised, data-backed roadmap detailing exactly where to invest your AI budget for maximum return on investment.',
    cta: 'Start your diagnostic',
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
      'Leadership teams under pressure to demonstrate AI ROI to the board',
    ],
    testimonials: [
      {
        quote:
          'We had been dabbling in AI for 18 months with zero clarity. Priority AI gave us a ranked roadmap in under 20 minutes. We knew exactly where to invest.',
        author: 'James R.',
        role: 'COO, Professional Services Firm',
      },
      {
        quote:
          'The payroll integration was a game changer. Seeing AI opportunities mapped against actual labour costs made the business case undeniable.',
        author: 'Priya K.',
        role: 'Head of Strategy, Mid-Market Enterprise',
      },
      {
        quote:
          'Finally, an AI tool that speaks the language of the boardroom — ROI, effort, impact. Not hype.',
        author: 'Marcus T.',
        role: 'CEO, Manufacturing Group',
      },
    ],
    faqs: [
      {
        question: 'How long does the diagnostic actually take?',
        answer:
          "Most teams complete it in 14–20 minutes. It's designed to be efficient — 81 precisely structured questions with no open-ended rambling required.",
      },
      {
        question: 'Do I need technical knowledge to use Priority AI?',
        answer:
          'Not at all. Priority AI is built for business leaders, not engineers. The questions are practical and commercial, and the results are in plain language.',
      },
      {
        question: 'What do I receive at the end?',
        answer:
          'A prioritised roadmap of AI opportunities ranked by effort versus reward, segmented by department, with clear recommended next steps.',
      },
      {
        question: 'Is my payroll data secure?',
        answer:
          'Absolutely. We use bank-grade encryption and never store raw payroll data. The integration only reads the structural data needed to map AI opportunity.',
      },
      {
        question: 'When will Priority AI be available?',
        answer:
          "We're in final development. Subscribe above to be first on the waitlist and receive early access.",
      },
    ],
    seo: {
      title: 'Priority AI – AI Readiness Diagnostic Tool | AI Economy',
      description:
        'Discover where AI can deliver the greatest ROI in your business. The Priority AI diagnostic maps opportunity, fluency, and change readiness by department.',
      canonical: 'https://aieconomy.ai/product/priority-ai',
    },
  },
  {
    id: 'agent-alice',
    slug: 'agent-alice',
    type: 'product',
    label: 'MARKETING & CONTENT',
    name: 'Agent Alice.',
    tagline: '25 years of marketing expertise in one agent.',
    description:
      'One piece of content in, a full multichannel campaign out. Matched to your tone of voice.',
    image: '/images/agent_alice_orchestra_v2.png',
    letter: 'A',
    color: '#2563EB',
    ctaLink: 'https://agent-alice.vercel.app/login',
    hero: {
      headline: '25 years of marketing expertise in one agent.',
      subheadline:
        'Instantly repurpose existing content or generate new campaigns from scratch, fully optimised for modern search.',
    },
    overview:
      "Agent Alice is your tireless marketing director. Embedded with 25 years of strategic marketing intelligence, Alice can take a simple brief and transform it into a full suite of brand-aligned materials. Whether you are repurposing legacy content or starting entirely from scratch, every output is meticulously optimised for both traditional SEO and the new frontier of GEO (Generative Engine Optimisation).",
    features: [
      {
        title: 'Intelligent Repurposing',
        description:
          'Transform a single whitepaper or webinar into months of tailored social content, email sequences, and blog posts with a few clicks.',
      },
      {
        title: 'Brief from Scratch',
        description:
          'Provide basic parameters and let Alice develop comprehensive, creative marketing campaigns that resonate with your target audience.',
      },
      {
        title: 'SEO & GEO Optimised',
        description:
          "Content engineered to rank highly on traditional search engines and be favourably cited by the world's leading AI models.",
      },
      {
        title: 'Unwavering Brand Voice',
        description:
          'Strict adherence to your tone of voice guidelines, ensuring every piece of content sounds authentically yours, every single time.',
      },
    ],
    outcome:
      'A highly efficient content engine that scales your marketing output without compromising on quality or brand consistency.',
    cta: 'Meet Agent Alice',
    stats: [
      { value: '25 yrs', label: 'Marketing Expertise' },
      { value: '10×', label: 'Content Output Speed' },
      { value: '40+', label: 'Output Formats' },
      { value: '100%', label: 'Brand Voice Matched' },
    ],
    targetAudience: [
      'Marketing managers overwhelmed by content demand across multiple channels',
      'Small business owners who need high-quality content without an agency budget',
      'Teams sitting on valuable legacy content that never gets repurposed',
      'Founders who need to build an audience but lack dedicated marketing staff',
      'Agencies looking to scale client content without proportionally scaling headcount',
    ],
    testimonials: [
      {
        quote:
          "Alice turned one 45-minute podcast into 3 months of social posts, 6 email newsletters, and a complete SEO article series. It's extraordinary.",
        author: 'Sophie L.',
        role: 'Head of Content, Tech Scale-up',
      },
      {
        quote:
          "She sounds exactly like us. We've been struggling to maintain our brand voice across channels for years. Alice solved it in one afternoon.",
        author: 'Ben A.',
        role: 'Founder, B2B SaaS',
      },
      {
        quote:
          'Our content volume doubled in 30 days. The ROI on Alice paid for itself in the first week.',
        author: 'Natalie P.',
        role: 'Marketing Director, Professional Services',
      },
    ],
    faqs: [
      {
        question: 'How does Agent Alice learn my brand voice?',
        answer:
          'You provide existing examples of your best content — blogs, emails, social posts. Alice analyses the tone, vocabulary, and structure to create a voice profile that\'s uniquely yours.',
      },
      {
        question: 'What content formats can Alice produce?',
        answer:
          'Blog posts, LinkedIn articles, email sequences, social captions, video scripts, webinar outlines, press releases, case studies, and more — across 40+ formats.',
      },
      {
        question: 'Does Alice replace my marketing team?',
        answer:
          'Alice augments your team, dramatically multiplying their output. Strategic decisions, creative direction, and client relationships stay firmly with your people.',
      },
      {
        question: 'How is Agent Alice optimised for AI search (GEO)?',
        answer:
          'Alice is trained on the citation patterns that lead major AI models to reference and recommend content. Every output is structured to maximise visibility in AI-generated answers.',
      },
      {
        question: 'Can I try Alice before committing?',
        answer: 'Yes — create a free account and run your first repurposing or brief. No credit card required.',
      },
    ],
    seo: {
      title: 'Agent Alice – AI Marketing & Content Agent | AI Economy',
      description:
        'One piece of content in, a full multichannel campaign out. Agent Alice is your AI marketing director with 25 years of strategic expertise.',
      canonical: 'https://aieconomy.ai/product/agent-alice',
    },
  },
  {
    id: 'gatha-ai',
    slug: 'gatha-ai',
    type: 'product',
    label: 'PERSONAL DASHBOARD',
    name: 'Gatha.ai.',
    tagline: 'Every saved link, article, newsletter and purchase on one visual wall.',
    description: 'Synthesise into a daily brief or podcast.',
    image: '/images/gatha_hero.png',
    letter: 'G',
    color: '#2563EB',
    ctaLink: '#subscribe',
    hero: {
      headline: 'Your digital life, perfectly synthesised.',
      subheadline:
        'Bring every saved link, article, and newsletter onto a single visual wall, then turn it into a daily brief or bespoke podcast.',
    },
    overview:
      "Gatha.ai is the ultimate curator for the information age. It automatically aggregates your scattered digital consumption—from bookmarked articles and newsletters to saved links and purchase histories—and organises them onto an intuitive, visual wall. But it doesn't stop at organisation. Gatha intelligently synthesises this vast ocean of content into a concise daily written brief or a personalised audio podcast, allowing you to consume your curated knowledge on the go.",
    features: [
      {
        title: 'Unified Visual Wall',
        description:
          'A single, beautiful interface that gathers all your disparate saved items, articles, and digital receipts in one central, searchable location.',
      },
      {
        title: 'Intelligent Synthesis',
        description:
          'Advanced AI summarises complex articles and lengthy newsletters into the core insights you actually need, stripping away the noise.',
      },
      {
        title: 'Personalised Daily Briefs',
        description:
          "Receive a custom-written morning summary of everything you saved but didn't have time to read yesterday, categorised by topic.",
      },
      {
        title: 'Audio Podcast Generation',
        description:
          'Convert your reading list into a professional-grade, synthesised audio podcast tailored perfectly for your daily commute or workout.',
      },
    ],
    outcome:
      'A unified workspace where personal knowledge is instantly accessible, synthesised, and actionable, eliminating digital clutter forever.',
    cta: 'Explore Gatha.ai',
    stats: [
      { value: '1', label: 'Unified Inbox for Everything' },
      { value: '5 min', label: 'Daily Brief Read Time' },
      { value: '∞', label: 'Sources Supported' },
      { value: '0', label: 'Links Lost Ever Again' },
    ],
    targetAudience: [
      'Knowledge workers drowning in newsletters, tabs, and bookmarks they never revisit',
      'Executives who need to stay informed but have zero time to read everything',
      'Lifelong learners who save content constantly but rarely find time to consume it',
      'Commuters who learn best through audio rather than reading',
      'Analysts and researchers managing large volumes of source material daily',
    ],
    testimonials: [
      {
        quote:
          "I had 847 unread newsletters. Gatha turned them into a 5-minute brief every morning. I'm finally informed again.",
        author: 'Claire M.',
        role: 'Strategy Director, Financial Services',
      },
      {
        quote:
          'The podcast feature is life-changing. I listen to my saved articles on the drive to work. My commute is now my most productive hour.',
        author: 'David S.',
        role: 'Entrepreneur & Investor',
      },
      {
        quote:
          'Gatha replaced four different tabs, two apps, and a notebook I never opened. Everything is finally in one place.',
        author: 'Yuki T.',
        role: 'Senior Product Manager',
      },
    ],
    faqs: [
      {
        question: 'Where does Gatha pull content from?',
        answer:
          'Gatha integrates with your email newsletters, browser bookmarks, Pocket, Instapaper, RSS feeds, and LinkedIn saves — all in one visual wall.',
      },
      {
        question: 'How is the daily brief generated?',
        answer:
          "Gatha's AI reads and analyses every piece of saved content, extracts the key insights, and compiles them into a structured, readable brief — tailored to your topic preferences.",
      },
      {
        question: 'Is the audio podcast an AI voice?',
        answer:
          'Yes — a high-quality, natural-sounding AI narrator reads your synthesised brief. You can customise the voice, speed, and topic ordering.',
      },
      {
        question: 'Will Gatha work with content behind paywalls?',
        answer:
          'Gatha works with content you have legitimate access to. For paywalled content, you can paste the text directly or use our browser extension to save full articles.',
      },
      {
        question: 'When does Gatha launch?',
        answer:
          "We're currently in closed beta. Subscribe above to join the waitlist and receive early access when we open the platform.",
      },
    ],
    seo: {
      title: 'Gatha.ai – Personal Knowledge Dashboard | AI Economy',
      description:
        'End the tab chaos. Gatha aggregates your newsletters, links, and articles into one visual wall, then turns it into a daily brief or bespoke podcast.',
      canonical: 'https://aieconomy.ai/product/gatha-ai',
    },
  },
  {
    id: 'sarah-speaks',
    slug: 'sarah-speaks',
    type: 'product',
    label: 'AI TRAINING COURSE',
    name: 'Sarah Speaks.',
    tagline: 'No jargon. No hype. Just skills.',
    description:
      'Practical AI training for business leaders and teams. Skills you can use on Monday.',
    image: '/images/sarah_speaks_hero_new.jpg',
    letter: 'S',
    color: '#2563EB',
    ctaLink: '#subscribe',
    hero: {
      headline: 'Master AI at your own pace.',
      subheadline:
        'Transform from overwhelmed to confident with our practical, self-paced AI fluency courses designed for every professional.',
    },
    overview:
      'Sarah Speaks demystifies the world of Artificial Intelligence. Our self-paced training courses are explicitly designed to guide professionals through their crucial first steps into AI. Rather than focusing on complex technical jargon, we prioritise practical, everyday applications that immediately enhance productivity and confidence, helping you navigate the AI landscape securely.',
    features: [
      {
        title: 'Self-Paced Learning',
        description:
          'Flexible modules designed to fit into busy professional schedules, letting you learn on your own timeline without any added pressure.',
      },
      {
        title: 'Practical Fluency',
        description:
          'Focus on the actual tools, prompts, and workflows that deliver immediate value in the modern workplace and solve real commercial problems.',
      },
      {
        title: 'Zero Jargon Guarantee',
        description:
          'Complex AI concepts and architectural principles translated into clear, accessible language that anyone, regardless of technical background, can understand.',
      },
      {
        title: 'Progressive Curriculum',
        description:
          'Carefully structured educational paths that take you from an absolute beginner to a confident, highly capable AI user within weeks.',
      },
    ],
    outcome:
      'A workforce fully equipped to use AI as a force multiplier, moving quickly from overwhelmed to confident and capable.',
    cta: 'Start Learning',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    stats: [
      { value: '5,000+', label: 'Professionals Trained' },
      { value: '4.9★', label: 'Average Rating' },
      { value: '6 weeks', label: 'To Full Fluency' },
      { value: '0', label: 'Technical Background Required' },
    ],
    targetAudience: [
      'Business professionals who feel left behind by the pace of AI change',
      'Team leaders wanting to upskill their people without a tech degree',
      'Entrepreneurs who want to use AI tools but don\'t know where to start',
      'HR professionals managing AI change management across their organisation',
      'Anyone who feels anxious about AI and wants to feel confident instead',
    ],
    testimonials: [
      {
        quote:
          "I went from panicking about AI to using it every single day in my work. Sarah's course is the only one that made sense to a non-tech person like me.",
        author: 'Rachel B.',
        role: 'Marketing Manager, SME',
      },
      {
        quote:
          'We ran Sarah Speaks across our entire leadership team. Within two weeks, the conversations in our boardroom completely transformed.',
        author: 'Tom W.',
        role: 'MD, Professional Services',
      },
      {
        quote:
          'The zero jargon guarantee is real. I understood every module, applied it immediately, and saved 6 hours a week within the first month.',
        author: 'Amara O.',
        role: 'Operations Manager',
      },
    ],
    faqs: [
      {
        question: 'Do I need any technical background?',
        answer:
          'Absolutely none. Sarah Speaks is designed specifically for non-technical professionals. If you can use a smartphone, you can do this course.',
      },
      {
        question: 'How long are the modules?',
        answer:
          'Each module is between 10 and 25 minutes — designed to fit into a lunch break or commute. You progress entirely at your own pace.',
      },
      {
        question: 'Will the content stay up to date as AI evolves?',
        answer:
          "Yes. All enrolled students receive free module updates as the AI landscape evolves. You'll never be left behind.",
      },
      {
        question: 'Is this suitable for entire teams?',
        answer:
          'Perfectly. We offer team licences and cohort-based learning options for organisations who want a shared learning experience.',
      },
      {
        question: 'When does Sarah Speaks launch?',
        answer:
          "We're putting the finishing touches on the curriculum now. Subscribe above to receive first access and a launch discount.",
      },
    ],
    seo: {
      title: 'Sarah Speaks – Practical AI Training for Business | AI Economy',
      description:
        'No jargon. No hype. Just skills. Practical AI training for business leaders and teams. Skills you can use on Monday morning.',
      canonical: 'https://aieconomy.ai/product/sarah-speaks',
    },
  },
  {
    id: 'ai-toolkit',
    slug: 'ai-toolkit',
    type: 'product',
    label: 'AI TOOLKIT',
    name: 'AI TOOLKIT.',
    tagline: 'The tools Sarah actually uses.',
    description:
      '50+ handpicked AI tools across writing, coding, design, video, and more. Tested, curated, and updated weekly.',
    image: '/images/ai_toolkit_hero.jpg',
    letter: 'T',
    color: '#2563EB',
    ctaLink: '/toolkit',
    hero: {
      headline: 'Cut through the noise. Use the tools that work.',
      subheadline:
        'A curated directory of 50+ AI tools handpicked by Sarah — tested across writing, coding, design, video, productivity, and research.',
    },
    overview:
      "The AI landscape is overwhelming. New tools launch every week, and most of them aren't worth your time. The AI Toolkit is Sarah's personally curated directory of the tools she's actually tested and uses — organised by category, searchable, and updated weekly. No fluff, no affiliate hype, just honest picks.",
    features: [
      {
        title: 'Curated by Sarah',
        description:
          "Every tool has been personally tested. If it's in the directory, it's earned its place through real-world use across real business workflows.",
      },
      {
        title: 'Organised by Category',
        description:
          'Browse by writing, coding, image & design, video, productivity, research, and audio — so you find the right tool for the right job, fast.',
      },
      {
        title: '50+ Tools Reviewed',
        description:
          'A growing library of AI tools with honest assessments of what each tool does well, who it\'s for, and what it costs.',
      },
      {
        title: 'Updated Weekly',
        description:
          "The AI space moves fast. The toolkit is refreshed weekly so you're always working with the most current recommendations.",
      },
    ],
    outcome:
      "A clear, trusted shortlist of AI tools that actually deliver — so you stop wasting time on tools that don't.",
    cta: 'Explore the Toolkit',
    stats: [
      { value: '50+', label: 'Tools Reviewed' },
      { value: '7', label: 'Categories' },
      { value: 'Weekly', label: 'Updates' },
      { value: '100%', label: 'Personally Tested' },
    ],
    targetAudience: [
      "Business professionals who want to use AI but don't know which tools to trust",
      'Entrepreneurs looking to build AI into their workflow without the trial and error',
      'Teams wanting a vetted shortlist rather than endless product comparisons',
      "Anyone who's tried an AI tool, been disappointed, and wants reliable recommendations",
      'Sarah Speaks students ready to put their new skills to work with the right tools',
    ],
    faqs: [
      {
        question: 'How are tools selected for the toolkit?',
        answer:
          'Every tool is personally tested by Sarah across real business use cases. Tools are assessed on output quality, ease of use, value for money, and practical utility.',
      },
      {
        question: 'Are these affiliate links?',
        answer:
          'Some tools in the directory use affiliate links, which is disclosed transparently on the toolkit. This never influences which tools are included — only tools that genuinely earn their place make the cut.',
      },
      {
        question: 'How often is the toolkit updated?',
        answer:
          "The toolkit is reviewed and updated weekly. New tools are added as they're tested, and existing entries are revised as products evolve.",
      },
      {
        question: 'Is the toolkit free to access?',
        answer: 'Access details are on the toolkit page. Some tiers may be available for Sarah Speaks students.',
      },
      {
        question: 'Can I suggest a tool for review?',
        answer:
          "Yes — there's a submission option within the toolkit. Sarah reviews all suggestions but can't guarantee every tool will be featured.",
      },
    ],
    seo: {
      title: 'AI Toolkit – 50+ Curated AI Tools | AI Economy',
      description:
        '50+ handpicked AI tools across writing, coding, design, video, and more. Tested by Sarah, curated for real business workflows, and updated weekly.',
      canonical: 'https://aieconomy.ai/product/ai-toolkit',
    },
  },
  {
    id: 'parently',
    slug: 'parently',
    type: 'product',
    label: 'LIFE ADMIN ASSISTANT',
    name: 'Parently.',
    tagline: 'The home hub for busy parents.',
    description:
      'One app for school comms, sports schedules, event coordination, and family directories.',
    image: 'https://parently.ai/assets/iphones-rEmnETnv.png',
    letter: 'P',
    color: '#2563EB',
    externalLink: 'https://parently.ai/',
    hero: {
      headline: 'The AI assistant for modern parenting.',
      subheadline:
        'Centralise school apps, family schedules, and endless to-dos with an intelligent voice and chat AI.',
    },
    overview:
      "Parently is the intelligent life admin assistant designed specifically to tackle the mental load of busy parents. By providing a unified hub for school communications, extracurricular schedules, and family to-dos, Parently brings order to household chaos. With intuitive voice and chat interfaces, managing your family's logistics is now as simple as having a conversation.",
    features: [
      {
        title: 'Unified Family Hub',
        description:
          'Consolidates multiple fragmented school apps, scattered sports schedules, and disorganised family calendars into a single, organised dashboard.',
      },
      {
        title: 'Voice & Chat Interface',
        description:
          'Add tasks, check schedules, or ask for updates using natural language voice commands or simple text chats while on the move.',
      },
      {
        title: 'Smart Scheduling',
        description:
          'Automatically extracts dates, times, and crucial details from school newsletters and syncs them seamlessly directly to your calendar.',
      },
      {
        title: 'To-Do Management',
        description:
          'Intelligently categorises and prioritises household tasks, ensuring permission slips, payments, and appointments never fall through the cracks.',
      },
    ],
    outcome:
      'Reclaim hours of administrative overhead each week and permanently reduce the mental load of running a modern household.',
    cta: 'Visit Parently.ai',
    stats: [
      { value: '5+ hrs', label: 'Saved Per Week' },
      { value: '1', label: 'App for Everything' },
      { value: '0', label: 'Missed Permission Slips' },
      { value: '∞', label: 'Sanity Restored' },
    ],
    targetAudience: [
      'Parents juggling multiple school apps, group chats, and shared calendars',
      'Working parents who need family admin to run itself without constant checking',
      'Families with multiple children across different schools and activities',
      'Co-parents who need a shared, neutral hub for family coordination',
      'Parents exhausted by the invisible mental load of running a household',
    ],
    testimonials: [
      {
        quote:
          'I deleted four apps after installing Parently. Everything I needed was finally in one place. The school newsletter auto-sync alone is worth it.',
        author: 'Anna G.',
        role: 'Working Mum, Two Kids',
      },
      {
        quote:
          'As a co-parent, the shared calendar and tasks feature removed so much friction from our daily coordination. Genuinely life-changing.',
        author: 'Michael B.',
        role: 'Dad, Shared Custody',
      },
      {
        quote:
          "I missed a permission slip deadline EVERY term. In six months with Parently, I've had zero misses. Zero. I can't recommend it enough.",
        author: 'Steph C.',
        role: 'Parent of Three',
      },
    ],
    faqs: [
      {
        question: 'Which school apps does Parently connect with?',
        answer:
          'Parently connects with the most common school communication platforms including Compass, Seesaw, Skoolbag, and more. You can also forward emails directly to your Parently inbox.',
      },
      {
        question: 'Can both parents access the same account?',
        answer:
          'Yes — Parently supports multiple users on a single family account with individual profiles and shared family views.',
      },
      {
        question: 'Is it available on iOS and Android?',
        answer:
          'Parently is available on both iOS and Android, plus a web dashboard for desktop use.',
      },
      {
        question: "Does Parently share my family's data?",
        answer:
          'Never. Your family data is encrypted, private, and never sold or shared with third parties.',
      },
      {
        question: 'How much does Parently cost?',
        answer:
          'Visit parently.ai for the latest pricing. There is a free tier available to get started.',
      },
    ],
    seo: {
      title: 'Parently – AI Life Admin for Busy Parents | AI Economy',
      description:
        'One app for school comms, sports schedules, event coordination, and family directories. The AI assistant for modern parenting.',
      canonical: 'https://aieconomy.ai/product/parently',
    },
  },
  {
    id: 'prolinks',
    slug: 'prolinks',
    type: 'product',
    label: 'DOCUMENT TRANSFORMATION',
    name: 'PROLINKS.',
    tagline: 'Smart docs. Zero chaos.',
    description:
      'Trackable, AI-powered smart links with built-in assistant, audio overviews in 40+ languages, and deep engagement analytics.',
    image: '/images/prolinks_hero.jpg',
    letter: 'P',
    color: '#2563EB',
    ctaLink: 'https://prolinksai.com/',
    hero: {
      headline: 'Intelligence for your documents.',
      subheadline:
        'Transform static PDFs into dynamic, trackable web experiences with powerful analytics and e-signatures.',
    },
    overview:
      'PROLINKS revolutionises how businesses share and interact with documents. It seamlessly converts static, lifeless PDFs into dynamic, AI-powered web experiences. Equipped with advanced features like heat mapping, secure e-signatures, deep analytics, and 2-way feedback mechanisms, PROLINKS provides unprecedented visibility into how your documents are engaged with. We are currently raising $2.2M to address a Total Addressable Market of $4.09B by 2028.',
    features: [
      {
        title: 'Dynamic Transformation',
        description:
          'Instantly turn rigid, unreadable PDFs into responsive, interactive web pages that look stunning and perform perfectly on any mobile device.',
      },
      {
        title: 'Deep Analytics & Heat Mapping',
        description:
          'See exactly where your readers spend their time, which sections shots they skip, and how they interact with your most critical content.',
      },
      {
        title: 'Integrated E-Signatures',
        description:
          'Secure, legally binding electronic signatures built directly into the document experience, removing friction from the conversion process.',
      },
      {
        title: '2-Way Feedback',
        description:
          'Enable contextual discussions, inline comments, and direct feedback mechanisms directly within the structured document environment.',
      },
    ],
    outcome:
      'Higher conversion rates, significantly deeper user engagement, and actionable intelligence extracted from every document you send.',
    cta: 'Explore PROLINKS',
    stats: [
      { value: '$4.09B', label: 'Total Addressable Market' },
      { value: '40+', label: 'Languages Supported' },
      { value: '3×', label: 'Higher Engagement vs PDFs' },
      { value: '100%', label: 'Legally Binding Signatures' },
    ],
    targetAudience: [
      'Sales teams whose proposals are being ignored or never fully read',
      'Law and professional services firms managing high-volume document workflows',
      'Startups sending investor decks and pitch materials into a void',
      'Marketing teams whose reports and case studies need to prove their impact',
      'Any business that sends PDFs and has no idea what happens next',
    ],
    testimonials: [
      {
        quote:
          'We could finally see who read our investor deck, for how long, and which pages. We closed our seed round two weeks after switching to PROLINKS.',
        author: 'Chris D.',
        role: 'Founder, FinTech Startup',
      },
      {
        quote:
          'The heat mapping told us our pricing page was being skipped entirely. We fixed it. Conversion on proposals jumped by 34%.',
        author: 'Laura M.',
        role: 'Head of Sales, B2B SaaS',
      },
      {
        quote:
          'Our contracts used to take 2 weeks to sign. With PROLINKS e-signatures embedded, our average turnaround is now under 24 hours.',
        author: 'Richard N.',
        role: 'Partner, Legal Practice',
      },
    ],
    faqs: [
      {
        question: 'Do recipients need to install anything to view PROLINKS documents?',
        answer:
          "No. Documents open instantly in any browser on any device. There's no app, no login, and no friction for your recipients.",
      },
      {
        question: 'Are the e-signatures legally binding?',
        answer:
          'Yes. PROLINKS e-signatures comply with electronic signature law in Australia, the UK, the US, and the EU.',
      },
      {
        question: 'What analytics do I get?',
        answer:
          'You see time spent per page, scroll depth, heat maps, total views, individual viewer profiles, and device type data — all in a clean dashboard.',
      },
      {
        question: 'Can I use PROLINKS for confidential documents?',
        answer:
          'Yes. You can set password protection, viewer authentication, document expiry, and download restrictions on any document.',
      },
      {
        question: 'How do I convert my existing PDFs?',
        answer:
          'Upload your PDF to PROLINKS and it converts automatically in seconds. No design work required.',
      },
    ],
    seo: {
      title: 'PROLINKS – AI-Powered Document Intelligence | AI Economy',
      description:
        'Transform static PDFs into dynamic, trackable web experiences with heat mapping, e-signatures, and deep engagement analytics.',
      canonical: 'https://aieconomy.ai/product/prolinks',
    },
  },
  {
    id: 'geo-audit',
    slug: 'geo-audit',
    type: 'service',
    label: 'GET FOUND',
    name: 'GEO Audit.',
    tagline: 'Can AI search engines see your brand?',
    description:
      'Analyses your visibility across ChatGPT, Gemini, and Perplexity. Shows you how to get cited.',
    image: '/images/geo_audit_hero.jpg',
    letter: 'G',
    color: '#2563EB',
    ctaLink: '#subscribe',
    hero: {
      headline: 'Own the new era of search.',
      subheadline:
        "Measure and maximise your brand's share of voice across ChatGPT, Perplexity, Grok, and the world's leading AI models.",
    },
    overview:
      "As Generative AI rapidly reshapes how consumers discover information, traditional SEO is no longer enough. The GEO Audit provides a definitive analysis of your brand's share of voice across major AI engines like ChatGPT, Perplexity, and Grok. Our proven methodology moves sequentially from a comprehensive initial Audit, to identifying strategic Opportunities, Activating targeted campaigns, and maintaining dominance through an ongoing Retainer.",
    features: [
      {
        title: 'Comprehensive Audit',
        description:
          'A baseline measurement to reveal exactly how frequently, and how accurately, your brand is cited by the leading Generative AI models.',
      },
      {
        title: 'Opportunity Mapping',
        description:
          'Identify the specific conversational search queries, topics, and contexts where your competitors are currently winning the AI conversation.',
      },
      {
        title: 'Targeted Activation',
        description:
          'Deploy specialised content strategies and PR motions designed specifically to influence AI training data and improve real-time retrieval.',
      },
      {
        title: 'Ongoing Retainer',
        description:
          'Continuous monitoring, reporting, and strategy adjustment to ensure sustained visibility and positive sentiment as AI models rapidly evolve.',
      },
    ],
    outcome:
      'A clear picture of your AI search presence today and a targeted strategic roadmap to ensure your brand is consistently recommended by AI.',
    cta: 'Start your journey',
    stats: [
      { value: '5+', label: 'AI Engines Audited' },
      { value: '87%', label: 'of Consumers Use AI Search' },
      { value: '0%', label: 'Traditional SEO Overlap' },
      { value: '1st', label: 'to Market in AU' },
    ],
    targetAudience: [
      "Marketing leaders who know AI search is growing but don't know their current visibility",
      'Brands investing heavily in SEO who want to extend that advantage into AI search',
      'B2B companies whose buyers use ChatGPT to shortlist vendors and suppliers',
      'Category-defining businesses who need to own the AI narrative in their space',
      'CMOs preparing their brand for a world where AI recommendations drive discovery',
    ],
    testimonials: [
      {
        quote:
          'We had no idea ChatGPT was recommending our competitor every time someone asked about our category. The GEO Audit was a wake-up call — and a roadmap.',
        author: 'Fiona J.',
        role: 'CMO, Professional Services',
      },
      {
        quote:
          'Within 60 days of the activation phase, our brand went from never mentioned to consistently cited across four major AI platforms.',
        author: 'Adrian C.',
        role: 'Head of Digital, Retail Brand',
      },
      {
        quote:
          'This is the most forward-thinking marketing investment we\'ve made in five years. Our competitors have no idea GEO even exists yet.',
        author: 'Simone H.',
        role: 'CEO, B2B Technology',
      },
    ],
    faqs: [
      {
        question: 'What exactly does a GEO Audit reveal?',
        answer:
          "It maps your current share of voice across major AI engines, shows which queries you're cited for (or missing from), benchmarks you against competitors, and identifies the specific content gaps to close.",
      },
      {
        question: 'How is GEO different from traditional SEO?',
        answer:
          'SEO optimises for keyword-based search rankings. GEO optimises for citation frequency and sentiment in AI-generated responses — a fundamentally different mechanism that requires different strategies.',
      },
      {
        question: 'How long does the audit take to complete?',
        answer:
          'The initial audit takes 5–7 business days. The full report is delivered with a strategic briefing session.',
      },
      {
        question: 'What does the Activation phase involve?',
        answer:
          'It involves targeted content creation, PR placement, and structured data optimisation specifically designed to influence how AI models retrieve and cite your brand.',
      },
      {
        question: 'When will GEO Audit be available?',
        answer:
          "We're onboarding our first clients now on a limited basis. Subscribe above to secure your priority access.",
      },
    ],
    seo: {
      title: 'GEO Audit – AI Visibility Ranking for Your Brand | AI Economy',
      description:
        'Analyse your brand visibility across ChatGPT, Gemini, and Perplexity. Get a strategic roadmap to own the AI search results in your category.',
      canonical: 'https://aieconomy.ai/product/geo-audit',
    },
  },
  {
    id: 'ai-consultancy',
    slug: 'ai-consultancy',
    type: 'service',
    label: 'AI STRATEGY & CONSULTATION',
    name: 'AI Consultancy.',
    tagline: 'Bespoke AI strategy.',
    description:
      'Practical, commercial, results focused. Workshops, masterclasses and a clear roadmap.',
    image: '/images/ai_consultancy_hero.jpg',
    letter: 'A',
    color: '#2563EB',
    ctaLink: '#contact',
    hero: {
      headline: 'Bespoke AI strategy tailored for commercial impact.',
      subheadline:
        'Practical, results-focused consultation, workshops, and masterclasses to build your clear roadmap.',
    },
    overview:
      'Our AI Consultancy provides bespoke, highly commercial strategies that cut through the hype. We focus strictly on practical implementations that deliver measurable results for your bottom line. Through targeted executive workshops, intensive masterclasses, and deep-dive consulting, we partner with your leadership to construct a clear, actionable roadmap for meaningful AI integration across your entire enterprise.',
    features: [
      {
        title: 'Bespoke Strategy Development',
        description:
          'Customised AI roadmaps aligned perfectly with your specific commercial objectives, risk appetite, and unique industry dynamics.',
      },
      {
        title: 'Executive Workshops',
        description:
          'Facilitated strategy sessions designed to align leadership teams on generative AI capabilities, operational risks, and strategic prioritisation.',
      },
      {
        title: 'Immersive Masterclasses',
        description:
          'Intensive, hands-on training for your key personnel to build internal capability and drive sustainable, confident AI adoption.',
      },
      {
        title: 'Results-Focused Implementation',
        description:
          "A rigorous, uncompromising focus on applications that offer a clear return on investment, completely avoiding technology for technology's sake.",
      },
    ],
    outcome:
      'A future-proofed business model powered by intelligent AI strategy, fully supported by the human expertise to keep it delivering value.',
    cta: 'Book a Consultation',
    stats: [
      { value: '50+', label: 'Enterprises Transformed' },
      { value: '12+', label: 'Industries Covered' },
      { value: '3×', label: 'Average Productivity Uplift' },
      { value: '100%', label: 'Commercial Focus' },
    ],
    targetAudience: [
      'CEOs and senior leaders who need a clear, honest AI strategy — not vendor hype',
      'Boards under pressure to demonstrate AI credibility to investors and stakeholders',
      'Operations directors who want to automate intelligently, not recklessly',
      'HR leaders navigating AI\'s impact on workforce structure and culture',
      'Innovation teams who need external expertise to accelerate their internal vision',
    ],
    testimonials: [
      {
        quote:
          'Sarah cuts through the noise like no one else. We had three vendor pitches that week — none of them gave us the clarity one session with her consultancy did.',
        author: 'Jonathan H.',
        role: 'CEO, ASX-Listed Company',
      },
      {
        quote:
          'Our board was divided on AI strategy. After the executive workshop, we had full alignment and a roadmap we could actually execute.',
        author: 'Michelle K.',
        role: 'Chair, Private Equity Portfolio Company',
      },
      {
        quote:
          'The ROI on our AI Consultancy engagement was realised within the first 90 days. The roadmap they built us is our most valuable strategic asset.',
        author: 'Sean P.',
        role: 'COO, National Logistics Firm',
      },
    ],
    faqs: [
      {
        question: 'What does a typical engagement look like?',
        answer:
          'We start with a discovery session to understand your business, then deliver a tailored strategy workshop followed by a written roadmap and implementation support.',
      },
      {
        question: 'Is this only for large enterprises?',
        answer:
          'No. We work with businesses of all sizes, from growing SMEs to ASX-listed corporations. Our strategies are scaled to your context and resources.',
      },
      {
        question: 'Do you implement the AI tools yourselves?',
        answer:
          'We focus on strategy and selection — ensuring you choose the right tools for your specific commercial needs. We partner with trusted implementation specialists where required.',
      },
      {
        question: 'How long does a full consultancy engagement run?',
        answer:
          'Engagements range from a single intensive strategy day through to a 6-month embedded advisory partnership, depending on your needs.',
      },
      {
        question: 'How do I get started?',
        answer:
          "Book a no-obligation discovery call using the button above. We'll assess whether we're the right fit and outline a proposed engagement structure.",
      },
    ],
    seo: {
      title: 'AI Consultancy – Bespoke AI Strategy | AI Economy',
      description:
        'Practical, commercial, results-focused AI consulting. Workshops, masterclasses, and a clear roadmap for AI integration that delivers measurable outcomes.',
      canonical: 'https://aieconomy.ai/product/ai-consultancy',
    },
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
