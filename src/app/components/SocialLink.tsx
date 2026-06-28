import React from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

export default function SocialLink({ href, label, icon, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-[color,transform] duration-200 hover:-translate-y-px inline-flex items-center gap-2 text-foreground/40 dark:text-foreground/35 hover:text-foreground/70 dark:hover:text-foreground/60 text-sm ${className ?? ""}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" aria-hidden>
        {icon}
      </svg>
      <span>{label}</span>
    </a>
  );
}
