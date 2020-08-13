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
      "The project was completed during my internship in The Shortcut community. The application was conceived as an improved alternative to the company's old Wordpress based website. A 'clean and lean' design approach was adopted. The focus was on dynamic fetching of events and trainings info, brand-relevant visuals, contact and reference info, user-type targeted navigation. The new web-site performs representative, communicative, 'story-telling', linking functions",
    summary:
      "React v16.8, SASS/SCSS, Axios, Wordpress as headless CMS, Eventbrite API, Firebase, 'clean design' approach",
    github: "https://github.com/OlSavMe/React-Shortcut-Website",
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
    title: "Current Portfolio",
    picture: "img/cur.jpg",
    bigpic: "img/big-cur.jpg",
    smallpic: "img/small-cur.jpg",
    features: [
      "navbar vanishing on scroll down and reappearing on scroll up",
      "scroll restoration on navigation",
      "animated underline on navlink hover",
      "mobile burger menu",
      "animated modal windows",
      "horizontal image slider with controls",
      "accordion with expanded panels and animated open-close sign",
      "vertical text carousel with on-hover control",
      "animated gif logo",
      "animated scroll-down indicator",
      "rotated 'polaroid' image",
      "hash group with anchor linking",
      "filtering button group",
      "slide-in animation of the hero section",
    ],

    tools: [
      "React v16.8",
      "Context API",
      "SASS/SCSS (mixing, breakpoints, dynamic keys, variables, nesting)",
      "cubic-bezier function generator",
      "Axios",
      "GitHub API",
      "JavaScript data objects",
      "Firebase",
    ],

    description:
      "My new portfolio website was created in React with minimum use of other libraries. App state is managed with Context API and Hooks, my GitHub repositories' data is fetched and filtered through GitHub API with Axios, code reuse is implemented either with composition or inheritance. App responsiveness is achieved with use of grid and flex containers, as well as SASS breakpoints with dynamic keys for easier styling. The website is designed in three-colour palette with orange as an accent. The three colours - orange, white and light-grey, - are united in the customised animated logo.",
    summary:
      "React.js, Context API, React Hooks, SASS/SCSS (mixins, breakpoints, dynamic keys, variables, nesting), Axios, GitHub API, Firebase",
    github: "https://github.com/OlSavMe/Portfolio",
    url: "https://savkaportfolio.firebaseapp.com/",
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
    github: "https://github.com/OlSavMe/Earlier-CV-Website",
    url: "https://o-savka.firebaseapp.com",
    libraries: ["React Material-UI", "react-router", "react-select"],
  },
  {
    id: 4,
    title: "Order Manager",
    picture: "img/manag.png",
    bigpic: "img/big-manag.jpg",
    smallpic: "img/small-manag.jpg",
    features: [
      "CRUD operations (add, edit, delete)",
      "RESTful web service",
      "user authentication",
      "unit tests",
    ],
    tools: [
      "Java-based Spring Boot framework",
      "Spring Security",
      "Maven software project management tool",
      "Bootstrap",
      "Thymeleaf",
      "Eclipse IDE",
      "Postman",
      "object-oriented programming paradigm",
      "object-relational mapping",
    ],

    description:
      "Order Manager app is storing orders' info, lets user add/edit orders, admin user can also delete orders. The interface shows current date and total number of orders. Upon login users are identified by type. The app was created as an individual assignment within the Server Programming course.",
    summary:
      "Java, Spring Boot framework, Maven software project management tool, Thymeleaf template engine, SQL, Bootstrap",
    github: "https://github.com/OlSavMe/Order-Manager",
    url: null,
    libraries: null,
  },
  {
    id: 5,
    title: "Nodemailer Contact Form",
    picture: "img/manag.png",
    bigpic: "img/big-form.jpg",
    smallpic: "img/small-form.jpg",
    features: [
      "contact form sending user's message through my gmail account to my other email account",
      "frontend sends post request to the server",
      "URI is registered at Google APIs console",
      "endpoint's authorisation with access and refresh tokens",
    ],
    tools: [
      "Node.js / Nodemailer",
      "Express",
      "Axios",
      "React",
      "Postman",
      "OAuth2 authentication",
      "Google APIs",
      "Google Developers OAuth 2.0 Playground",
      "dotenv",
    ],

    description:
      "React.js contact form with backend implemented in Node.js, its Nodemailer module and Express",
    summary: "Nodemailer, Node.js, Express, React, OAuth 2.0, Google APIs",
    github: "https://github.com/OlSavMe/Contact-Form",
    url: "https://mail-contact-form.firebaseapp.com/",
    libraries: null,
  },
  {
    id: 6,
    title: "Azure DevOps Project",
    picture: null,
    bigpic: "img/big-az.jpg",
    smallpic: "img/small-az.jpg",
    features: [
      "creating DevOps project",
      "modifying YAML script",
      "integrating CI/CD pipeline with GitHub repo",
      "managing DevOps project from VSCode",
    ],
    tools: ["Azure Cloud", "Azure pipelines", "Visual Studio", "GitHub"],

    description:
      "Studying tools for Continuous Integration and Continuous Delivery provided by Azure Cloud for web development. Individual assignment for the Cloud Services course",
    summary:
      "Azure Cloud, CI/CD pipelines, DevOps projects, YAML, Visual Studio",
    github:
      "https://www.youtube.com/watch?v=9xay2h1djfo&list=PLf8VCwwYAvPWxZJ8q_HCDtfuYc42G9iKM",
    url:
      "https://drive.google.com/file/d/1YvD3OZGGRHA8U4uNKF7-hKOVgk5g2HBH/view",
    libraries: null,
  },
  {
    id: 7,
    title: "DoGood app UX design",
    picture: null,
    bigpic: "img/big-dogood.jpg",
    smallpic: "img/big-dogood.jpg",
    features: ["Interactive prototype of a mobile application"],
    tools: ["Figma"],

    description:
      "The prototype was developed by a team of two UX designers during The Digital Prototyping Week. Volunteer-company matching mobile app is intended to help volunteers and job providing organisations find one another by means of online netwoking, job type classification and volunteer profiles database.",
    summary: "Figma prototyping, user's persona",
    github: null,
    url:
      "https://www.figma.com/proto/P9IeRig2R8qgdylrxklhUC/Prototyping-UI-Kit-(Copy)?node-id=311%3A263&scaling=scale-down",
    libraries: null,
  },
  {
    id: 8,
    title: "Migraine Map app UX design",
    picture: null,
    bigpic: "img/big-migr.jpg",
    smallpic: "img/big-migr.jpg",
    features: ["Interactive prototype of a mobile application"],
    tools: ["Figma"],

    description:
      "The Migraine Map app was created in a multidisciplinary team during the RIGA MUDDIE WEEK. The mobile application's prospective users are teenagers suffering from migraine. The application helps patients to monitor their daily life in order to detect conditions causing migraine pains. The application is designed to record daily events in most undisturbed way, without major interruptions of normal life flow",
    summary: "Figma prototyping, user's persona",
    github: null,
    url:
      "https://www.figma.com/proto/MXr37r7aAN7txw7QVJFY03/READY-migraine-map-vol2-(Copy)?node-id=29%3A6&scaling=scale-down",
    libraries: null,
  },
];

export default projectData;
