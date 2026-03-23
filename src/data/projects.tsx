import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  api: {
    title: "API",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>API</strong>
      </span>
    ),
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "codingducks",
    category: "AI Pet training Chatbot",
    title: "PawTron",
    src: "/assets/projects-screenshots/pawtron/pawtron.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.api,
      ],
    },
    live: "https://pet-training-ai-chatbot.vercel.app/",
    github: "https://github.com/VinayakS2005/Pet-Training-Ai-Chatbot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            PawTron -Personal AI chatbot and Assisstant for pet training
          </TypographyP>
          <TypographyP className="font-mono ">
            An AI-powered chatbot designed to assist pet owners with training guidance, behavior management, and pet care advice.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Screenshots </TypographyH3>

          <SlideShow
            images={[
              `${BASE_PATH}/pawtron/chatbot.png`,
              `${BASE_PATH}/pawtron/progress.png`,
              `${BASE_PATH}/pawtron/trainingplan.png`,
            ]}
          />


        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "3D Environment",
    title: "Abandoned Hospital",
    src: "/assets/projects-screenshots/blender/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "",
    skills: {
      frontend: [],
      backend: [],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            A detailed 3D scene of an abandoned asylum using Blender, focusing on atmosphere, lighting, and environmental storytelling.
          </TypographyP>


          <SlideShow
            images={[
              `${BASE_PATH}/blender/1.png`,
              `${BASE_PATH}/blender/2.png`,
              `${BASE_PATH}/blender/3.png`

            ]}
          />


          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Data Analysis",
    title: "Customer Churn Analysis",
    src: "/assets/projects-screenshots/customer/landing.jpg",
    screenshots: ["1.png"],
    live: "",
    github: "https://github.com/VinayakS2005/Customer-Churn-Analysis",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            An interactive Customer Churn Analysis Dashboard using Power BI to analyze customer retention patterns and identify factors contributing to churn.
            The dashboard provides clear visual insights into customer behavior, enabling businesses to understand trends, detect high-risk customer segments,
            and make data-driven decisions to improve retention. Also used the Machine learning algorithm Random Forest to predict
            future churning customers.
          </TypographyP>

          <SlideShow
            images={[
              `${BASE_PATH}/customer/1.jpg`,
              `${BASE_PATH}/customer/2.jpg`,

            ]}
          />

        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://vinayak-port.vercel.app",
    github: "https://github.com/VinayakS2005/vinayak",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />


        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Data Analysis",
    title: "Air Quality EDA",
    src: "/assets/projects-screenshots/air/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "",
    github: "https://github.com/VinayakS2005/Air_Quality_EDA",
    skills: {
      frontend: [],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Performed Exploratory Data Analysis (EDA) on an air quality dataset using Python to identify patterns,
            trends, and potential environmental insights. The project focused on analyzing key air pollution indicators
            such as particulate matter,
            gas concentrations, and other environmental factors to better understand air quality conditions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/air/1.png`,
              `${BASE_PATH}/air/2.png`,
              `${BASE_PATH}/air/3.png`,
              `${BASE_PATH}/air/4.png`,
              `${BASE_PATH}/air/5.png`,
            ]}
          />
        </div>
      );
    },
  },

];
export default projects;
