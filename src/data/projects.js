// Featured work. Categories drive the filter chips on the Projects section.
const projects = [
  {
    img: "images/rbac-ui.png",
    title: "RBAC Access Control",
    text:
      "A role-based access control platform with admin approval flows, user/role management, and OTP-verified sign-up. React + Material UI front end on a Node/Express + MongoDB backend.",
    category: "Full-Stack",
    tags: ["React", "Material UI", "Node", "MongoDB"],
    git: "https://github.com/gagandeepakhil/RBAC_frontend",
    demo: "https://ui-rbac.netlify.app/",
    featured: true,
  },
  {
    img: "images/itelugu.png",
    title: "iTelugu Conference",
    text:
      "Production web app for the International Telugu Conference, built with Express and MongoDB to manage registrations and content across multiple categories. Live and serving real users.",
    category: "Full-Stack",
    tags: ["Express", "MongoDB", "Node"],
    git: "https://github.com/gagandeepakhil/itelugu",
    demo: "https://www.itelugu.in/",
    featured: true,
  },
  {
    img: "images/a-hub.png",
    title: "A-HUB Incubation Center",
    text:
      "Marketing site for Andhra University's incubation center (A-HUB). Built in a team using a responsive front-end stack and shipped to production.",
    category: "Frontend",
    tags: ["Bootstrap", "HTML/CSS", "JavaScript"],
    git: "https://github.com/horusknox/A-hub",
    demo: "https://www.a-hub.in",
    featured: false,
  },
  {
    img: "images/avenue.png",
    title: "Avenue Salon",
    text:
      "A visually rich salon website with advanced CSS and JavaScript-driven transitions and scroll animations. Focused on motion detail and polish.",
    category: "Frontend",
    tags: ["CSS Animation", "JavaScript", "UI"],
    git: "https://github.com/nallamdeepak/avenue",
    demo: "https://nallamdeepak.github.io/avenue",
    featured: false,
  },
  {
    img: "images/data-anlysis(aqi).png",
    title: "Air Quality Analysis",
    text:
      "A data-analysis project on the Air Quality Index of Visakhapatnam (Jun 2022–May 2023) using Python — cleaning, exploring, and visualizing a year of real environmental data.",
    category: "Data",
    tags: ["Python", "Pandas", "Data Viz"],
    git: "https://github.com/gagandeepakhil/data-analysis-AQI-",
    demo: "https://gagandeepakhil.github.io/data-analysis-AQI-/",
    featured: false,
  },
  {
    img: "images/portfolio.png",
    title: "This Portfolio",
    text:
      "A modern, single-page React portfolio with a custom design system, light/dark themes, scroll-reveal motion, and a focus on clear content and fast load.",
    category: "Frontend",
    tags: ["React", "Design System", "Accessibility"],
    git: "https://github.com/gagandeepakhil/portfolio-gagandeep",
    demo: "https://www.gagandeepdunna.netlify.app/",
    featured: false,
  },
];

export default projects;
