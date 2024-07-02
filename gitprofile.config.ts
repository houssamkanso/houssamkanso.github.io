// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'houssamkanso', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        //projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'EVA - Virtual Learning Environment',
          description: 'Deployment of a cluster of three servers that host virtual learning environments for students using Proxmox. ',
          imageUrl: './Images/eva-logo.png',
          link: '',
        },
        {
          title: 'UNITA - Project Management',
          description: 'Lead the working group that implemented and configured the OpenProject project management tool with the AGILE methodology for UNITA',
          imageUrl:'./Images/unita-logo.png',
          link: 'https://univ-unita.eu/Sites/',
        },
        {
          title: 'ERASMUS+ Extended Learning for Higher Education teachers and trainers',
          description: 'Manage the European project: Extended Learning for Higher Education teachers and trainers from the UPPA side',
          imageUrl:'./Images/xl-logo.png',
          link: 'https://www.extendedlearning.eu/',
        },
        {
          title: 'ISA NUM - Engineering School',
          description: 'Contribute to the creation of the ISA NUM engineering school (CTI accreditation, curriculum ,etc.)',
          imageUrl:'./Images/isanum-logo.jpg',
          link: 'https://formation.univ-pau.fr/fr/catalogue/sciences-technologies-sante-STS/diplome-d-ingenieur-FI/diplome-d-ingenieur-en-informatique-LP85S1TB.html',
        },
      ],
    },
  },
  seo: {
    title: 'Houssam Kanso',
    description: 'Ph.D. | Computer Science Researcher and Engineer',
    imageURL: '',
  },
  social: {
    linkedin: 'houssamkanso',
    twitter: '',
    mastodon: '',
    googlescolar: 'fucKNAcAAAAJ',
    researchGate: 'Houssam-Kanso',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '+33 7 87 40 41 26',
    email: 'houssam.kanso@univ-pau.fr',
    emaill: 'houssam_kanso@hotmail.com', // add information here, and in global.d.ts, global.tsx, sanitized-config.tsx, and detailed-card/index.tsx
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1OW2atAzR-Kw5iSKe8_kq-a3krZBJ3ux5/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Virtualisation',
    'Proxmox',
    'Java',
    'Python',
    'Machine learning',
    'SQL',
    'Networking',
    'HTML',
    'CSS',
    'Flask',
    'Shell',
    'Ontology',
    'MBSE',
    'IoT',
    'Assembly',
    'Green IT',
  ],
  experiences: [
    {
      company: '🇫🇷 Université de Pau et des Pays de l\'Adour',
      position: 'Researcher (Enseignant-Chercheur Contractuel)',
      from: 'January 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: '🇫🇷 Université de Pau et des Pays de l\'Adour',
      position: 'Ph.D. Candidate',
      from: 'October 2019',
      to: 'December 2022',
      companyLink: '',
    },
    {
      company: '🇫🇷 Groupe Renault',
      position: 'Autonomous Mobility Modeling Internship',
      from: 'March 2019',
      to: 'September 2019',
      companyLink: '',
    },
    {
      company: '🇱🇧 Université Antonine',
      position: 'Robotics Club Team Leader',
      from: 'September 2016',
      to: 'April 2018',
      companyLink: '',
    },
    {
      company: '🇱🇧 Takwin Digital',
      position: 'Web Development Internship',
      from: 'February 2018',
      to: 'March 2018',
      companyLink: '',
    },
    {
      company: '🇱🇧 MindField Digital',
      position: 'Software Quality Assurance Internship',
      from: 'June 2017',
      to: 'August 2017',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Certified: Azure Al Fundamentals',
      body: 'Credential ID 6BD1AB561C74DA22',
      year: 'May 2024',
      link: 'https://learn.microsoft.com/en-us/users/houssamkanso-1496/credentials/6bd1ab561c74da22?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },{
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Credential ID 2C8F5188F3DD2C65',
      year: 'June 2023',
      link: 'https://learn.microsoft.com/en-us/users/houssamkanso-1496/credentials/2c8f5188f3dd2c65?ref=https%3A%2F%2Fwww.linkedin.com%2F',
    },{
      name: 'LoRa and LoRaWAN® for the Internet of Things',
      body: 'Credential ID UC-67439150-74d0-405f-82d5-38e2614f27e',
      year: 'May 2023',
      link: 'https://drive.google.com/file/d/1mcj_jbufRdmt_zSzZoi__orNTWi6h9gW/view',
    },
  ],
  educations: [
    {
      institution: '🇫🇷 Université de Pau et des Pays de l\'Adour',
      degree: 'Ph.D. in Computer Science',
      from: '2019',
      to: '2022',
    },
    {
      institution: '🇫🇷 Université de Pau et des Pays de l\'Adour',
      degree: 'Master\'s degree in Computer Science',
      from: '2018',
      to: '2019',
    },
    {
      institution: '🇱🇧 Université Antonine',
      degree: 'Computer And Communication Engineer',
      from: '2014',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'A preliminary study of the energy impact of software in raspberry pi devices',
      conferenceName: '2020 IEEE 29th International Conference on Enabling Technologies: Infrastructure for Collaborative Enterprises (WETICE)',
      journalName: '',
      authors: 'K Kesrouani, H Kanso, A Noureddine',
      link: 'https://hal.science/hal-02936861/',
      description:
        '',
    },
    {
      title: 'Automated power modeling of computing devices: Implementation and use case for Raspberry Pis',
      conferenceName: '',
      journalName: 'Sustainable Computing: Informatics and Systems',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://hal.science/hal-03912723v1',
      description:
        '',
    },
    {
      title: 'A Review of Energy Aware Cyber-Physical Systems',
      conferenceName: '',
      journalName: 'T&F Cyber-Physical Systems',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://hal.science/hal-03912724v1',
      description:
        '',
    },
    {
      title: 'CPU Power Bench: An Automated Benchmark Tool for Power Estimation in Single-Board Computers',
      conferenceName: '9th International Conference on Information and Communications Technology for Sustainability',
      journalName: '',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://hal.science/hal-04083533v1',
      description:
        '',
    },
    {
      title: 'An automated energy management framework for smart homes',
      conferenceName: '',
      journalName: 'Journal of Ambient Intelligence and Smart Environments',
      authors: 'H Kanso, A Noureddine, E Exposito',
      link: 'https://hal.science/hal-04396046v1',
      description:
        '',
    },
    {
      title: 'A Preliminary Study of the Impact of Code Coverage on Software Energy Consumption',
      conferenceName: '36th IEEE/ACM International Conference on Automated Software Engineering Workshops (ASEW)',
      journalName: '',
      authors: 'A Noureddine, M Martinez, H Kanso',
      link: 'https://hal.science/hal-03380602v1',
      description:
        '',
    },
    {
      title: '[Ph.D. Thesis] Contributing to the Energy Efficiency of Smart Homes: An Automated Management Framework',
      conferenceName: 'Université de Pau et des Pays de l\'Adour',
      journalName: '',
      authors: 'H Kanso',
      link: 'https://hal.science/tel-04128670v1',
      description:
        '',
    },
    {
      title: 'Is well-tested code more energy efficient?',
      conferenceName: 'Workshops at 18th International Conference on Intelligent Environments (IE2022)',
      journalName: '',
      authors: 'A Noureddine, M Martinez, H Kanso, N Bru',
      link: 'https://hal.science/hal-03635797v1',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
