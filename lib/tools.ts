export type AITool = {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  logo: string;
  logoColor: string;
  featured?: boolean;
  badge?: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Free Trial';
};

export const categories = [
  { id: 'all', label: 'All Tools', slug: 'all' },
  { id: 'writing', label: 'Writing & Chat', slug: 'writing' },
  { id: 'image', label: 'Image & Design', slug: 'image' },
  { id: 'coding', label: 'Coding', slug: 'coding' },
  { id: 'video', label: 'Video', slug: 'video' },
  { id: 'productivity', label: 'Productivity', slug: 'productivity' },
  { id: 'research', label: 'Research', slug: 'research' },
  { id: 'audio', label: 'Audio', slug: 'audio' },
];

export const tools: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'writing',
    categoryLabel: 'WRITING & CHAT',
    tagline: 'The AI that started the revolution.',
    description: "OpenAI's flagship conversational AI for writing, analysis, coding, and creation.",
    tags: ['Chat', 'Writing', 'Code', 'Analysis'],
    url: 'https://chat.openai.com',
    logo: 'G',
    logoColor: '#10A37F',
    featured: true,
    badge: 'Most Popular',
    pricing: 'Freemium',
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'writing',
    categoryLabel: 'WRITING & CHAT',
    tagline: 'Long-context reasoning that thinks before it speaks.',
    description: "Anthropic's AI excels at nuanced reasoning, long documents, and careful analysis.",
    tags: ['Chat', 'Analysis', 'Research', 'Writing'],
    url: 'https://claude.ai',
    logo: 'C',
    logoColor: '#CC785C',
    pricing: 'Freemium',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'coding',
    categoryLabel: 'CODING',
    tagline: 'The AI-first IDE loved by developers.',
    description: 'A VS Code fork with deeply integrated AI and codebase-aware assistance.',
    tags: ['IDE', 'Code Editor', 'AI Pair Programmer'],
    url: 'https://www.cursor.com',
    logo: 'Cu',
    logoColor: '#16A34A',
    badge: 'Trending',
    pricing: 'Freemium',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'image',
    categoryLabel: 'IMAGE & DESIGN',
    tagline: 'Turn words into stunning, artistic visuals.',
    description: 'The gold standard for AI image generation via Discord.',
    tags: ['Image Gen', 'Art', 'Design', 'Creative'],
    url: 'https://www.midjourney.com',
    logo: 'M',
    logoColor: '#6366F1',
    featured: true,
    badge: "Editor's Pick",
    pricing: 'Paid',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'research',
    categoryLabel: 'RESEARCH',
    tagline: 'Real-time search meets AI understanding.',
    description: 'A conversational search engine that finds, summarises, and cites real-time information.',
    tags: ['Search', 'Research', 'Citations', 'Real-time'],
    url: 'https://www.perplexity.ai',
    logo: 'P',
    logoColor: '#14B8A6',
    pricing: 'Freemium',
  },
  {
    id: 'runway',
    name: 'Runway',
    category: 'video',
    categoryLabel: 'VIDEO',
    tagline: 'AI video generation and editing for creators.',
    description: 'Generate video from text or images and edit with powerful AI tools.',
    tags: ['Video Gen', 'Editing', 'Text-to-Video'],
    url: 'https://runwayml.com',
    logo: 'R',
    logoColor: '#EF4444',
    pricing: 'Freemium',
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'audio',
    categoryLabel: 'AUDIO',
    tagline: 'Ultra-realistic AI voice generation.',
    description: 'Clone voices or generate high-quality speech in multiple languages.',
    tags: ['Voice AI', 'TTS', 'Voice Clone', 'Podcast'],
    url: 'https://elevenlabs.io',
    logo: 'E',
    logoColor: '#F59E0B',
    pricing: 'Freemium',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'productivity',
    categoryLabel: 'PRODUCTIVITY',
    tagline: 'Your workspace, supercharged with AI.',
    description: 'AI built directly into Notion for drafting, summarising, and organising work.',
    tags: ['Workspace', 'Notes', 'Docs', 'Productivity'],
    url: 'https://www.notion.so/product/ai',
    logo: 'N',
    logoColor: '#374151',
    pricing: 'Paid',
  },
];
