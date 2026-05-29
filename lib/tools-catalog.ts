export interface CatalogTool {
  name: string;
  maker: string;
  category: string;
  description: string;
  price: string;
  plan?: string;
  websiteUrl: string;
  faviconDomain: string;
  categoryClass?: string;
  cardClass?: string;
}

export const CATALOG_TOOLS: CatalogTool[] = [
  { name: "Claude", maker: "Anthropic", category: "My Pick", categoryClass: "bg-[rgba(232,137,12,.15)] text-[#E8890C]", description: "My number one. Writing, strategy, deep analysis, coding & nuanced reasoning. Honest, helpful, sharp.", price: "Free", plan: "Pro: US$20/mo", websiteUrl: "https://claude.ai", faviconDomain: "claude.ai" },
  { name: "ChatGPT", maker: "OpenAI", category: "LLM & Image Gen", description: "The all-purpose AI. Writing, research, voice mode, custom GPTs & native image generation built right in.", price: "Free", plan: "Plus: US$20/mo", websiteUrl: "https://chatgpt.com", faviconDomain: "openai.com" },
  { name: "Perplexity", maker: "Perplexity AI", category: "AI Search", description: "AI-powered live web search with real, cited sources. Where every fact-check & current question starts.", price: "Free", plan: "Pro: US$20/mo", websiteUrl: "https://perplexity.ai", faviconDomain: "perplexity.ai" },
  { name: "Gemini", maker: "Google DeepMind", category: "LLM", description: "Google's AI with native Workspace, Docs & Gmail integration. Strong on multimodal tasks across formats.", price: "Free", plan: "Advanced: US$19.99/mo", websiteUrl: "https://gemini.google.com", faviconDomain: "gemini.google.com" },
  { name: "Grok", maker: "xAI", category: "LLM", description: "Live access to X, real-time trending topics & breaking news. Best for what is happening right now.", price: "Included with", plan: "X Premium", websiteUrl: "https://grok.com", faviconDomain: "x.ai" },
  { name: "Microsoft Copilot", maker: "Microsoft", category: "AI Assistant", description: "AI baked into Microsoft 365. Word, Excel, Outlook & Teams. Native to where you already work daily.", price: "Included with M365", plan: "Pro: US$20/mo", websiteUrl: "https://copilot.microsoft.com", faviconDomain: "copilot.microsoft.com" },
  { name: "Lindy", maker: "Lindy AI", category: "AI Assistant", description: "Build AI agents that handle your email, calendar & CRM workflows on autopilot. No code needed.", price: "Free", plan: "Pro: US$49.99/mo", websiteUrl: "https://lindy.ai", faviconDomain: "lindy.ai" },
  { name: "Manus", maker: "Manus AI", category: "AI Researcher", description: "Autonomous AI agent. Researches, writes & completes multi-step tasks independently. Set it & step away.", price: "Free (limited)", plan: "Standard: US$19/mo", websiteUrl: "https://manus.im", faviconDomain: "manus.im" },
  { name: "Genspark", maker: "Genspark", category: "AI Sparkpages", description: "Builds interactive visual Sparkpages from any topic. Research, present & share, all in one go.", price: "Free", websiteUrl: "https://genspark.ai", faviconDomain: "genspark.ai" },
  { name: "Lovable", maker: "Lovable", category: "Website Builder", description: "Describe your idea, get a working web app. Best for complex builds & full-stack production apps.", price: "Free", plan: "Starter: US$20/mo", websiteUrl: "https://lovable.dev", faviconDomain: "lovable.dev" },
  { name: "Blink.new", maker: "Blink", category: "Website Builder", description: "Lightning-fast prototyping & deployment. Best for quick builds, landing pages & MVPs in minutes.", price: "Free (beta)", websiteUrl: "https://blink.new", faviconDomain: "blink.new" },
  { name: "Blotato", maker: "Blotato", category: "Socials", description: "Create, schedule & post social content across every platform from one place. Repurpose in clicks.", price: "Free", plan: "Pro: US$19/mo", websiteUrl: "https://blotato.com", faviconDomain: "blotato.com" },
  { name: "Gamma", maker: "Gamma", category: "Presentations", description: "AI-powered presentations, decks & documents. Type a prompt, get polished slides in under a minute.", price: "Free", plan: "Plus: US$10/mo", websiteUrl: "https://gamma.app", faviconDomain: "gamma.app" },
  { name: "Napkin", maker: "Napkin AI", category: "Design (Icons)", description: "Turns plain text into diagrams, flowcharts & infographics. The fastest way to visualise an idea.", price: "Free (500 credits/wk)", plan: "Plus: US$12/mo", websiteUrl: "https://napkin.ai", faviconDomain: "napkin.ai" },
  { name: "Figma", maker: "Figma", category: "Design (UI)", description: "The industry standard for UI design, brand assets & team collaboration. Everyone designs in Figma.", price: "Free", plan: "Professional: US$15/mo", websiteUrl: "https://figma.com", faviconDomain: "figma.com" },
  { name: "Canva", maker: "Canva", category: "Design", description: "The easiest way to design social graphics, presentations & video. Templates for everything you need.", price: "Free", plan: "Pro: US$14.99/mo", websiteUrl: "https://canva.com", faviconDomain: "canva.com" },
  { name: "Midjourney", maker: "Midjourney", category: "Image Gen", description: "The highest quality AI image generation from text. Cinematic, branded & editorial-grade visuals.", price: "Basic: US$10/mo", websiteUrl: "https://midjourney.com", faviconDomain: "midjourney.com" },
  { name: "Claude Design", maker: "Anthropic", category: "New · Design", categoryClass: "bg-[#E8890C] text-white", description: "Claude can now design. Build landing pages, components & full mockups directly in chat. Design + code, one tool.", price: "Included with", plan: "Claude Pro: US$20/mo", websiteUrl: "https://claude.ai", faviconDomain: "claude.ai" },
  { name: "HeyGen", maker: "HeyGen", category: "Avatars", description: "AI video avatars, voice clones & instant translation in 175+ languages. Scale video without filming.", price: "Free", plan: "Creator: US$29/mo", websiteUrl: "https://heygen.com", faviconDomain: "heygen.com" },
  { name: "Loom", maker: "Loom", category: "Meetings", description: "Screen & camera recording with AI summaries, transcripts & action items. Async video for teams.", price: "Free", plan: "Business: US$15/mo", websiteUrl: "https://loom.com", faviconDomain: "loom.com" },
  { name: "Opus Clip", maker: "Opus Clip", category: "Editing", description: "Turns long videos into short, captioned clips for socials. Auto-detects highlights & best moments.", price: "Free", plan: "Pro: US$19/mo", websiteUrl: "https://opus.pro", faviconDomain: "opus.pro" },
  { name: "Higgsfield", maker: "Higgsfield", category: "Image & Video", description: "AI image & video creation from text prompts. Cinematic motion, characters & branded visuals at speed.", price: "Free (beta)", websiteUrl: "https://higgsfield.ai", faviconDomain: "higgsfield.ai" },
  { name: "ElevenLabs", maker: "ElevenLabs", category: "Voice & Clones", description: "Natural-sounding AI speech, voice cloning & dubbing in 29+ languages. The voice industry standard.", price: "Free", plan: "Creator: US$22/mo", websiteUrl: "https://elevenlabs.io", faviconDomain: "elevenlabs.io" },
  { name: "Wispr Flow", maker: "Wispr", category: "Voice to Text", description: "Dictate anywhere on your computer. Transcribes, formats & punctuates speech in real time. Lightning fast.", price: "Free", plan: "Pro: US$10/mo", websiteUrl: "https://wisprflow.ai", faviconDomain: "wisprflow.ai" },
  { name: "Read AI", maker: "Read AI", category: "Meetings", description: "AI for your meetings. Live transcription, smart summaries & action items across Zoom, Teams & Meet.", price: "Free", plan: "Pro: US$19.75/mo", websiteUrl: "https://read.ai", faviconDomain: "read.ai" },
  { name: "Calendly", maker: "Calendly", category: "Scheduling", description: "Automated scheduling that ends back-and-forth emails. Share a link, let people book the right time.", price: "Free", plan: "Standard: US$12/mo", websiteUrl: "https://calendly.com", faviconDomain: "calendly.com" },
  { name: "GoHighLevel", maker: "HighLevel", category: "CRM", description: "All-in-one platform. CRM, funnels, email, SMS, booking & automation in one tool. Replaces five.", price: "Starter: US$97/mo", websiteUrl: "https://gohighlevel.com", faviconDomain: "gohighlevel.com" },
  { name: "Asana", maker: "Asana", category: "Project Mgmt", description: "Project & task management with AI assist. Plans, tracks & reports on team work across every project.", price: "Free", plan: "Starter: US$13.49/mo", websiteUrl: "https://asana.com", faviconDomain: "asana.com" },
  { name: "Slack", maker: "Salesforce", category: "Comms", description: "Team messaging with AI-powered search, summaries & workflow automation. Where modern teams work.", price: "Free", plan: "Pro: US$8.75/mo", websiteUrl: "https://slack.com", faviconDomain: "slack.com" },
  { name: "Notion", maker: "Notion", category: "Workspace", description: "All-in-one workspace. Notes, docs, databases & project management with AI writing built in.", price: "Free", plan: "Plus: US$10/mo", websiteUrl: "https://notion.so", faviconDomain: "notion.so" },
  { name: "Microsoft Teams", maker: "Microsoft", category: "Comms", description: "Video calls, chat & collaboration with Microsoft Copilot built in. Native to the Microsoft 365 stack.", price: "Included with M365", websiteUrl: "https://teams.microsoft.com", faviconDomain: "microsoft.com" },
];

export function faviconUrl(domain: string): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
