"use client";

import { Theme } from "@/app/types";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useLayoutEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => setIsMounted(true), []);

  const ThemeIcon: Record<Theme, React.ReactNode> = {
    [Theme.light]: <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />,
    [Theme.dark]: <Moon className=" rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />,
  };

  const switchTheme = useCallback(() => setTheme(theme === Theme.light ? Theme.dark : Theme.light), [theme, setTheme]);

  return (
    <button
      onClick={switchTheme}
      className="flex items-center justify-center size-10 rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isMounted && ThemeIcon[theme as Theme]}
      <span className="sr-only">Поменять тему</span>
    </button>
  );
}
