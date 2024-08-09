"use client";

import Link from "next/link";
import Image from "next/image";
import IconButton from "./IconButton";
import { MenuItem } from "@/app/Types/MenuItem";
import DesktopSearch from "./DesktopSearch";

export const menu: MenuItem[] = [
  {
    menuTitle: "Home",
    destination: "/",
    icon: "",
  },

  {
    menuTitle: "About",
    destination: "/about",
    icon: "",
  },

  {
    menuTitle: "Anime",
    destination: "/search/anime",
    icon: "",
  },

  {
    menuTitle: "Manga",
    destination: "/search/manga",
    icon: "",
  },
];

export const socials: MenuItem[] = [
  {
    menuTitle: "Facebook",
    destination: "https://www.facebook.com/mark.ramos.16121471",
    icon: "/icons/facebook_icon.svg",
  },

  {
    menuTitle: "Instagram",
    destination: "https://www.instagram.com/adreyaaaaaaan/",
    icon: "/icons/instagram_icon.svg",
  },

  {
    menuTitle: "Github",
    destination: "https://github.com/mark-adreian-dev",
    icon: "/icons/github_icon.svg",
  },

  {
    menuTitle: "Linked In",
    destination: "https://www.linkedin.com/in/mark-ramos-238076213/",
    icon: "/icons/linkedIn_icon.svg",
  },
];

const Header = ({ active, page }: { active?: string; page?: string }) => {
 

  return (
    <header
      className={`absolute z-50 p-6 w-full flex justify-between items-center tablet:p-8 desktop:px-16 desktop:py-8`}
    >
      <Link href="/" scroll={false}>
        <h1 className="leading-7 text-nav-logo-text text-white font-black">
          Heroku
        </h1>
      </Link>
      <nav
        className="hidden tablet:block bg-dark-blue p-2 rounded-xl"
        style={{ background: "rgba(15, 23, 42, 0.3)" }}
      >
        <ul className="flex">
          {menu.map((item) => (
            <li key={item.menuTitle} className="rounded-lg hover:bg-accent">
              <Link href={item.destination} scroll={false}>
                <p className="text-white text-sm font-semibold py-4 px-[0.875rem] hover:text-dark-blue">
                  {item.menuTitle}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <DesktopSearch page={page}/>

      <IconButton
        iconPath="/icons/hamburger_menu.svg"
        className="w-12 h-12 p-[0.875rem] drawer-button tablet:hidden"
      />
      

      <div className="absolute top-0 left-0 !z-40 drawer drawer-end tablet:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="w-[16.625rem] menu bg-base-200 text-base-content min-h-full overflow-y-scroll px-8 py-6 bg-dark-blue">
            <IconButton
              iconPath="/icons/close_icon.svg"
              className="w-12 h-12 p-[0.875rem] mb-6 ml-auto drawer-button tablet:hidden"
            />
            <div className="main-menu mt-12">
              <h5 className="text-white text-base font-bold mb-4">Menu</h5>

              <ul className="mb-12 ">
                {menu.map((items, index) => {
                  return (
                    <li key={index} className="relative">
                      <Link
                        scroll={false}
                        href={items.destination}
                        className={
                          "hover:bg-transparent " +
                          (index === menu.length - 1
                            ? `pb-1 pt-1 px-0`
                            : `pb-3 pt-1 px-0 `)
                        }
                      >
                        <p className="text-accent font-semibold text-sm">
                          0{index}
                        </p>
                        <p className="text-white text-sm font-semibold">
                          {items.menuTitle}
                        </p>
                      </Link>
                      <div
                        className={`absolute -left-8 top-0 p-0 w-[3px] h-8 bg-accent ${
                          active === items.menuTitle.toLowerCase()
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      ></div>
                    </li>
                  );
                })}
              </ul>

              <h5 className="text-white text-base font-bold mb-4">
                Dev Socials
              </h5>
              <ul className="mb-12">
                {socials.map((items, index) => {
                  return (
                    <li key={index}>
                      <Link
                        target="_blank"
                        scroll={false}
                        href={items.destination}
                        className={
                          "hover:bg-transparent " +
                          (index === menu.length - 1
                            ? `pb-1 pt-1 px-0`
                            : `pb-3 pt-1 px-0`)
                        }
                      >
                        <Image
                          src={items.icon}
                          alt="icon"
                          width={100}
                          height={100}
                          sizes="100%"
                          className="w-4 h-4"
                        />
                        <p className="text-white text-sm font-semibold">
                          {items.menuTitle}
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link scroll={false} href="/">
                <h1 className="leading-7 text-nav-logo-text text-white font-black">
                  Heroku
                </h1>
                <p className="text-accent text-[8px] italic">
                  Copyright © 2024 - All right reserved.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
