'use client'
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;
    const role = user?.publicMetadata.role;
    if (role === "admin") {
      router.replace("/dashboard");
    } else {
      router.replace("/home");
    }
  }, [isLoaded, user, router]);
  return <p>Redirecting...</p>;
};

export default page;
