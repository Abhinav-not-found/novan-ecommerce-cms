"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/services/auth.service";

const Navbar = () => {
  const router = useRouter();
  const [token,setToken]=useState<string | null>(null);
  useEffect(() =>{
      setToken(localStorage.getItem('token'))
  }, [])
  return (
    <header className='flex justify-between items-center  h-8 mt-2 mb-4'>
      <div>
        <Link href={"/"} className='text-2xl font-semibold'>
          Novan
        </Link>
      </div>
      <div className='flex items-center'>
        {token ? (
          <div>
            <Button variant={"ghost"} className='mr-2'>
              <ShoppingCart />
              Cart
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        ) : (
          <Button onClick={() => router.push("/login")}>Login</Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
