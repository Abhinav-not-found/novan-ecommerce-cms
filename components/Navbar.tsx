"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className='flex justify-between items-center  h-8 mt-2 mb-4'>
      <div>
        <Link href={"/"} className='text-2xl font-semibold'>
          Novan
        </Link>
      </div>
      <div className='flex items-center'>
        <Button variant={"ghost"} className='mr-2'>
            <ShoppingCart />
            Cart
          </Button>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
