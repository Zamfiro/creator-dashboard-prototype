"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiMoonStars, PiSun } from "react-icons/pi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex align-middle text-center justify-center text-text w-12 h-12">
      <div
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="flex items-center justify-center overflow-clip"
      >
        <div className={`transition-all duration-150 `}>{theme === "dark" ? <PiSun /> : <PiMoonStars />}</div>
      </div>
    </div>
  );
}
