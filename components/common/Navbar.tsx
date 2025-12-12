"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
 
        <Link href="/" className="font-semibold text-lg">
          Instalily
        </Link>


        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm hover:underline">
            Dashboard
          </Link>

          {session?.user ? (
            <>
              <span className="text-sm text-gray-700">
                {session.user.name}
              </span>
              <button
                className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <button
              className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
