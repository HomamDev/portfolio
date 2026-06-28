const ORBS = [
  { className: "-top-40 -left-40 w-[520px] h-[520px] opacity-30 dark:opacity-40", style: "radial-gradient(circle, var(--color-orb-violet) 0%, transparent 70%)" },
  { className: "-top-20 right-0 w-[420px] h-[420px] blur-[90px] opacity-25 dark:opacity-35", style: "radial-gradient(circle, var(--color-orb-blue) 0%, transparent 70%)" },
  { className: "bottom-0 left-1/4 w-[480px] h-[320px] opacity-20 dark:opacity-30", style: "radial-gradient(circle, var(--color-orb-cyan) 0%, transparent 70%)" },
  { className: "top-1/2 -translate-y-1/2 right-1/4 w-[300px] h-[300px] blur-[80px] opacity-[0.18] dark:opacity-25", style: "radial-gradient(circle, var(--color-orb-pink) 0%, transparent 70%)" },
  { className: "bottom-10 right-10 w-[360px] h-[260px] blur-[90px] opacity-20 dark:opacity-[0.28]", style: "radial-gradient(circle, var(--color-orb-indigo) 0%, transparent 70%)" },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={`orb ${orb.className}`}
          style={{ background: orb.style }}
        />
      ))}
      <div className="absolute inset-0 grid-pattern opacity-[0.025] dark:opacity-[0.04]" />
    </div>
  );
}
