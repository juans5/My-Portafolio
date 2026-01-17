import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiSupabase,
  SiMysql,
  SiFramer,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiDrizzle,
  SiCss3,
} from "react-icons/si";

export const cardContent = [
  {
    title: "Memorama",
    paragraph: "Diviertete colocando a trabajar a tu mente con este simple juego de memorización",
    img: "./imgs/memorama.png",
    tecnology: [1, 2, 3, 9],
    github: "https://github.com/juans5/ChatBot-Agent",
  },
  {
    title: "ChatBot",
    paragraph:
      "Tienes preguntas diarias respecto a tus labores?, preguntale sin compromisos a este agente de IA y el te dara respuesta",
    img: "./imgs/chatbot.png",
    tecnology: [1, 2, 3, 7, 10, 11, 13],
    github: "https://github.com/juans5",
  },
  {
    title: "Pocket Professor",
    paragraph:
      "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
    img: "image1.png",
    tecnology: [1, 14, 7],
    github: "https://github.com/juans5",
  },
  {
    title: "MicroServices Ecommerce",
    paragraph:
      "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
    img: "image1.png",
    tecnology: [1, 2],
    github: "https://github.com/juans5",
  },
  {
    title: "Pocket Professor",
    paragraph:
      "Sistema con simuladores para promover el ahorro, calcular metas, crear colchones de seguridad",
    img: "image1.png",
    tecnology: [1, 2],
  },
];
export const technologies = [
  { id: 1, label: "Javascript", category: "1", icon: SiJavascript },
  { id: 10, label: "Nodejs", category: "1", icon: SiNodedotjs },
  { id: 11, label: "Express", category: "1", icon: SiExpress },
  { id: 12, label: "Javascript", category: "1", icon: "" },
  { id: 2, label: "React", category: "2", icon: SiReact },
  { id: 3, label: "Tailwind", category: "2", icon: SiTailwindcss },
  { id: 4, label: "Nextjs", category: "2", icon: SiNextdotjs },
  { id: 5, label: "MySql", category: "3", icon: SiMysql },
  { id: 6, label: "MongoDB", category: "3", icon: SiMongodb },
  { id: 7, label: "Supabase", category: "3", icon: SiSupabase },
  { id: 8, label: "FramerMotion", category: "2", icon: SiFramer },
  // { id: 9, label: "Zustand", category: "2", icon: "./svg/zustand.svg" },
  { id: 13, label: "Drizzle", category: "2", icon: SiDrizzle },
  { id: 14, label: "Css", category: "1", icon: SiCss3 },
];
