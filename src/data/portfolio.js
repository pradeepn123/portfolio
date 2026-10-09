const asset = (path) => `${process.env.PUBLIC_URL}/${path}`;

export const profile = {
  name: "Pradeepkumar Neginhal",
  shortName: "Pradeep Neginhal",
  role: "Senior Front-End & Shopify Developer",
  experience: "8.5+",
  location: "J.P. Nagar, Bengaluru, India",
  email: "pradeepkumar.neginhal@gmail.com",
  phone: "+91-7411501872",
  phoneHref: "tel:+917411501872",
  github: "https://github.com/pradeepn123",
  resume: asset("Pradeepkumar-Neginhal-Resume.pdf"),
  photo: asset("pradeep.png"),
  logo: asset("logo.svg"),
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "8.5+", label: "Years of front-end experience" },
  { value: "10+", label: "Shopify stores designed & shipped" },
  { value: "50K+", label: "Monthly users on apps I built" },
  { value: "35%", label: "Faster page loads delivered" },
];

export const about = {
  paragraphs: [
    "I'm a results-driven Front-End & Shopify Developer with 8.5+ years of experience building responsive, high-performance web applications and conversion-focused eCommerce storefronts.",
    "My core stack is ReactJS, Next.js, modern JavaScript (ES6+), HTML5, CSS3/SCSS and Shopify — Liquid themes, headless builds and the Storefront API. I specialise in translating complex Figma and Adobe XD designs into pixel-perfect, accessible interfaces.",
    "Beyond code, I've led small teams, run code reviews, mentored juniors and owned delivery end-to-end — including founding and running my own web & Shopify development agency.",
  ],
  highlights: [
    {
      icon: "award",
      title: "Best Manager Award — 2023",
      text: "Recognised at ShopTrade® for delivering 100% of assigned projects on time.",
    },
    {
      icon: "users",
      title: "Team lead",
      text: "Led a front-end team of 3 — code reviews, mentoring and client communication.",
    },
    {
      icon: "rocket",
      title: "Founder — Selliro",
      text: "Ran a web & Shopify agency for ~1 year, owning acquisition, scoping and delivery. Now freelancing.",
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      school: "Visvesvaraya Technological University",
      period: "2010 – 2013",
      score: "67%",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Karnataka University, Dharwad",
      period: "2007 – 2010",
      score: "56%",
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Kannada", level: "Fluent" },
    { name: "Hindi", level: "Basic" },
  ],
};

export const services = [
  {
    icon: "shopify",
    title: "Shopify Theme Development",
    text: "Custom Liquid templates, sections and theme customisation built to lift engagement and conversion.",
  },
  {
    icon: "layers",
    title: "Headless Commerce",
    text: "React and Next.js storefronts powered by the Shopify Storefront API and external systems.",
  },
  {
    icon: "pen",
    title: "Figma-to-Code",
    text: "Pixel-perfect, accessible and fully responsive builds from Figma and Adobe XD designs.",
  },
  {
    icon: "plug",
    title: "Apps, Webhooks & APIs",
    text: "Shopify apps, webhooks and REST integrations that automate order and inventory workflows.",
  },
  {
    icon: "gauge",
    title: "Performance Optimisation",
    text: "Faster page loads, leaner bundles and cross-browser polish aligned with W3C standards.",
  },
  {
    icon: "code",
    title: "Front-End Leadership",
    text: "Reusable component systems, code reviews, mentoring and direct client communication.",
  },
];

export const experience = [
  {
    company: "ShopTrade®",
    role: "Senior Front-End Engineer",
    period: "Dec 2019 – Jul 2024",
    stack: ["Shopify", "Liquid", "ReactJS", "Storefront API", "Figma"],
    points: [
      "Developed and maintained 10+ Shopify eCommerce stores, converting Figma designs into fully responsive websites with HTML5, CSS3, JavaScript and ReactJS — shortening design-to-deployment time.",
      "Customised Shopify themes and Liquid templates for 8+ clients, achieving an average 25% improvement in user engagement and session duration post-launch.",
      "Implemented and configured 4+ Shopify apps and webhooks to automate order and inventory workflows.",
      "Integrated the Shopify Storefront API and 3+ external systems to support headless commerce, improving page load speed.",
      "Led a front-end team of 3 developers — conducted code reviews, mentored juniors and handled client communication.",
      "Received the Best Manager award (2023) for delivering 100% of assigned projects on time while maintaining high client satisfaction.",
      "Delivered 6 high-complexity Figma-to-Shopify transitions within tight deadlines, directly contributing to increased repeat business.",
    ],
  },
  {
    company: "Provab Technosoft",
    role: "Front-End Engineer",
    period: "Apr 2016 – Dec 2019",
    stack: ["HTML5", "CSS3", "JavaScript", "REST APIs"],
    points: [
      "Built and maintained 4+ responsive travel-portal web applications, including corporate dashboards and mobile web views (Android & iOS), serving 50,000+ monthly active users.",
      "Integrated third-party APIs for flights, hotels and payments, enabling real-time data for 100+ destination routes.",
      "Drove UI/UX enhancements and performance initiatives that reduced average page load times by 35% across key pages.",
      "Developed 20+ reusable, scalable front-end components aligned with W3C standards, cutting new-feature development time by ~25%.",
    ],
  },
  {
    company: "Indglobal Consulting Solutions",
    role: "UI Developer",
    period: "Mar 2015 – Apr 2016",
    stack: ["HTML5", "CSS3", "JavaScript"],
    points: [
      "Consulted with 5+ clients to gather project and business requirements, selected the right front-end technologies and defined a scalable project architecture.",
      "Designed and developed 3+ web applications tested across all major devices and browsers; coordinated a 2-person team, managed deployments and maintained 99% uptime post-launch.",
    ],
  },
];

export const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "SCSS", "JavaScript (ES6+)", "jQuery", "Bootstrap", "Responsive Design"],
  },
  { title: "Frameworks", items: ["ReactJS", "Next.js"] },
  {
    title: "Shopify",
    items: ["Liquid", "Headless", "Storefront API", "Theme Customisation", "Apps & Webhooks"],
  },
  { title: "Design Tools", items: ["Figma", "Adobe XD", "Figma-to-code (pixel-perfect)"] },
  { title: "Version Control", items: ["Git", "GitHub"] },
  {
    title: "Other",
    items: ["REST APIs", "Performance Optimisation", "Cross-browser Compatibility", "W3C Standards"],
  },
];

export const projectFilters = ["All", "Shopify", "React", "WordPress", "Apps"];

// Newest first. Selliro projects are from https://www.selliro.co.in/ ("Our Works").
export const projects = [
  {
    title: "Recommendo",
    categories: ["Shopify", "Apps"],
    summary: "Shopify app that shows product recommendations at checkout and post-purchase with automatic upsells.",
    tags: ["Shopify App", "Post Purchase"],
    image: asset("images/works/recommendo.jpg"),
    link: "https://apps.shopify.com/upsell-new",
    year: "2026",
  },
  {
    title: "Kally Kurls",
    categories: ["Shopify"],
    summary: "Shopify store design and build for a natural, Swiss-made curly-hair care brand.",
    tags: ["Design", "Shopify"],
    image: asset("images/works/kally-kurls.jpg"),
    link: "https://www.kallykurls.com",
    year: "2025",
  },
  {
    title: "Charbon",
    categories: ["Shopify"],
    summary: "Shopify store development for a men's hair care and grooming brand.",
    tags: ["Shopify", "Development"],
    image: asset("images/works/charbon.jpg"),
    year: "2025",
  },
  {
    title: "Propulso Digital",
    categories: ["React"],
    summary: "React website for a Swiss digital and eCommerce agency.",
    tags: ["ReactJS"],
    image: asset("images/works/propulso-digital.jpg"),
    link: "https://www.propulsodigital.com",
    year: "2025",
  },
  {
    title: "Bienvenue Lisbonne",
    categories: ["Shopify"],
    summary: "Shopify store for handmade Portuguese home décor and gifts.",
    tags: ["Shopify"],
    image: asset("images/works/bienvenue-lisbonne.jpg"),
    year: "2025",
  },
  {
    title: "SP Bally Garage",
    categories: ["WordPress"],
    summary: "Website for a local car repair and servicing garage.",
    tags: ["WordPress"],
    image: asset("images/works/sp-bally-garage.jpg"),
    year: "2025",
  },
  {
    title: "Gofrontalier",
    categories: ["WordPress"],
    summary: "Website for a consulting service helping people start working in Switzerland.",
    tags: ["WordPress"],
    image: asset("images/works/gofrontalier.jpg"),
    year: "2025",
  },
  {
    title: "Club Sullivan",
    categories: ["Shopify", "React"],
    summary: "ReactJS-based Shopify headless storefront.",
    tags: ["ReactJS", "Headless", "Storefront API"],
    image: asset("images/club-sulivan.jpg"),
    link: "https://www.clubsullivan.tv/",
  },
  {
    title: "SwingFans",
    categories: ["Shopify"],
    summary: "Custom Shopify theme with advanced product filtering.",
    tags: ["Shopify Plus", "Liquid", "JavaScript"],
    image: asset("images/swing-fans.jpg"),
    link: "https://swingfans.com/",
  },
  {
    title: "Heal & Co",
    categories: ["Shopify"],
    summary: "Healthcare eCommerce store built from Figma designs.",
    tags: ["Shopify", "Liquid", "Figma"],
    image: asset("images/heal-co.jpg"),
    link: "https://healco.com/",
  },
  {
    title: "Chill US",
    categories: ["Shopify"],
    summary: "Custom Shopify theme with third-party API integrations.",
    tags: ["Shopify", "Liquid", "API Integrations"],
    image: asset("images/chill.jpg"),
    link: "https://chill.com/",
  },
];
