"use client";

import Link from "next/link";
import Logo from "../../public/netflix_logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";

interface LinkProps {
  name: string;
  href: string;
}

const links: LinkProps[] = [
  {name: "Home", href: "/home"},
  {name: "TV Shows", href: "home/tv-shows"},
  {name: "Movies", href: "home/movies"},
  {name: "Recently added", href: "home/recently"},
  {name: "My List", href: "home/user/list"},  
];

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix logo" priority/>
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold underline text-white"
                  >
                    {link.name}
                  </Link>
                </li>

              ) : (
                <li>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-gray-300"
                  >
                    {link.name}
                  </Link>
                </li>
              )}
              
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
};
