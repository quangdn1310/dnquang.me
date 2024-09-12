import {
  GithubOutlined,
  InstagramOutlined,
  SkypeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export const NAV_LINKS = [
  { text: "about", path: "/about" },
  { text: "projects", path: "/projects" },
  { text: "portfolio", path: "/portfolio" },
  { text: "blog", path: "/blog" },
  { text: "contact", path: "/contact" },
];

export const SOCIAL_LINKS = [
  {
    icon: GithubOutlined,
    text: "github",
    link: "https://github.com/quangdn1310",
    color: "#353235",
  },
  { icon: TwitterOutlined, text: "twitter", link: "/", color: "#1da1f2" },
  { icon: InstagramOutlined, text: "instagram", link: "/", color: "#c32aa3" },
  { icon: SkypeOutlined, text: "skype", link: "/", color: "#00aff0" },
];
