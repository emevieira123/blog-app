import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

export function HeaderMenu() {
  const router = useRouter();

  return (
    <div className="py-3 flex align-middle justify-center gap-6 border-b-1 border-gray-300">
      <Link
        href={"/"}
        className={
          `${router.pathname === '/'
            ? "bg-blue-500"
            : "bg-white border-1"} px-6 py-1 rounded-md hover:bg-blue-500`
        }
      >
        <span className={router.pathname === '/' ? "text-white" : "text-black"}>
          Posts
        </span>
      </Link>
      <Link
        href={"/admin"}
        className={
          `${router.pathname === '/admin' ? "bg-blue-500" : "bg-white border-1"} px-6 py-1 rounded-md`
        }
      >
        <span className={router.pathname === '/admin' ? "text-white" : "text-black"}>
          Admin
        </span>
      </Link>
    </div>
  );
}