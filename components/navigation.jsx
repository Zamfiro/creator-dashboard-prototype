'use client'

import React, { useState } from "react";
import { BiUserCircle, BiLogoReact, BiMoon } from "react-icons/bi";
import Link from "next/link";

import { ThemeSwitcher } from "./ThemeSwitcher";
import AppRouter from "next/dist/client/components/app-router";

function Navigation() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className="flex flex-col fixed">
      <div
        className={`flex flex-col fixed w-full overflow-clip border-b border-accent bg-secondary/25 h-fit sm:h-fit backdrop-blur-md p-5 ${
          showNavigation ? "max-h-[1000px]" : "max-h-[96px]"
        } transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-between">
          <div
            onClick={() => setShowNavigation(!showNavigation)}
            className="z-20"
          >
            <BiUserCircle className="text-text w-12 h-12" />
          </div>

          <div>
            <Link href="/">
              <BiLogoReact className="text-text w-12 h-12 md:hover:text-accent" />
            </Link>
            {/*placeholder za logo */}
          </div>
          <div
            className={`${
              showNavigation ? "opacity-100 visible" : "opacity-0 collapse"
            } text-text z-20 w-12 h-12 text-2xl hover:bg-accent rounded-md transition-all duration-1000`}
          >
            <ThemeSwitcher />
          </div>
        </div>

        <div className="text-text align-middle text-3xl sm:text-2xl font-bold m-12">
          
            <ul className="sm:justify-center  [&>li]:p-2 [&>li]:cursor-pointer sm:hover:[&>li]:bg-accent [&>li]:rounded-md sm:flex sm:flex-row sm:gap-2 md:gap-5">
              <li>My profile</li>
              <li>Support</li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>Settings</li>
            </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Navigation;
