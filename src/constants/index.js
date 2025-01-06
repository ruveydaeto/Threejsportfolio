import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Privia Security",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2020 - September 2021",
      points: [
        "Developed SEO-frendly websites using JavaScript and various frameworks, ensuring optimal search engine performance and enhanced user visibilty. Coordinated testing and validaton, ensuring compilance with endustry standards.",
        "Worked closely with designers using Figma and backend developers to implement rapid development and deployment processes using Git, accelerating project timelnes and enhancing team productivity.",
        "Ganed hands-on experience with Python, enhancing backend functonality and data processing capabilites within web applications.",
       
      ],
    },
    {
      title: "FRONT-END DEVELOPER",
      company_name: "Privia Security",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Spearheaded the development of the Privahub Cyber Range Platform, significantly enhancing the user experience through the implementation of dynamic, responsive interfaces that engage users effectively.",
        "Utilized a combination of React, TypeScript, Next.js, Tailwind CSS, and Material-UI to build robust, scalable web applications that meet high standards of performance and reliability.",
        "Collaborated with UX/UI designers to optimize user interface, reducing page load time by 30% and improving overall user experience.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Coctail Site",
      description:
        "Daily Tender is a visually stunning and user-friendly web platform designed for cocktail enthusiasts. This website offers a curated library of cocktail recipes, ingredient insights, and personalized recommendations to elevate your drink-making experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/ruveydaeto/Dailytender",
    },
    {
      name: "Social Media",
      description:
        "A feature-rich and dynamic social media platform designed to connect people worldwide. Built with modern web technologies, Connectify provides users with an intuitive and interactive experience, focusing on seamless communication and personalized content sharing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Personal Portfolio",
      description:
        "An innovative and visually engaging personal portfolio website built to showcase skills, projects, and creativity. This platform combines modern web technologies to deliver an immersive user experience, featuring dynamic 3D animations, responsive design, and a seamless navigation flow.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ruveydaeto/Threejsportfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };