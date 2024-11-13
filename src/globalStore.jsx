import {
  Apartment,
  House,
  MaterialSymbolsConstruction,
  MaterialSymbolsHome,
  MdiContact,
} from "./Components/Nav/NavIcons";

export const companyName = "Fake Electric";

export const navOptions = [
  {
    title: "Home",
    icon: <MaterialSymbolsHome />,
    path: "/",
  },
  {
    title: "Projects",
    icon: <MaterialSymbolsConstruction />,
    path: "/#projects",
  },
  {
    title: "Contact",
    icon: <MdiContact />,
    path: "/contact",
  },
  {
    title: "Residential",
    icon: <House />,
    path: "/subPage/residential",
  },
  {
    title: "Commercial",
    icon: <Apartment />,
    path: "/subPage/commercial",
  },
];

export const aboutData = {
  briefAbout: {
    title: "Welcome To Fake Electric",
    body: "Fake Electric is a small electrical construction company specializing in residential and commercial projects. We provide high-quality services, including wiring, lighting installations, and electrical system upgrades. Our skilled team ensures safety and efficiency in every job, delivering reliable solutions tailored to meet our clients' unique needs and budgets.",
  },
  detailedAbout: [
    {
      title: "WE ARE PASSIONATE",
      body: "We have a proven record of accomplishment and we are a reputable company in Canada. We ensure that all projects are done with the utmost professionalism using the best quality materials, offering clients support and accessibility.",
    },
    {
      title: "HONEST AND DEPENDABLE",
      body: "For us, honesty is the policy and we strive to complete all projects with the utmost integrity, not just with our clients, but also our suppliers and contractors. We have thousands of successful projects under our belt",
    },
    {
      title: "WE ARE ALWAYS IMPROVING",
      body: "We have a proven record of accomplishment and are a reputable company in Canada. We ensure that all projects are done with utmost professionalism using quality materials while offering clients support and accessibility.",
    },
  ],
};

export const whyWorkWithUsData = {
  title: "WHY CHOOSE US",
  body: "We provide an extensive array of construction services covering all stages of almost any building project's lifecycle. We are confident that we can tailor a solution to match your requirements and surpass your anticipations.",
  buttonText: "START YOUR PROJECT TODAY!",
};

export const projectsDescription = {
  title: "OUR LATEST WORKS",
  body: "Our construction firm boasts extensive expertise in undertaking projects across various commercial, and residential sectors.",
};

export const projectsShowcase = [
  {
    mainImg: "/imgs/Lighting-Display.jpg",
    imageTitle: "Edison Heights Apartments",
    imageBody: "Body 0",
    headerTitle: "Edison Heights Apartments",
    headerBody: "HeaderBody 0",
    secondaryImg: "/imgs/Scaffolding-1200.webp",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Completed all electrical installations for a 50-unit complex, including energy-efficient lighting, secure underground parking systems, and advanced fire safety protocols. The project emphasized reliability and tenant safety while meeting tight construction deadlines.",
  },
  {
    mainImg: "/imgs/Vancouver-Sunset.jpg",
    imageTitle: "Maple Valley Commercial Plaza",
    imageBody: "Body 1",
    headerTitle: "Maple Valley Commercial Plaza",
    headerBody: "HeaderBody 1",
    secondaryImg: "/imgs/Vancouver-Sunset.jpg",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Designed and installed electrical systems for a multi-tenant plaza, including retail and office spaces. The work featured custom solutions for each tenant, ensuring energy efficiency and seamless integration with existing infrastructure.",
  },
  {
    mainImg: "/imgs/Office-Interior.webp",
    imageTitle: "GreenTech Manufacturing Facility",
    imageBody: "Body 2",
    headerTitle: "GreenTech Manufacturing Facility",
    headerBody: "HeaderBody 2",
    secondaryImg: "/imgs/Vancouver-Sunset.jpg",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Provided industrial-grade wiring and installed high-voltage equipment for a cutting-edge manufacturing plant. This project focused on optimizing power distribution and ensuring compliance with stringent safety regulations.",
  },
  {
    mainImg: "/imgs/Vancouver-Sunset.jpg",
    imageTitle: "Oakwood Luxury Hotel",
    imageBody: "Body 3",
    headerTitle: "Oakwood Luxury Hotel",
    headerBody: "HeaderBody 3",
    secondaryImg: "/imgs/Vancouver-Sunset.jpg",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Delivered state-of-the-art electrical systems for a 75-room luxury hotel. The scope included smart room controls, decorative LED lighting, and energy-efficient solutions for public spaces, creating a premium guest experience.",
  },
  {
    mainImg: "/imgs/Lighting-Display.jpg",
    imageTitle: "Riverbend Community Center",
    imageBody: "Body 4",
    headerTitle: "Riverbend Community Center",
    headerBody: "HeaderBody 4",
    secondaryImg: "/imgs/Vancouver-Sunset.jpg",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Renovated and modernized a community center's aging electrical infrastructure. Work included rewiring event spaces, installing new panel boards, and upgrading lighting systems to better support local activities and events.",
  },
  {
    mainImg: "/imgs/Office-Interior.webp",
    imageTitle: "Solar Integration for Sunview Estates",
    imageBody: "Body 5",
    headerTitle: "Solar Integration for Sunview Estates",
    headerBody: "HeaderBody 5",
    secondaryImg: "/imgs/Vancouver-Sunset.jpg",
    tertiaryImg: "/imgs/Office-Interior.webp",
    projectDetails:
      "Installed solar panel arrays and battery backup systems for a new residential development. The project reduced the community’s carbon footprint and provided homeowners with sustainable, cost-effective energy solutions.",
  },
];

export const footerData = {
  title: "GET IN TOUCH",
  body: "Free estimates for your electrical projects, anywhere in the Victoria area",
};

export const contactInfo = {
  phone: "250-555-5555",
  hours: {
    weekday: "9:00am - 5:00pm",
    sat: "10:00am - 4:00pm",
    sun: "By appointment only",
  },
  email: "bennetthumphrey98@gmail.com",
  address: "",
};
