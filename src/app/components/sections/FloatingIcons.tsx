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
  { id: "react",    Icon: React,      label: "React",      left: "4%",   top: "22%",  mLeft: "2%",   mTop: "20%", dur: "7s",   delay: "0s",    tilt: "-6deg" },
  { id: "tailwind", Icon: TailwindCSS, label: "Tailwind",   left: "2%",   top: "52%",  mLeft: "1%",   mTop: "40%", dur: "8.5s", delay: "1.3s",  tilt: "4deg" },
  { id: "figma",    Icon: Figma,      label: "Figma",      left: "5%",   top: "80%",  mLeft: "2%",   mTop: "72%", dur: "6.5s", delay: "2.8s",  tilt: "-4deg" },
  { id: "next",     Icon: NextJs,     label: "Next.js",    right: "4%",  top: "20%",  mRight: "2%",  mTop: "20%",  dur: "9s",   delay: "0.6s",  tilt: "8deg" },
  { id: "node",     Icon: NodeJs,     label: "Node.js",    right: "2%",  top: "50%",  mRight: "1%",  mTop: "40%", dur: "7.5s", delay: "1.9s",  tilt: "-8deg" },
  { id: "supabase", Icon: Supabase,   label: "Supabase",   right: "5%",  top: "78%",  mRight: "2%",  mTop: "72%", dur: "6s",   delay: "3.2s",  tilt: "5deg" },
  { id: "js",       Icon: JavaScript, label: "JavaScript", left: "10%",  top: "92%",  mLeft: "5%",   mTop: "90%", dur: "8.5s", delay: "0.9s",  tilt: "-3deg" },
  { id: "ts",       Icon: TypeScript, label: "TypeScript", right: "10%", top: "92%",  mRight: "5%",  mTop: "90%", dur: "7s",   delay: "2.1s",  tilt: "6deg" },
  { id: "docker",   Icon: Docker,     label: "Docker",     left: "12%",  top: "6%",   mLeft: "22%",  mTop: "82%", dur: "8s",   delay: "1.6s",  tilt: "-5deg" },
  { id: "git",      Icon: Git,        label: "Git",        right: "12%", top: "6%",   mRight: "22%", mTop: "82%", dur: "6.5s", delay: "3.7s",  tilt: "7deg" },
  { id: "vite",     Icon: ViteLogo,   label: "Vite",       left: "45%",  top: "93%",  mLeft: "40%",  mTop: "93%", dur: "7.8s", delay: "4.1s",  tilt: "-2deg" },
];

interface FloatingIconsProps {
  isMobile: boolean;
}

export default function FloatingIcons({ isMobile }: FloatingIconsProps) {
  return (
    <>
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
              <div className={`glass-card ${isMobile ? "rounded-[14px] p-2 gap-1 w-[52px]" : "rounded-[18px] p-3 gap-1.5 w-[70px]"} flex flex-col items-center cursor-default`}>
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
    </>
  );
}
