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
  <svg width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25.9456 44.9383C25.2821 45.7827 23.925 45.3131 23.925 44.2403V33.9369C23.925 32.6875 22.9126 31.6751 21.6631 31.6751H10.287C9.36714 31.6751 8.83075 30.6346 9.36713 29.8871L16.8464 19.4157C17.917 17.9185 16.8464 15.8376 15.0046 15.8376H1.23731C0.317479 15.8376 -0.218913 14.7972 0.317475 14.0497L10.0134 0.4741C10.2266 0.176825 10.5692 0.000183105 10.9332 0.000183105H39.8271C40.7469 0.000183105 41.2833 1.04065 40.7469 1.78814L33.2676 12.2595C32.197 13.7567 33.2676 15.8376 35.1094 15.8376H46.4856C47.4291 15.8376 47.959 16.9255 47.3753 17.6687L25.9478 44.9404L25.9456 44.9383Z" fill="#863BFF"/>
    <mask id="mask0_2002_17158" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="46">
      <path d="M25.8416 44.9381C25.1781 45.7825 23.821 45.3129 23.821 44.2401V33.9368C23.821 32.6873 22.8085 31.6749 21.5591 31.6749H10.183C9.26313 31.6749 8.72674 30.6344 9.26313 29.8869L16.7424 19.4155C17.813 17.9184 16.7424 15.8374 14.9006 15.8374H1.1333C0.213475 15.8374 -0.322917 14.797 0.213471 14.0495L9.90938 0.473917C10.1226 0.176641 10.4652 0 10.8292 0H39.7231C40.6429 0 41.1793 1.04046 40.6429 1.78796L33.1636 12.2594C32.093 13.7565 33.1636 15.8374 35.0054 15.8374H46.3816C47.3251 15.8374 47.855 16.9253 47.2713 17.6685L25.8438 44.9402L25.8416 44.9381Z" fill="black"/>
    </mask>
    <g mask="url(#mask0_2002_17158)">
      <g filter="url(#filter0_f_2002_17158)">
        <ellipse cx="5.50802" cy="14.7043" rx="5.50802" ry="14.7043" transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -4.46924 31.5157)" fill="#EDE6FF"/>
      </g>
      <g filter="url(#filter1_f_2002_17158)">
        <ellipse cx="10.3995" cy="29.8514" rx="10.3995" ry="29.8514" transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -39.3281 7.88272)" fill="#EDE6FF"/>
      </g>
      <g filter="url(#filter2_f_2002_17158)">
        <ellipse cx="5.50802" cy="30.4868" rx="5.50802" ry="30.4868" transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -40.4673 11.3212)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter3_f_2002_17158)">
        <ellipse cx="5.50802" cy="30.5986" rx="5.50802" ry="30.5986" transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -35.8721 29.3204)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter4_f_2002_17158)">
        <ellipse cx="5.50802" cy="30.5986" rx="5.50802" ry="30.5986" transform="matrix(0.00324134 0.999995 0.999995 -0.00324134 -34.3398 30.4693)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter5_f_2002_17158)">
        <ellipse cx="14.0715" cy="22.0783" rx="14.0715" ry="22.0783" transform="matrix(0.0584509 -0.99829 -0.99829 -0.0584509 74.3486 26.8633)" fill="#EDE6FF"/>
      </g>
      <g filter="url(#filter6_f_2002_17158)">
        <ellipse cx="3.47034" cy="21.5008" rx="3.47034" ry="21.5008" transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 75.7944 18.0627)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter7_f_2002_17158)">
        <ellipse cx="3.47034" cy="21.5008" rx="3.47034" ry="21.5008" transform="matrix(-0.0172986 -0.99985 -0.99985 0.0172986 75.7944 18.0627)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter8_f_2002_17158)">
        <ellipse cx="0.386861" cy="8.97156" rx="4.40666" ry="29.1076" transform="rotate(39.5103 0.386861 8.97156)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter9_f_2002_17158)">
        <ellipse cx="47.5226" cy="-6.09166" rx="4.40666" ry="29.1076" transform="rotate(37.8923 47.5226 -6.09166)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter10_f_2002_17158)">
        <ellipse cx="41.4121" cy="6.3335" rx="5.9715" ry="9.66515" transform="rotate(37.8923 41.4121 6.3335)" fill="#47BFFF"/>
      </g>
      <g filter="url(#filter11_f_2002_17158)">
        <ellipse cx="-1.87921" cy="38.3321" rx="4.40666" ry="29.1076" transform="rotate(37.8923 -1.87921 38.3321)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter12_f_2002_17158)">
        <ellipse cx="-1.87921" cy="38.3321" rx="4.40666" ry="29.1076" transform="rotate(37.8923 -1.87921 38.3321)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter13_f_2002_17158)">
        <ellipse cx="35.6511" cy="29.9069" rx="4.40666" ry="29.1076" transform="rotate(37.8923 35.6511 29.9069)" fill="#7E14FF"/>
      </g>
      <g filter="url(#filter14_f_2002_17158)">
        <ellipse cx="38.4178" cy="32.4" rx="5.9715" ry="15.2974" transform="rotate(37.8923 38.4178 32.4)" fill="#47BFFF"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_f_2002_17158" x="-19.7697" y="16.1493" width="60.0452" height="41.6535" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="7.65926" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter1_f_2002_17158" x="-54.613" y="-7.53303" width="90.3397" height="51.4368" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="7.65926" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter2_f_2002_17158" x="-49.6403" y="2.03032" width="79.3554" height="29.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter3_f_2002_17158" x="-45.0451" y="20.0292" width="79.579" height="29.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter4_f_2002_17158" x="-43.5129" y="21.1781" width="79.579" height="29.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter5_f_2002_17158" x="15.7557" y="-17.9006" width="74.7493" height="58.852" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="7.65926" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter6_f_2002_17158" x="23.5481" y="2.28368" width="61.3773" height="25.3622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter7_f_2002_17158" x="23.5481" y="2.28368" width="61.3773" height="25.3622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter8_f_2002_17158" x="-27.6359" y="-22.8531" width="56.0453" height="63.6493" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter9_f_2002_17158" x="20.1155" y="-38.4147" width="54.8139" height="64.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter10_f_2002_17158" x="24.6414" y="-11.3229" width="33.5414" height="35.3129" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter11_f_2002_17158" x="-29.2863" y="6.00905" width="54.8139" height="64.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter12_f_2002_17158" x="-29.2863" y="6.00905" width="54.8139" height="64.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter13_f_2002_17158" x="8.24395" y="-2.41615" width="54.8139" height="64.646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
      <filter id="filter14_f_2002_17158" x="18.7132" y="10.5885" width="39.4091" height="43.6229" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="4.59556" result="effect1_foregroundBlur_2002_17158"/>
      </filter>
    </defs>
  </svg>
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
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
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
          href="https://x.com/dev108_homam"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span>https://x.com/dev108_homam</span>
        </a>

        <a
          href="https://www.youtube.com/@HomamDev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>https://www.youtube.com/@HomamDev</span>
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
