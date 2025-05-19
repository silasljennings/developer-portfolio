export const navLinks = [
  {
    id: 1,
    name: '',
    href: '#home',
  },
  {
    id: 2,
    name: 'Bio',
    href: '#about',
  },
  {
    id: 3,
    name: 'Experience',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Github',
    href: 'https://github.com/silasljennings',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Leo Fabisinski',
    position: 'Senior Electrical Engineer at NASA',
    img: 'assets/leo-fabisinski.jpeg',
    review:
      'Having Luke as an intern was a fantastic experience. He showed a remarkable eagerness to learn and quickly adapted to the challenges at hand. His dedication and problem-solving abilities set him apart, and it’s been a pleasure to watch his career take off.',
  },
  {
    id: 2,
    name: 'Tyler Carter',
    position: 'Division Manager, Software at Intuitive',
    img: 'assets/tyler-carter.jpeg',
    review:
      "Luke's time at Intuitive was nothing short of impressive. He seamlessly moved between multiple teams, contributing to the development, testing, and QA of the AMPS (Aviation Mission Planning System) contract. His versatility, strong work ethic, and ability to adapt to new challenges made him an invaluable asset to the team. His contributions were key to the success of the project.",
  },
  {
    id: 3,
    name: 'Eric Harp',
    position: 'Investor at Cent Holdings, LLC',
    img: 'assets/person-icon.png',
    review:
      "Luke was an invaluable part of our startup team. He wasn’t just a technical resource – he took the time to understand the bigger picture and consistently found ways to align technology with our business goals. I was particularly impressed by his problem-solving abilities and his commitment to delivering quality, even when faced with tight deadlines. Luke’s impact on the team went beyond just executing tasks; he actively contributed to shaping the direction of our tech and product strategy. His potential is clear, and I’m excited to see where his career takes him.",
  },
  {
    id: 4,
    name: 'Blake Nolan',
    position: 'Senior Software Developer at Altec Industries, Inc',
    img: 'assets/blake-nolen.jpeg',
    review:
      'Working with Luke has been a great experience. He consistently tackles complex problems and delivers results. His technical skills and ability to collaborate effectively with the team make him a key contributor. Luke’s work ethic and reliability have made him a trusted teammate, and it’s been a pleasure to see his professional growth.',
  },
];

export const myProjects = [
  {
    title: 'Cashboard App - Geolocation Digital Rewards System',
    desc: 'Cashboard App is a new and innovative way to connect vendors to consumers via digital rewards. It allows brands to configure and gamify the delivery of digital offers trough geo lotteries as well as event based scenarios.',
    subdesc:
      'Built as a consumer phone app with SwiftUI and Firebase is designed for user reach. Vendor platform built with Angular, Typescript, Firebase and GCP for max performance and scalability. This application is approaching launch.',
    href: 'https://www.cashboardapp.co',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png', //TODO:
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/typescript.png', //TODO:
      },
    ],
  },
  {
    title: 'Dirty Santa Gift - Christmas Ecommerce platform',
    desc: 'dirtysantagift.com is a seasonal ecommerce platform centered around providing awesome dirty/secret santa gifts.',
    subdesc:
      'Built as a web application with React, Tailwind CSS, TypeScript, and Firebase Functions. Currently in active development.',
    href: 'https://www.dirtysantagift.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Dev Converters - All in one file and type converter',
    desc: 'devconverters.com is your go-to tool for quick data formatting and conversions. Whether you\'re working with timestamps, numbers, or other developer assets, this tool simplifies the process in just one field and one click.',
    subdesc:
      'Built as a web application with React, Tailwind CSS, and TypeScript. This application is approaching maturity.',
    href: 'https://www.devconverters.com',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Dev Deviants - Personal Brand',
    desc: 'devdeviants.com is my personal brand where I host my tech blog and the portfolio you are currently viewing.',
    subdesc:
      'Built as a web application with React, Vite, Tailwind CSS, TypeScript, and Jekyll. This application is ongoing and actively being updated as I grow my experience through my work and interactions.',
    href: 'https://www.devdeviants.com',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Vite',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 5,
        name: 'Jekyll',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Altec Industries, Inc',
    pos: 'Senior Software Developer',
    duration: '2022 - Present',
    icon: '/assets/altec-logo.png',
    title: "Supporting a telematics product that processes over 1 billion signals a day from trucks. I’ve used AWS, Flink, IoT, and containerized apps to analyze and generate custom rules for these signals. Built microservice infrastructure with Angular, Java, and Spring Boot to help Altec employees access and work with data, driving product subscriptions and services. Optimized the ETL layer using advanced SQL techniques and developed a tool for local microservice development using Docker and Python.",
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Cent Holdings, LLC',
    pos: 'Full Stack Software Engineer',
    duration: '2020 - 2022',
    title: "Spearheaded the end-to-end development of a high-performance financial analytics platform—integrating private cloud Kubernetes clusters, Bloomberg Terminal, Wolfram notebooks, and VMWare virtualization—to process sub-second market data for 500+ securities while delivering custom user management and story-driven product requirements",
    icon: '/assets/business.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Intuitive Research & Technology',
    pos: 'Software Development Engineer',
    duration: '2019 - 2020',
    title: "Developed and maintained the Aviation Mission Planning System (AMPS) using C#, .NET, and Node.js to deliver secure, combat-ready pre-flight planning and in-flight analysis tools for US Army Blackhawk and Chinook helicopter pilots.",
    icon: '/assets/intuitive-logo.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'NASA',
    pos: 'Software Developer Intern',
    duration: '2018 - 2018',
    title: "Developed Advanced Concepts Office plugins that automated cross-disciplinary data aggregation—partnering with propulsion, aerospace, materials, and rocket engineers—to streamline project workflows and save management 10 hours per sprint.",
    icon: '/assets/nasa-logo.png',
    animation: 'clapping',
  },
];
