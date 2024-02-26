"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10   inset-x-0 max-w-2xl mx-auto z-50 w-[80vw] md:w-auto", className)}
        >
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">

                    </MenuItem>
                </Link>
                <Link href={'/courses'}>
                    <MenuItem setActive={setActive} active={active} item="Our Courses">
                        <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">React</HoveredLink>
                        <HoveredLink href="/web-dev">Next.js</HoveredLink>
                        </div>

                    </MenuItem>
                </Link>
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact us">
                        <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">All Courses</HoveredLink>
                        <HoveredLink href="/web-dev">React</HoveredLink>
                        <HoveredLink href="/web-dev">Next.js</HoveredLink>
                        </div>

                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
export default Navbar