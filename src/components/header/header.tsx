"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { links } from "@/components/header/config";
import { useLenis } from "@/lib/lenis";
import { usePathname } from "next/navigation";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#") && pathname === "/") {
      const hash = href.substring(href.indexOf("#"));
      if (document.querySelector(hash)) {
        e.preventDefault();
        lenis?.scrollTo(hash);
        window.history.pushState(null, "", hash);
      }
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: "hsl(var(--background) / .8)",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      <div className={cn(styles.bar, "flex items-center justify-between")}>
        {/* Left: Author name */}
        <Link href="/" className="flex items-center justify-center">
          <Button variant={"link"} className="text-md">
            {config.author}
          </Button>
        </Link>

        {/* Center: Desktop navigation links */}
        <nav className={cn(styles.navLinks, "hidden md:flex")}>
          {links.map((link) => (
            <Link 
              key={link.title} 
              href={link.href} 
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Right: Utilities + mobile burger */}
        <div className="flex items-center gap-1">
          <FunnyThemeToggle className="w-6 h-6 mr-2 hidden md:flex" />
          {process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}


          {/* Mobile hamburger button */}
          <Button
            variant={"ghost"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "m-0 p-0 h-8 w-8 flex md:hidden items-center justify-center"
            )}
            aria-label="Toggle navigation menu"
          >
            <div
              className={`${styles.burger} ${mobileOpen ? styles.burgerActive : ""}`}
            ></div>
          </Button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.title}
              </Link>
            ))}
            <div className="px-4 pb-3 pt-1">
              <FunnyThemeToggle className="w-6 h-6" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
