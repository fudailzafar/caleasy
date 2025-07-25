"use client";

import * as React from "react";
import { Moon, SunDim } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { flushSync } from "react-dom";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setIsDarkMode(dark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };
  return (
    <Button ref={buttonRef} onClick={changeTheme} variant="ghost">
      {isDarkMode ? <SunDim size={24}/> : <Moon size={24}/>}
    </Button>
  );
};
