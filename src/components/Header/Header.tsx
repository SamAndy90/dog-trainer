"use client";

import Burger from "./static/Burger";
import CrissCross from "./static/Criss-cross";
import Logo from "@/common/Logo";
import { ButtonBase, Container } from "@/common/ui";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header
      className={
        "fixed z-50 w-full overflow-visible bg-mainBrown-900/30 py-4 text-white backdrop-blur-[8px] md:py-6"
      }>
      <Container>
        <div className={"flex items-center justify-between gap-12"}>
          <Link href={"/"} className={"md:pl-7"}>
            <Logo />
          </Link>
          <nav className={"hidden md:pr-10 lg:block"}>
            <ul
              className={"flex flex-wrap items-center justify-center gap-x-10"}>
              <li
                className={
                  "relative transition-all duration-200  after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#about"}>Про мене</Link>
              </li>
              <li
                className={
                  "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#services"}>Послуги</Link>
              </li>
              <li
                className={
                  "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#guide"}>Гайд</Link>
              </li>
              <li
                className={
                  "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#telegram"}>Телеграм</Link>
              </li>
              <li
                className={
                  "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#reviews"}>Відгуки</Link>
              </li>
              <li
                className={
                  "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                }>
                <Link href={"#contacts"}>Контакти</Link>
              </li>
            </ul>
          </nav>

          <div
            className={clsx(
              "fixed bottom-0 right-0 top-0 z-[100] min-h-screen min-w-[200px] bg-mainBrown-900 p-4 pt-14 shadow-[0_0_10px_#170F00] transition-transform",
              {
                "translate-x-full": !menuIsOpen,
              },
            )}>
            <ButtonBase
              className={{
                button:
                  "absolute right-3 top-4 appearance-none text-white transition-all duration-200 hover:text-mainYellow-500 lg:hidden",
              }}
              title={"Close mobile menu"}
              onClick={() => setMenuIsOpen(false)}>
              <CrissCross className={"h-7 w-7"} />
            </ButtonBase>

            <nav className={"text-2xl"}>
              <ul className={"flex flex-col items-start gap-y-4"}>
                <li
                  className={
                    "relative transition-all duration-200  after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#about"} onClick={() => setMenuIsOpen(false)}>
                    Про мене
                  </Link>
                </li>
                <li
                  className={
                    "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#services"} onClick={() => setMenuIsOpen(false)}>
                    Послуги
                  </Link>
                </li>
                <li
                  className={
                    "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#guide"}>Гайд</Link>
                </li>
                <li
                  className={
                    "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#telegram"}>Телеграм</Link>
                </li>

                <li
                  className={
                    "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#reviews"} onClick={() => setMenuIsOpen(false)}>
                    Відгуки
                  </Link>
                </li>
                <li
                  className={
                    "relative transition-all duration-200 after:absolute after:block after:h-[2px] after:w-full after:scale-x-0 after:rounded after:bg-mainYellow-500 after:transition-all after:delay-100 after:duration-200 hover:text-mainYellow-500 hover:after:scale-x-100"
                  }>
                  <Link href={"#contacts"} onClick={() => setMenuIsOpen(false)}>
                    Контакти
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <ButtonBase
            type={"button"}
            className={{
              button: "block appearance-none lg:hidden",
            }}
            onClick={() => setMenuIsOpen(true)}
            title={"Open mobile menu"}>
            <Burger
              className={
                "h-8 w-8 stroke-2 text-white transition-all duration-200 hover:text-mainYellow-500"
              }
            />
          </ButtonBase>
        </div>
      </Container>
    </header>
  );
}

export default Header;
