"use client";

import { usePathname } from "next/navigation";

export function useChatContext() {
  const pathname = usePathname();

  // Dashboard context
  if (pathname === "/dashboard") {
    return { page: "dashboard", id: null };
  }

  // Customer page context → /customers/[id]
  if (pathname?.startsWith("/customers/")) {
    const id = pathname.split("/")[2];
    return { page: "customer", id };
  }

  // Default
  return { page: "unknown", id: null };
}
