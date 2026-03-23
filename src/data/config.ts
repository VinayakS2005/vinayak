const config = {
  title: "Vinayak S | Software Engineer",
  description: {
    long: "Explore the portfolio of Vinayak, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vinayak, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Vinayak",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Vinayak S",
  email: "vinayaksanthosh2005@gmail.com",
  site: "https://nareshkhatri.site",



  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/vinayak05",
    leetcode: "https://leetcode.com/u/VinayakS2005/",
    github: "https://github.com/VinayakS2005",
  },
};
export { config };
