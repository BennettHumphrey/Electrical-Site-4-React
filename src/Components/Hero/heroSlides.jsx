import {
  FluentEmojiHighContrastLightBulb,
  PhSunBold,
  TablerWifi,
} from "./HeroIcons";

export const heroSlides = [
  {
    img: "./imgs/Vancouver-Sunset-Laptop.webp",
    tabletImg: "./imgs/Vancouver-Sunset-Tablet.webp",
    svg: <PhSunBold />,
    // href: '../Electrical-Site-2-React/residential',
    title: "Residential Services",
    text: "Service upgrades, renovations, new construction, and more!",
  },
  {
    img: "./imgs/Office-Interior-Laptop.webp",
    tabletImg: "./imgs/Office-Interior-Tablet.webp",
    svg: <TablerWifi />,
    // href: '../Electrical-Site-2-React/commercial',
    title: "Commercial Services",
    text: "Data wiring, alarm systems, new construction, and much more!",
  },
  {
    img: "./imgs/Lighting-Display-Laptop.webp",
    tabletImg: "./imgs/Lighting-Display-Tablet.webp",
    svg: <FluentEmojiHighContrastLightBulb />,
    // href: '../Electrical-Site-2-React/industrial',
    title: "Lighting Design",
    text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
  },
];
