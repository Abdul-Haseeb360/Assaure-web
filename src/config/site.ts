export const siteConfig = {
  name: "Assure",
  description: "Empowering Businesses with Ethical, Safe, and Sustainable Practices",
  url: "https://assure-int.com",
  ogImage: "https://assure.com/og.jpg",
  contact: {
    phone: "+92 42 35249499",
    email: "usmanjavaid@assure-int.com",
  },
  offices: {
    canada: {
      address: "4063 Buckstone Road, StoneRidge - V9N0B3, Courtenay, BC, Canada",
    },
    pakistan: {
      address: "12/A AA Commercial Sector D, Canal Road, Bahria Town, Lahore",
    },
  },
} as const

export type SiteConfig = typeof siteConfig
