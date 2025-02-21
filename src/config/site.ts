export const siteConfig = {
  name: "Assure",
  description: "Empowering Businesses with Ethical, Safe, and Sustainable Practices",
  url: "https://assure.com",
  ogImage: "https://assure.com/og.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
  },
  nav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
