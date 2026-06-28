export default function AboutSection() {
  return (
    <section id="about" className="relative z-20 w-full min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
          About
        </h2>
        <p className="text-foreground/60 text-lg" style={{ fontFamily: "var(--font-inter)" }}>
          Learn more about me and my journey as a developer
        </p>
      </div>
    </section>
  );
}
