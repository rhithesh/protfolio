import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hithesh R",
  initials: "DV",
  url: "https://hithesh.live",
  location: "Bengaluru India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "CS student trying to explore web2 and web3!",
  summary: "A cs student who is in his 3rd year, .",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rhithesh1947@example.com",
    tel: "+91 ",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rhithesh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hithesh-r-01ab28252/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/imaHelldiver",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Frelancer",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "full stack developer",
      logoUrl: "/atomic.png",
      start: "april 2024",
      end: "present",
      description:
        "Worked on various project on the MERN stack, with highily satisfied  customers with time constrains, Can work in US EU hours also.",
    },
  ],
  education: [
    {
      school: "BMSCE",
      href: "https://www.bmsce.ac.in/",
      degree: "Bachelors of Engineeering",
      logoUrl: "/",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "No Sign",
      href: "https://nosign.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description: "With the release of the .",
      technologies: [
        "Next.js",
        "Typescript",
        "Redis",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nosign.vercel.app/hithesh",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/s.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
