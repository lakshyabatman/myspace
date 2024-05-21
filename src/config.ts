import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://lakshyakhera.dev", // replace this with your deployed domain
  author: "Lakshya Khera",
  desc: "Tech bro | Coffee bro",
  title: "Lakshya Khera",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/lakshyabatman",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/brewed.sneakers/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lakshyakhera/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/thh_arm69",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  }
];
