import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import logo from "@public/Logo-color.png";
import Link from "next/link";

const Button = tw.button`px-6 py-2 rounded-3xl text-gray-50 text-xs transition-all ml-1`;
const Nav = tw.nav`flex items-center justify-between px-4 py-2 bg-black`;

const NavItems = [
  { name: "About", lk: "about" },
  { name: "How it Works", lk: "how-it-works" },
  { name: "Pricing", lk: "pricing" },
  { name: "Solution", lk: "solution" },
  { name: "Features", lk: "features" },
];

const renderNavItems = (item: { name: string; lk: string }, i) => {
  return (
    <Link key={i} href={item.lk}>
      <a className="text-sm text-neutral-50">{item.name}</a>
    </Link>
  );
};

const Header = () => {
  return (
    <Nav>
      <div className="flex-shrink-0 scale-75">
        <Image height={logo.height} width={logo.width} src={logo} alt="logo" />
      </div>
      <div className="items-center hidden space-x-3 md:flex">
        {NavItems.map((item, i) => renderNavItems(item, i))}
      </div>
      <div className="flex items-center">
        <Button className="hover:bg-button-hover">Login</Button>
        <Button className="bg-neutral-50 text-neutral-900">Register</Button>
      </div>
    </Nav>
  );
};

export default Header;
