"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <header className="py-8 min-w-full mx-auto px-5 lg:px-32 absolute z-10 shadow-md ">
      <nav className="flex items-center justify-between">
        <Image
          alt="logo"
          src="/assets/images/header-logo.svg"
          width={130}
          height={30}
        />
        <div className="flex gap-x-2 cursor-pointer">
          <div className="md:flex items-center space-x-10 text-gray-500 text-lg hidden ">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Products</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">SignIn</Link>
          </div>
          {/* <GiHamburgerMenu size={25} className="flex md:hidden" /> */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu
                size={25}
                className="border-none flex md:hidden"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[30%]">
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Products</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>SignIn</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
