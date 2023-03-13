import {
    mobile,
    backend,
    web,
    javascript,
    html,
    git,
    docker,
    carrent,
    jobit,
    tripguide,
    acn,
    aws,
    java,
    oracle,
    pgadmin,
    bitbucket,

    play,
    music,
    blog,
    chat,
    firebase,
    wordpress,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Application Developer",
      icon: web,
    },
    {
      title: "Cloud Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "PGAdmin",
      icon: pgadmin,
    },
  ];
  
  const experiences = [
    {
      title: "Application Development Senior Analyst",
      company_name: "Accenture",
      icon: acn,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Application development end to end, from infrastructure to source code build and deployment.",
        "Database management with new schema and table creation, columns addition and modification, data management.",
        "Devised ways to increase the efficiency of production support - added proper logging and error handling mechanisms to find issues and handle them without any impact.",
        "Ran code quality checks, improved design logic, reduced database dependencies, and improved the operating efficiency of applications used in production.",
        "Analyze requirements and provide solution proposals with estimates.",
        "Organize a team to work on different assignments with zero slippages.",
      ],
    },
    {
      title: "Application Development Analyst",
      company_name: "Accenture",
      icon: acn,
      iconBg: "#E6DEDD",
      date: "June 2021 - May 2022",
      points: [
        "Undertook responsibilities for code execution design, database schema design, infrastructure provisioning, and integration testing to help the team achieve their goals.",
        "2 years of experience in analysis, design-build, and testing web applications, servers, and databases.",
        "Responsible for maintaining coding standards and best practices and adhering to the business process.",
        "Code quality check and bug fixing.",
      ],
    },
    {
      title: "Application Development Associate",
      company_name: "Accenture",
      icon: acn,
      iconBg: "#383E56",
      date: "August 2019 - June 2021",
      points: [
        "Analyze requirements, provide, and build solutions.",
        "Log monitoring and application performance checks.",
        "Develop user interface with enhanced functionalities in applications to improve user experience.",
      ],
    },
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "Phoenix Play",
      description:
        "A simple application with movies built on react and graphql.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
      image: play,
      source_code_link: "https://bitbucket.org/BhavyanthK/disney-clone/",
    },
    {
      name: "Phoenix Blog",
      description:
        "Blogging application, built on react and Next JS, which holds posts on drones and their capabilities.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "drones",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://bitbucket.org/BhavyanthK/phoenix-graphcms/",
    },
    {
      name: "Phoenix Chat",
      description:
        "Chat application built with chat engine, firebase and react.",
      tags: [
        {
          name: "chatengine",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: chat,
      source_code_link: "https://bitbucket.org/BhavyanthK/chat-application/",
    },
    {
      name: "Firebase Blog",
      description:
        "Blog application built on firebase, angular frameworks, focussing on drones.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "drones",
          color: "pink-text-gradient",
        },
      ],
      image: firebase,
      source_code_link: "https://bitbucket.org/BhavyanthK/chat-application/",
    },
    {
      name: "Phoenix Music",
      description:
        "Music application, which plays music from open api, fetches and displays content from api. ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "music",
          color: "pink-text-gradient",
        },
      ],
      image: music,
      source_code_link: "https://bitbucket.org/bhavyanth02/spotify/",
    },
    {
      name: "Phoenix Blog - Java",
      description:
        "Blogging application built using Java (Spring framework) and angular. Services deployed on AWS. ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: wordpress,
      source_code_link: "https://bitbucket.org/BhavyanthK/workspace/projects/SPRIN",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };