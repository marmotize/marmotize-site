import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Marmotize",
  EMAIL: "hello@marmotize.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Marmotize - A minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/marmotize_",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/marmotize"
  }
];
