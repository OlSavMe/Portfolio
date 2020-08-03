const projectData = [
  {
    id: 1,
    title: "The Shortcut website",
    picture: "img/short.jpg",
    bigpic: "img/big-short.jpg",
    smallpic: "img/small-short.jpg",
    features: [
      "navigation drawer",
      "nested burger menu",
      "map",
      "FAQ accordion",
      "loading skeleton",
      "input search",
      "pagination",
      "API interaction",
      "anchor linking",
      "date formatting",
      "hero image",
      "loading skeleton",
    ],

    tools: [
      "React v16.8",
      "SASS/SCSS",
      "Axios",
      "Wordpress as headless CMS",
      "Eventbrite API",
      "Firebase",
      "Figma",
      "Scrum",
      "Trello boards",
      "git",
    ],

    description:
      "The project was completed during my internship in The Shortcut community. The application was conceived as an improved alternative to the company's old Wordpress based website. A 'clean and lean' design approach was adopted. The focus was on dymanic fetching of events and trainings info, brand-relevant visuals, contact and reference info, user-type targeted navigation. The new web-site performs reprasentative, communicative, 'story-telling', linking functions",
    summary:
      "React v16.8, SASS/SCSS, Axios, Wordpress as headless CMS, Eventbrite API, Firebase, 'clean design' approach",
    github: "https://github.com/OlSavMe/Current-CV-Website",
    url: "https://beta.theshortcut.org/",
    libraries: [
      "react-bootstrap",
      "react-router",
      "react-map-gl",
      "react-skeleton-loading",
      "moment.js",
      "react-anchor-link-smooth-scroll",
    ],
  },
  {
    id: 2,
    title: "Current Portfoio",
    picture: "img/cur.jpg",
    bigpic: "img/big-cur.jpg",
    smallpic: "img/small-cur.jpg",
    features: [
      "navbar vanishing on scroll down and reappearing on scroll up",
      "scroll restoration on navigation",
      "animated underline on navlink hover",
      "mobile burger menu",
      "animated modal windows",
      "horisontal image slider with controls",
      "accordion with expanded panels and animated open-close sign",
      "vertical text carousel with on-hover contol",
      "animated gif logo",
      "animated scrolldown indicator",
      "rotated 'polaroid' image",
      "hash group with anchor linking",
      "filtering button group",
      "slide-in animation",
    ],

    tools: [
      "React v16.8",
      "API Context",
      "SASS/SCSS (mixing, breakpoints, dynamic keys, variables, nesting)",
      "cubic-bezier function generator",
      "Axios",
      "GitHub API",
      "JavaScript data objects",
      "Firebase",
    ],

    description:
      "My new portfolio website was created in React with minimum use of other libraries. The website is designed in three-color pallette with orange as an accent. The three colors - orange, white and light-grey, - are united in the customized animated logo. Github API is utilized for dynamic fetching my current repositories' data. SASS tools were used for easier responsiveness styling",
    summary:
      "React.js, API Context, React Hooks, SASS/SCSS (mixins, breakpoints, dynamic keys, variables, nesting), Axios, GitHub API, Firebase",
    github: "https://github.com/OlSavMe/Portfolio",
    url: "https://savkaportfolio.web.app/",
    libraries: ["react-router", "react-anchor-link-smooth-scroll"],
  },
  {
    id: 3,
    title: "Earlier CV-website",
    picture: "img/pr.jpg",
    bigpic: "img/big-pr.jpg",
    smallpic: "img/small-pr.jpg",
    features: [
      "full-cover background image",
      "mobile top navbar",
      "drop-down selection list",
      "controlled accrodion",
      "loading spinners",
    ],

    tools: [
      "React v16.8",
      "SASS/SCSS",
      "GitHub API",
      "React Material-UI",
      "svg shaping",
      "Firebase",
      "fontawesome",
    ],

    description:
      "While working on CV website I experimented with background images and videos (videos are not included into the final version), semi-transparent overlays, box shadowing and svg shapes. React Material-UI components and icons were utilized for top navbar (in Material-UI documentation - 'bottom navbar'), Material-UI controlled accordion with expanded panels was used for education section. react-select component was adopted for the drop-down menu with customized styling",
    summary:
      "React, Axios, GitHub API, React Material-UI, react-select, SASS/SCSS",
    github: "https://github.com/OlSavMe/Current-CV-Website",
    url: "https://o-savka.web.app",
    libraries: ["React Material-UI", "react-router", "react-select"],
  },
  {
    id: 4,
    title: "Order Manager",
    picture: "img/manag.png",
    bigpic: "img/big-manag.jpg",
    smallpic: "img/small-manag.jpg",
    features: ["CRUD repositories", "order database"],
    tools: [
      "java-based Spring Boot framework",
      "Maven software project management tool",
      "Bootstrap",
      "Eclipse IDE",
      "object-oriented programming paradigm",
      "object-relational mapping",
    ],

    description:
      "The Order Manager web application was created as a final individual assignment for Server programig course. The Maven project was generated with Spring Initializer. Creating entity classes with Spring Boot",
    summary:
      "Java, Spring Boot framework, Maven software project management tool, Bootstrap",
    github: "https://github.com/OlSavMe/Order-Manager",
    url: null,
    libraries: null,
  },
  // {
  //   id: 5,
  //   title: "Server Programming project",
  //   picture: "img/manag.png",
  //   description: "Java SpringBoot",
  //   summary: "Java SpringBoot",
  //   github: "https://github.com/OlSavMe/Current-CV-Website",
  //   url: "https://o-savka.firebaseapp.com/",
  // },
  // {
  //   id: 6,
  //   title: "Server Programming project",
  //   picture: "img/manag.png",
  //   description: "Java SpringBoot",
  //   summary: "Java SpringBoot",
  //   github: "https://github.com/OlSavMe/Current-CV-Website",
  //   url: "https://o-savka.firebaseapp.com/",
  // },
];

export default projectData;
