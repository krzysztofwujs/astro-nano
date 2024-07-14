import type { Site, Metadata, Socials } from "@types";

// TODO: How many projects on the homepage?
export const SITE: Site = {
  NAME: "wujs",
  EMAIL: "krzysztof@wujs.io",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
  TITLE: "Krzysztof Wujs",
  DESCRIPTION: "Krzysztof Wujs personal site",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "My research and thoughts",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My work history",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/krzysztof_wujs",
  },
  {
    NAME: "github",
    HREF: "https://github.com/krzysztofwujs",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/wujs",
  },
];
