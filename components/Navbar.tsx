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

const Navbar = () => {
  const { user } = useUser();
  console.log(user?.publicMetadata.role)
  return (
    <header className='flex justify-between items-center  h-8 mt-2 mb-4'>
      <div>
        <Link
          href={user?.publicMetadata.role ==='admin' ? "/dashboard" : user ? "/home" : "/"}
          className='text-2xl font-semibold'
        >
          Novan
        </Link>
      </div>
      <div className='flex items-center'>
        <SignedOut>
          <SignInButton forceRedirectUrl='/redirect' />
          <SignUpButton forceRedirectUrl='/redirect'>
            <button className=''>Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Button variant={"ghost"} className='mr-2'>
            <ShoppingCart />
            Cart
          </Button>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
