// data/toolkit.ts
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export const toolkit: { name: string; icon: IconType }[] = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "NodeJS", icon: SiNodedotjs },
];
