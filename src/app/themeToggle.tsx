"use client";
import { DARK_THEME, LIGHT_THEME } from "@/constants";
import { Moon, Sun } from "@/icons";
import { FormEventHandler, useEffect, useState } from "react";
import { Swap } from "react-daisyui";

export function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") ?? LIGHT_THEME
      : LIGHT_THEME
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle: FormEventHandler = (e) => {
    if ((e.target as HTMLInputElement).checked) {
      setTheme(DARK_THEME);
    } else {
      setTheme(LIGHT_THEME);
    }
  };

  return (
    <Swap
      onChange={handleToggle}
      onElement={<Sun alt="light" className="w-8 h-8" />}
      offElement={<Moon alt="dark" className="w-8 h-8" />}
      flip={true}
    />
  );
}
