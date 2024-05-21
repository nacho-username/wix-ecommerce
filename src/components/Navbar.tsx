import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 relative">
      {/* MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">WIX eCommerce</div>
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center  gap-3">
            <Image src="/logo.png" width={24} height={24} alt="Logo" />
            <div className="text-2xl tracking-wide">WIX</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
