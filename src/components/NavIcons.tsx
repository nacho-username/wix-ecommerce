"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt="Profile Icon"
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-8 left-0 text-sm shadow-xl z-20">
          <Link href="/" className="hover:text-red-300">
            Profile
          </Link>
          <div className="mt-2 cursor-pointer hover:text-red-300">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="Notification Icon"
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt="Cart Icon"
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center">
          2
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
};

export default NavIcons;
