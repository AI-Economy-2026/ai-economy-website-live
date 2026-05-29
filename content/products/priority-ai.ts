// Priority AI — page-specific content
// AI agents: edit copy here, not in components/product/PriorityAIPage.tsx

import { Target, Banknote, ShieldX } from 'lucide-react';

export const priorityAIContent = {
  hero: {
    eyebrow: 'AI Readiness Diagnostic',
    headline: 'Stop guessing.\nStart knowing.',
    body: 'In less than 10 minutes, find out where AI can automate operations, cut costs, and help you scale. Get a tailored roadmap with confident next steps.',
  },

  painPoints: [
    { text: 'AI pilots scattered across departments with no strategic thread', icon: 'Target' },
    { text: "Budget spent on tools nobody uses because teams weren't ready", icon: 'Banknote' },
    { text: 'Resistance from teams who see AI as a threat, not an advantage', icon: 'ShieldX' },
  ],

  modulesHeadline: 'Three modules.\nOne complete picture.',
  modulesSubheadline: 'Run one or run all three. Each builds on the last.',
  modules: [
    {
      id: '1',
      price: 'Included',
      title: 'Opportunity Scan',
      desc: 'Maps departments against AI automation potential. Ranks by estimated hours saved and cost impact.',
      features: ['Department-level mapping', 'Hours saved estimates', 'Cost impact analysis', 'Priority ranking'],
    },
    {
      id: '2',
      price: '$XX',
      title: 'Fluency Assessment',
      desc: 'Measures team AI literacy. Classifies individuals and teams as Aware, Starter, Confident, or Pioneer.',
      features: ['Individual scoring', 'Team heatmaps', 'Fluency classification', 'Training recommendations'],
    },
    {
      id: '3',
      price: '$XX',
      title: 'Human Advantage',
      desc: 'Evaluates cultural readiness, leadership alignment, trust levels, and change capacity.',
      features: ['Cultural readiness score', 'Leadership alignment', 'Trust assessment', 'Change capacity index'],
    },
  ],

  matrixHeadline: 'Your Priority Matrix.',
  matrixSubheadline: 'Every department plotted across two axes. AI opportunity vs. team readiness.',
  matrixQuadrants: [
    { title: 'Fast Track', cond: 'High opportunity + High readiness', act: 'Deploy now' },
    { title: 'Train First', cond: 'High opportunity + Low readiness', act: 'Upskill before tools' },
    { title: 'Optimise', cond: 'Low opportunity + High readiness', act: 'Revisit later' },
    { title: 'Foundation', cond: 'Low opportunity + Low readiness', act: 'Build fundamentals first' },
  ],

  howItWorksHeadline: 'How it works.',
  howItWorksSteps: [
    { step: '01', title: 'Complete the diagnostic', desc: 'Answer questions about your operations, team capabilities, and culture. Takes 15 to 20 minutes per module.' },
    { step: '02', title: 'Receive your Priority Matrix', desc: 'Every department plotted on a 2×2 grid showing exactly where to start, where to train, and where to wait.' },
    { step: '03', title: 'Get your action plan', desc: 'A prioritised roadmap with specific recommendations for tools, training, and quick wins. Ready to present to leadership.' },
  ],

  builtFor: ['Business owners', 'Ops & finance heads', 'HR & L&D leads', 'IT directors', 'Consultants'],

  finalCta: {
    headline: 'Start with the Opportunity Scan.',
    body: 'Ten minutes. Find out which departments have the biggest AI opportunity.',
    buttonLabel: 'Start your diagnostic',
  },
};
