import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Heart, Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { useActiveSection } from "@/app/hooks/useActiveSection";

const NAV_LINKS = [
  { label: "Home", href: "#home", isHome: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useIsMobile(768);
  const isTablet = useIsMobile(1024);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.href.replace("#", "")), []);
  const activeSection = useActiveSection(sectionIds);
  
  const currentSectionLabel = NAV_LINKS.find(
    (link) => link.href.replace("#", "") === activeSection
  )?.label || NAV_LINKS[0].label;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isMenuOpen || isDropdownOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHome?: boolean) => {
    e.preventDefault();
    
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="w-full px-4 sm:px-6 pt-4 fixed top-0 left-0 right-0 z-30">
      <div className="glass-pill rounded-full px-4 sm:px-6 py-3 max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="/portfolio/logo.png"
            alt=""
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg"
          />
          <span
            className="text-base sm:text-lg font-bold text-foreground"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Homam Dev.
          </span>
        </div>

        {!isTablet && (
          <div className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map(({ label, href, isHome }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleLinkClick(e, href, isHome)}
                className="px-3 sm:px-4 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-white/30 dark:hover:bg-white/10"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {!isMobile && isTablet && (
          <div className="flex-1 flex justify-center relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseDown={(e) => e.stopPropagation()}
              className="glass-button rounded-full px-4 py-2 cursor-pointer flex items-center gap-2"
              aria-label="Navigate to section"
              aria-expanded={isDropdownOpen}
            >
              <span
                className="text-sm font-medium text-foreground"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {currentSectionLabel}
              </span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-foreground/70" />
              </motion.div>
            </button>
          </div>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            className="glass-button rounded-full p-2 sm:px-4 sm:py-2 cursor-pointer flex items-center gap-1.5 sm:gap-2"
            aria-label="Support me with a donation"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 dark:text-rose-400" />
            <span
              className="hidden sm:inline text-sm font-medium text-foreground"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Support Me
            </span>
          </button>

          <button
            onClick={onToggleTheme}
            className="glass-button rounded-full p-2 cursor-pointer"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
            )}
          </button>

          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseDown={(e) => e.stopPropagation()}
              className="glass-button rounded-full p-2 cursor-pointer relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <AnimatePresence>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      className="absolute inset-0"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-full h-full" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      className="absolute inset-0"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-full h-full" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {!isMobile && isTablet && isDropdownOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -8,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              backdropFilter: "blur(12px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -8,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 z-40 origin-top"
          >
            <div className="glass-card rounded-2xl p-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href, isHome }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href, isHome)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-xl hover:bg-white/30 dark:hover:bg-white/10 text-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: -8,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              backdropFilter: "blur(12px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -8,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-2 max-w-5xl mx-auto z-40 origin-top"
          >
            <div ref={menuRef} className="glass-card rounded-2xl p-3 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href, isHome }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleLinkClick(e, href, isHome)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-xl hover:bg-white/30 dark:hover:bg-white/10 text-center"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
