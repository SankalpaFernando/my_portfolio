/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const DancingScript = Dancing_Script({ subsets: ["latin"], preload: true });

export default () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40  top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row justify-center items-center">
        <div className="flex items-center justify-center mt-10">
          <p
            className={`font-semibold text-3xl lg:text-5xl font-serif ${DancingScript.className}`}
          >
            Sankalpa Fernando
          </p>
        </div>
      </div>
    </header>
  );
};
