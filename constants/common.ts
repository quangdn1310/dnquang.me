import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SkypeOutlined,
  XOutlined,
} from "@ant-design/icons";

export const NAV_LINKS = [
  { disabled: false, text: "about", path: "/about" },
  { disabled: false, text: "projects", path: "/projects" },
  { disabled: false, text: "experience", path: "/experience" },
  { disabled: false, text: "blog", path: "/blog" },
  { disabled: false, text: "contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: GithubOutlined,
    text: "github",
    link: "https://github.com/quangdn1310",
    color: "#353235",
  },
  { icon: XOutlined, text: "X", link: "/", color: "#000000" },
  {
    icon: LinkedinOutlined,
    text: "linkedin",
    link: "https://www.linkedin.com/in/quangdn1310/",
    color: "#0a66c2",
  },
  { icon: SkypeOutlined, text: "skype", link: "/", color: "#00aff0" },
];

export const LATEST_WORKS = [
  {
    link: "/blog",
    title: "Blog website",
    desc: "Developed a minimalist personal blog using Next.js and React, with dynamic routing and responsive layouts.",
    thumb: "/images/works/blog_web.png",
  },
  {
    link: "/blog",
    title: "UI/UX Improvements",
    desc: "Improved the user interface and user experience for the Nova Square application on both mobile and desktop platforms, utilizing React and Ant Design. Focused on enhancing responsiveness, accessibility, and overall design consistency.",
    thumb: "/images/works/uiux.jpg",
  },
  {
    link: "/blog",
    title: "Abap developer",
    desc: "Successfully completed the basic training program and contributed to internal company projects.",
    thumb: "/images/works/sap.jpg",
  },
];

export const ABOUT_COLLECTION = [
  { path: "/images/collections/about/parent.jpg", name: "Parent" },
  { path: "/images/collections/about/workspace.jpg", name: "My workspace" },
  { path: "/images/collections/about/mot.jpg", name: "Mót" },
  { path: "/images/collections/about/bridge.jpg", name: "Bridge" },
  { path: "/images/collections/about/city.jpg", name: "City" },
  { path: "/images/collections/about/river.jpg", name: "River" },
];
