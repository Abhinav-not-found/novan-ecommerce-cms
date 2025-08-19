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

const Navbar = () => {
  const { user } = useUser();
  return (
    <header className='flex justify-between items-center '>
      <div>
        <h1 className='text-2xl font-semibold'>Novan</h1>
      </div>
      <div className="flex items-center">
        <SignedOut>
          <SignInButton forceRedirectUrl='/home' />
          <SignUpButton forceRedirectUrl='/home'>
            <button className=''>Sign Up</button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <Button className="ml-2">Cart</Button>
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
