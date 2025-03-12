import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  bosch,
  weboldalnet,
  burschcoin,
  smallprojects,
  threejs,
  user,
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
    title: "Web Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Process Engineer Intern",
    company_name: "Robert Bosch Power Tools Kft.",
    icon: bosch,
    iconBg: "#383E56",
    date: "Sept 2023 - Feb 2025",
    points: [
      "Process Analysis and Optimization Analyzing production processes and developing optimization proposals to improve efficiency and reduce material and time consumption.",
      "Data Collection and Analysis Collecting and statistically analyzing production data to improve performance and preparing reports on potential improvements.",
      "Equipment and Machine Support Monitoring machine operations, optimizing settings, troubleshooting, and supporting maintenance processes.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Weboldalnet IT Kft.",
    icon: weboldalnet,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Learning and practicing HTML5", 
      "Learning and practicing CSS3",
      "Understanding React", 
      "Practicing React", 
      "Learning and practicing native JavaScript", 
      "Learning and practicing jQuery",
      "Practicing Bootstrap components", 
      "Completing an individual task",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His thesis focused on Web3 web application development, and he executed the assigned work exceptionally well, demonstrating great diligence and attention to detail throughout.",
    name: "-",
    designation: "Teacher",
    company: "University of Miskolc",
    image: user,
  },
  {
    testimonial:
      "He has consistently demonstrated exceptional performance in my classes. His dedication and hard work have truly stood out.",
    name: "-",
    designation: "Teacher",
    company: "University of Miskolc",
    image: user,
  },
];

const projects = [
  {
    name: "Busch Coin",
    description:
      "This website features a cryptocurrency wallet with authentication, access control, and secure transaction capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: burschcoin,
    source_code_link: "https://github.com/bartabalazs01/University_project",
  },
  {
    name: "Small practices",
    description:
      "These projects are small practice exercises in React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: smallprojects,
    source_code_link: "https://github.com/bartabalazs01/Small_react_projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
