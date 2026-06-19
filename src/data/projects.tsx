import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useRef, useState } from "react";
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

const PlayableVideo = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl bg-black aspect-video group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain mx-auto"
        controls={isPlaying}
        onPause={handlePause}
        onEnded={handlePause}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors pointer-events-auto"
        >
          <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
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
  video?: string;
  hidden?: boolean;
};
const projects: Project[] = [
  {
    id: "unseenfloor",
    category: "Unity 3D Game",
    title: "The Unseen Floor",
    src: "/assets/projects-screenshots/unity-game/landing.png",
    screenshots: ["1.png", "2.png", "3.png"],
    skills: {
      frontend: [],
      backend: [],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-center text-xl mb-4">
            The Unseen Floor
          </TypographyP>
          <TypographyP className="font-mono mb-4 text-sm md:text-base">
            Developed a 3D exploration-based game inspired by the Backrooms in Unity.
          </TypographyP>
          <ul className="list-disc pl-5 font-mono text-xs md:text-sm space-y-2 mb-6 text-neutral-600 dark:text-neutral-400">
            <li>Implemented player movement, collision detection, notes system, keypad puzzle, door unlock mechanism, scene transition, and object interaction systems using C# scripting.</li>
            <li>Optimized game performance through occlusion culling and script optimization techniques.</li>
            <li>Created Enemy AI with navmesh pathfinding which chases the player till a destination point.</li>
          </ul>

          <PlayableVideo
            src="/assets/projects-screenshots/unity-game/gameplay.mp4"
            poster="/assets/projects-screenshots/unity-game/landing.png"
          />

          <TypographyH3 className="my-4 mt-8">Screenshots </TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/unity-game/1.png`,
              `${BASE_PATH}/unity-game/2.png`,
              `${BASE_PATH}/unity-game/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "pixelcraft",
    category: "Creative Web Application",
    title: "PixelCraft",
    src: "/assets/projects-screenshots/pixelcraft/landing.png",
    screenshots: ["1.png", "2.png", "3.png"],
    video: "/assets/projects-screenshots/pixelcraft/demo.mp4",
    hidden: true, // Example of using the visibility control
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.api,
      ],
    },
    live: "https://pixelcraft-editor.vercel.app/",
    github: "https://github.com/VinayakS2005/PixelCraft",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            PixelCraft - Advanced Web Image Editor
          </TypographyP>
          <TypographyP className="font-mono text-center mb-6">
            A premium, modern web-based image editor featuring rich image manipulation capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Project Gallery</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/pixelcraft/1.png`,
              `${BASE_PATH}/pixelcraft/2.png`,
              `${BASE_PATH}/pixelcraft/3.png`,
            ]}
          />
        </div>
      );
    },
  },
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
