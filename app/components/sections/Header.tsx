"use client";

import Drawer from "@/app/components/drawer";
import Menu from "@/app/components/menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AuthModal } from "../AuthModal";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { LoginModal } from "../LoginModal";
import Image from "next/image";
import logo from "@/public/favicon.ico";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 py-2 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Image src={logo} alt="Logo" className="size-10" />
          <span className="font-bold text-xl">
            Cal<span className="text-primary">Easy</span>
          </span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <Menu />
            </nav>

            <div className="gap-2 flex">
              <LoginModal />
              <AuthModal text={"Sign Up"} />
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );
}
