import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
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
} from "developer-icons";

const ViteLogo = ({ className }: { className?: string }) => (
  <img src="/portfolio/vite.svg" alt="" className={className} />
);

const ICONS = [
  { id: "react",    Icon: React,      label: "React",      left: "5%",   top: "8%",   mLeft: "2%",   mTop: "18%", dur: "7s",   delay: "0s",    tilt: "-6deg" },
  { id: "tailwind", Icon: TailwindCSS, label: "Tailwind",   left: "2%",   top: "50%",  mLeft: "1%",   mTop: "28%", dur: "8.5s", delay: "1.3s",  tilt: "4deg" },
  { id: "figma",    Icon: Figma,      label: "Figma",      left: "6%",   top: "75%",  mLeft: "2%",   mTop: "72%", dur: "6.5s", delay: "2.8s",  tilt: "-4deg" },
  { id: "next",     Icon: NextJs,     label: "Next.js",    right: "5%",  top: "7%",   mRight: "18%",  mTop: "12%",  dur: "9s",   delay: "0.6s",  tilt: "8deg" },
  { id: "node",     Icon: NodeJs,     label: "Node.js",    right: "2%",  top: "43%",  mRight: "2%",  mTop: "16%", dur: "7.5s", delay: "1.9s",  tilt: "-8deg" },
  { id: "supabase", Icon: Supabase,   label: "Supabase",   right: "6%",  top: "72%",  mRight: "1%",  mTop: "62%", dur: "6s",   delay: "3.2s",  tilt: "5deg" },
  { id: "js",       Icon: JavaScript, label: "JavaScript", left: "22%",  top: "84%",  mLeft: "8%",   mTop: "88%", dur: "8.5s", delay: "0.9s",  tilt: "-3deg" },
  { id: "ts",       Icon: TypeScript, label: "TypeScript", left: "57%",  top: "81%",  mRight: "8%",  mTop: "88%", dur: "7s",   delay: "2.1s",  tilt: "6deg" },
  { id: "docker",   Icon: Docker,     label: "Docker",     left: "60%",  top: "4%",   mLeft: "42%",  mTop: "2%",  dur: "8s",   delay: "1.6s",  tilt: "-5deg" },
  { id: "git",      Icon: Git,        label: "Git",        left: "17%",  top: "3%",   mLeft: "10%",  mTop: "3%",  dur: "6.5s", delay: "3.7s",  tilt: "7deg" },
  { id: "vite",     Icon: ViteLogo,   label: "Vite",       left: "38%",  top: "88%",  mLeft: "40%",  mTop: "92%", dur: "7.8s", delay: "4.1s",  tilt: "-2deg" },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);
  return isMobile;
}

const SKILLS = ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "TailwindCSS"];

export default function App() {
  const [isDark, setIsDark] = useState(() => 
    document.documentElement.classList.contains('dark')
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden flex flex-col items-center justify-center select-none">

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb -top-40 -left-40 w-[520px] h-[520px] opacity-30 dark:opacity-40"
          style={{ background: "radial-gradient(circle, var(--color-orb-violet) 0%, transparent 70%)" }}
        />
        <div
          className="orb -top-20 right-0 w-[420px] h-[420px] blur-[90px] opacity-25 dark:opacity-35"
          style={{ background: "radial-gradient(circle, var(--color-orb-blue) 0%, transparent 70%)" }}
        />
        <div
          className="orb bottom-0 left-1/4 w-[480px] h-[320px] opacity-20 dark:opacity-30"
          style={{ background: "radial-gradient(circle, var(--color-orb-cyan) 0%, transparent 70%)" }}
        />
        <div
          className="orb top-1/2 -translate-y-1/2 right-1/4 w-[300px] h-[300px] blur-[80px] opacity-[0.18] dark:opacity-25"
          style={{ background: "radial-gradient(circle, var(--color-orb-pink) 0%, transparent 70%)" }}
        />
        <div
          className="orb bottom-10 right-10 w-[360px] h-[260px] blur-[90px] opacity-20 dark:opacity-[0.28]"
          style={{ background: "radial-gradient(circle, var(--color-orb-indigo) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 grid-pattern opacity-[0.025] dark:opacity-[0.04]"
        />
      </div>

      {ICONS.map(({ id, Icon, label, left, top, right, mLeft, mTop, mRight, dur, delay, tilt }) => {
        const pos = isMobile
          ? { left: mLeft, top: mTop, right: mRight }
          : { left, top, right };
        return (
          <div
            key={id}
            className="absolute z-10"
            style={{ ...pos, transform: `rotate(${tilt})` }}
          >
            <div
              style={{
                animation: `floatUp ${dur} ease-in-out infinite`,
                animationDelay: delay,
              }}
            >
              <div className={`glass-card glass-card-hover transition-all duration-500 ease-in-out hover:scale-110 ${isMobile ? "rounded-[14px] p-2 gap-1 w-[52px]" : "rounded-[18px] p-3 gap-1.5 w-[70px]"} flex flex-col items-center cursor-default`}>
                <div className={`${isMobile ? "w-7 h-7" : "w-9 h-9"} flex-shrink-0 drop-shadow-sm`}>
                  <Icon className="w-full h-full" />
                </div>
                <span
                  className={`${isMobile ? "text-[7px]" : "text-[9px]"} font-semibold text-foreground/55 leading-none tracking-wide uppercase`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 max-w-xl w-full">

        <div className="glass-pill rounded-full px-4 sm:px-5 py-1.5 mb-4 sm:mb-6 inline-flex items-center gap-1.5">
          <span
            className="text-sm text-violet-600 dark:text-violet-400 font-semibold tracking-widest"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {"<developer />"}
          </span>
        </div>

        <h1
          className="gradient-text text-[clamp(3rem,12vw,7rem)] font-black tracking-tight leading-none mb-2 sm:mb-3"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Homam
        </h1>

        <p
          className="text-foreground/60 dark:text-foreground/55 text-base sm:text-lg md:text-xl font-medium tracking-wide mb-5 sm:mb-7"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Full-Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Building for the web
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-9">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="glass-chip rounded-full px-4 py-1.5 text-sm font-semibold text-foreground/75 dark:text-foreground/70"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {skill}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/HomamDev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>https://github.com/HomamDev</span>
        </a>

        <a
          href="https://x.com/HomamDev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>https://x.com/HomamDev</span>
        </a>

        <a
          href="https://youtube.com/@HomamDev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>https://youtube.com/@HomamDev</span>
        </a>
      </div>

      <button
        onClick={() => setIsDark((d) => !d)}
        className="glass-button absolute top-5 right-5 z-30 rounded-full p-2.5 cursor-pointer"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-slate-500" />
        )}
      </button>
    </div>
  );
}
