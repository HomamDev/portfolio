import { useState, useEffect } from "react";
import {
  React,
  TailwindCSS,
  NodeJs,
  NextJs,
  Supabase,
  Figma,
  JavaScript,
  TypeScript,
  Docker,
  Git,
  ExpressJsLight,
  ExpressJsDark,
} from "developer-icons";

const ViteLogo = ({ className }: { className?: string }) => (
  <img src="/portfolio/vite.svg" alt="" className={className} />
);

type Tier = "mobile" | "tablet" | "desktop";

interface PlacementData {
  id: string;
  cardWidth: number;
  x: number;
  y: number;
  rotation: number;
  duration: number;
  delay: number;
}

const ICON_MAP: Record<string, { label: string }> = {
  react:    { label: "React" },
  next:     { label: "Next.js" },
  vite:     { label: "Vite" },
  figma:    { label: "Figma" },
  ts:       { label: "TypeScript" },
  supabase: { label: "Supabase" },
  tailwind: { label: "Tailwind" },
  node:     { label: "Node.js" },
  js:       { label: "JavaScript" },
  docker:   { label: "Docker" },
  git:      { label: "Git" },
  express:  { label: "Express" },
};

const ICON_COMPONENTS: Record<string, React.ComponentType<{ className?: string }>> = {
  react:    React,
  next:     NextJs,
  vite:     ViteLogo,
  figma:    Figma,
  ts:       TypeScript,
  js:       JavaScript,
  tailwind: TailwindCSS,
  node:     NodeJs,
  supabase: Supabase,
  docker:   Docker,
  git:      Git,
};

// ─── Desktop (all 12) — pixel y keeps spacing consistent regardless of viewport height ───
const DESKTOP: PlacementData[] = [
  { id: "vite",     cardWidth: 88, x: 28,  y: -40,  rotation: 6,    duration: 7.8, delay: 3.5 },
  { id: "supabase", cardWidth: 92, x: 62,  y: -20,  rotation: -4,   duration: 7.2, delay: 1.2 },
  { id: "ts",       cardWidth: 76, x: 6,   y: 50,   rotation: 10,   duration: 7.5, delay: 3.8 },
  { id: "figma",    cardWidth: 70, x: 13,  y: 130,  rotation: -7,   duration: 8.0, delay: 2.0 },
  { id: "next",     cardWidth: 82, x: 90,  y: 40,   rotation: -3,   duration: 8.3, delay: 0.8 },
  { id: "tailwind", cardWidth: 74, x: 84,  y: 125,  rotation: 8,    duration: 7.6, delay: 4.1 },
  { id: "react",    cardWidth: 86, x: 4,   y: 220,  rotation: -5.5, duration: 7.0, delay: 2.8 },
  { id: "docker",   cardWidth: 66, x: 10,  y: 320,  rotation: 9,    duration: 7.9, delay: 1.5 },
  { id: "js",       cardWidth: 72, x: 93,  y: 200,  rotation: -6,   duration: 8.5, delay: 2.3 },
  { id: "node",     cardWidth: 64, x: 87,  y: 310,  rotation: 4,    duration: 8.1, delay: 4.6 },
  { id: "express",  cardWidth: 78, x: 22,  y: 460,  rotation: 7,    duration: 7.4, delay: 3.0 },
  { id: "git",      cardWidth: 62, x: 70,  y: 490,  rotation: -9,   duration: 8.8, delay: 0.3 },
];

// ─── Tablet (all 12) — same pixel y, smaller cards for narrower wrapper ───
const TABLET: PlacementData[] = [
  { id: "vite",     cardWidth: 58, x: 26,  y: -40,  rotation: 5,    duration: 7.6, delay: 3.2 },
  { id: "supabase", cardWidth: 62, x: 10,  y: -20,  rotation: -3.5, duration: 7.4, delay: 0.8 },
  { id: "ts",       cardWidth: 52, x: 4,   y: 50,   rotation: 9,    duration: 7.8, delay: 3.5 },
  { id: "figma",    cardWidth: 46, x: 10,  y: 130,  rotation: -6,   duration: 8.2, delay: 1.8 },
  { id: "next",     cardWidth: 56, x: 90,  y: 40,   rotation: -2.5, duration: 8.5, delay: 0.5 },
  { id: "tailwind", cardWidth: 50, x: 84,  y: 125,  rotation: 7,    duration: 7.9, delay: 4.0 },
  { id: "react",    cardWidth: 56, x: 3,   y: 220,  rotation: -5,   duration: 7.2, delay: 2.5 },
  { id: "docker",   cardWidth: 42, x: 8,   y: 320,  rotation: 8,    duration: 8.4, delay: 1.2 },
  { id: "js",       cardWidth: 46, x: 93,  y: 200,  rotation: -5.5, duration: 8.3, delay: 3.1 },
  { id: "node",     cardWidth: 42, x: 88,  y: 310,  rotation: 3.5,  duration: 8.0, delay: 4.3 },
  { id: "express",  cardWidth: 52, x: 20,  y: 460,  rotation: 5,    duration: 7.5, delay: 2.8 },
  { id: "git",      cardWidth: 40, x: 68,  y: 490,  rotation: -8,   duration: 8.6, delay: 1.4 },
];

// ─── Mobile (all 12) — same pixel y, smallest cards for narrow viewport ───
const MOBILE: PlacementData[] = [
  { id: "vite",     cardWidth: 46, x: 38,  y: -43,  rotation: 5,    duration: 7.8, delay: 2.0 },
  { id: "ts",       cardWidth: 40, x: 72,  y: -42,  rotation: 8,    duration: 7.5, delay: 3.0 },
  { id: "supabase", cardWidth: 48, x: 10,  y: -30,  rotation: -3,   duration: 7.4, delay: 0.6 },
  { id: "next",     cardWidth: 42, x: 90,  y: 45,   rotation: -5,   duration: 8.0, delay: 1.8 },
  { id: "figma",    cardWidth: 36, x: 4,   y: 65,   rotation: 7,    duration: 7.6, delay: 2.6 },
  { id: "react",    cardWidth: 46, x: 2,   y: 180,  rotation: -6,   duration: 7.2, delay: 1.2 },
  { id: "tailwind", cardWidth: 42, x: 94,  y: 160,  rotation: 6,    duration: 7.4, delay: 2.2 },
  { id: "js",       cardWidth: 38, x: 3,   y: 300,  rotation: 5,    duration: 8.2, delay: 3.8 },
  { id: "docker",   cardWidth: 34, x: 92,  y: 290,  rotation: -8,   duration: 7.8, delay: 0.2 },
  { id: "node",     cardWidth: 38, x: 22,  y: 415,  rotation: -4,   duration: 8.0, delay: 3.4 },
  { id: "express",  cardWidth: 44, x: 58,  y: 435,  rotation: 4,    duration: 7.6, delay: 4.0 },
  { id: "git",      cardWidth: 34, x: 40,  y: 485,  rotation: -7,   duration: 8.4, delay: 0.8 },
];

function getTier(): Tier {
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

const PLACEMENTS: Record<Tier, PlacementData[]> = {
  mobile: MOBILE,
  tablet: TABLET,
  desktop: DESKTOP,
};

export default function FloatingIcons({ isDark }: { isDark: boolean }) {
  const [tier, setTier] = useState<Tier>(getTier);

  useEffect(() => {
    const handleResize = () => setTier(getTier());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const placements = PLACEMENTS[tier];

  return (
    <>
      {placements.map(({ id, cardWidth, x, y, rotation, duration, delay }) => {
        const def = ICON_MAP[id];
        const Icon =
          id === "express"
            ? isDark
              ? ExpressJsLight
              : ExpressJsDark
            : ICON_COMPONENTS[id];

        const iconContainerSize = cardWidth * 0.48;
        const fontSize = Math.max(6, cardWidth * 0.12);
        const gap = Math.max(3, cardWidth * 0.05);
        const padding = Math.max(6, cardWidth * 0.14);
        const borderRadius = Math.max(8, cardWidth * 0.22);

        return (
          <div
            key={id}
            className="absolute z-10"
            style={{
              left: `${x}%`,
              top: `${y}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div
              style={{
                animation: `floatUp ${duration}s ease-in-out ${delay}s infinite`,
              }}
            >
              <div
                className="glass-card flex flex-col items-center cursor-default"
                style={{ width: cardWidth, padding, borderRadius, gap }}
              >
                <div style={{ width: iconContainerSize, height: iconContainerSize }}>
                  <Icon className="w-full h-full" />
                </div>
                <span
                  className="font-semibold text-foreground/55 leading-none tracking-wide uppercase text-center"
                  style={{ fontFamily: "var(--font-inter)", fontSize }}
                >
                  {def.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
