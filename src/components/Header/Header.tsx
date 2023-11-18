"use client";

import { ButtonBase, Container } from "@/common/ui";
import Logo from "../../common/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import Burger from "./static/Burger";
import CrissCross from "./static/Criss-cross";
function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector("body");
        if (!body) return;
        body.style.overflow = menuIsOpen ? "hidden" : "";
    }, [menuIsOpen]);

    return (
        <header className="fixed z-50 w-full bg-mainBrown-900/30 backdrop-blur-[8px] text-white py-4 md:py-6 overflow-visible">
            <Container>
                <div className="flex justify-between items-center gap-4">
                    <Link href={"/"} className="md:pl-7">
                        <Logo />
                    </Link>
                    <nav className="hidden md:block md:pr-10">
                        <ul className="flex items-center justify-center gap-x-10 flex-wrap">
                            <li className="hover:text-mainYellow-500 duration-200 transition-all  after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                <Link href="#about">Про мене</Link>
                            </li>
                            <li className="hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                <Link href="#services">Послуги</Link>
                            </li>
                            <li className="hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                <Link href="#reviews">Відгуки</Link>
                            </li>
                            <li className="hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                <Link href="#contacts">Контакти</Link>
                            </li>
                        </ul>
                    </nav>

                    <div
                        className={clsx(
                            "fixed bottom-0 right-0 top-0 z-[100] min-w-[200px] min-h-screen bg-mainBrown-900 p-4 pt-14 shadow-[0_0_10px_#170F00] transition-transform",
                            {
                                "translate-x-full": !menuIsOpen,
                            }
                        )}>
                        <ButtonBase
                            className={{
                                button: "absolute right-3 top-4 appearance-none md:hidden text-white hover:text-mainYellow-500 duration-200 transition-all",
                            }}
                            title={"Close mobile menu"}
                            onClick={() => setMenuIsOpen(false)}>
                            <CrissCross className={"h-7 w-7"} />
                        </ButtonBase>

                        <nav className="text-2xl">
                            <ul className={"flex flex-col gap-y-4 items-start"}>
                                <li className="hover:text-mainYellow-500 duration-200 transition-all  after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                    <Link href="#about" onClick={() => setMenuIsOpen(false)}>Про мене</Link>
                                </li>
                                <li className="hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                    <Link href="#services" onClick={() => setMenuIsOpen(false)}>Послуги</Link>
                                </li>
                                <li className=" hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                    <Link href="#reviews" onClick={() => setMenuIsOpen(false)}>Відгуки</Link>
                                </li>
                                <li className=" hover:text-mainYellow-500 duration-200 transition-all after:transition-all after:duration-200 after:delay-100 relative after:block after:absolute after:h-[2px] after:bg-mainYellow-500 after:w-full after:rounded after:scale-x-0 hover:after:scale-x-100">
                                    <Link href="#contacts" onClick={() => setMenuIsOpen(false)}>Контакти</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <ButtonBase
                        type={"button"}
                        className={{
                            button: "block appearance-none md:hidden",
                        }}
                        onClick={() => setMenuIsOpen(true)}
                        title={"Open mobile menu"}>
                        <Burger className={"h-8 w-8 stroke-2 text-white hover:text-mainYellow-500 duration-200 transition-all"} />
                    </ButtonBase>
                </div>
            </Container>
        </header>
    );
}

export default Header;
