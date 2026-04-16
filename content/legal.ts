export type LegalSection = {
  heading: string;
  body: string;
};

export type LegalPageContent = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPageContent: LegalPageContent = {
  title: 'Privacy Policy',
  updatedAt: '17 April 2026',
  intro:
    'At AI Economy, we take your privacy seriously. This privacy policy describes our policies and procedures on the collection, use and disclosure of your information when you use the service.',
  sections: [
    {
      heading: 'Information Collection and Use',
      body:
        'We collect several different types of information for various purposes to provide and improve our service to you. This includes tracking cookies, generic engagement metrics, and contact information strictly provided by you via forms.',
    },
    {
      heading: 'Security',
      body:
        'The security of your personal information is extremely important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.',
    },
    {
      heading: 'Contact Us',
      body:
        'If you have any questions about this Privacy Policy, please contact us.',
    },
  ],
};

export const termsPageContent: LegalPageContent = {
  title: 'Terms of Use',
  updatedAt: '17 April 2026',
  intro:
    'Welcome to AI Economy. These terms and conditions outline the rules and regulations for the use of our website and services.',
  sections: [
    {
      heading: 'Acceptance of Terms',
      body:
        "By accessing this website we assume you fully accept these terms and conditions in full. Do not continue to use AI Economy's website if you do not accept all of the terms and conditions stated on this page.",
    },
    {
      heading: 'Intellectual Property Rights',
      body:
        'Unless otherwise stated, AI Economy and/or its licensors own the intellectual property rights for all material on AI Economy. All intellectual property rights are reserved.',
    },
    {
      heading: 'Limitation of Liability',
      body:
        'AI Economy will not be liable for any damages that arise from the use of our web services.',
    },
  ],
};
