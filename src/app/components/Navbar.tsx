"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { COURCES } from "@/config";

function Navbar() {
  return (
    <section className="w-full sticky top-0 max-container padding-container z-50 flex justify-between items-center py-3 blur-bg">
      <div className="w-full">
        <Link href={"/"}>
        <Image src={"/logo.webp"} alt="logo" height={100} width={100} />
        </Link>
      </div>
      <div className="flex lg:gap-5 gap-3 items-center mr-5 lg:text-[1.2rem]">
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-normal lg:text-[1.2rem]  px-4 lg:px-8">Cources</NavigationMenuTrigger>
              <NavigationMenuContent className=" w-[200px] md:w-[200px] lg:w-[250px] ">
                <NavigationMenuLink>
                    {COURCES.map((course)=>(
                        <Link href={course.href} key={course.label} className="font-medium text-sm py-2 px-3 block hover:bg-blue-100">
                            {course.label}
                        </Link>
                    ))}
                  
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href={"/"} className=" tracking-wide">
          Home
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
