export default function ContactSection() {
  return (
    <section id="contact" className="relative z-20 w-full min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-4 max-w-2xl">
        <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
          Contact
        </h2>
        <p className="text-foreground/60 text-lg" style={{ fontFamily: "var(--font-inter)" }}>
          Get in touch with me
        </p>
      </div>
    </section>
  );
}
