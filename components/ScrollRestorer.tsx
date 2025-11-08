// components/ScrollRestorer.tsx
"use client";
import { useEffect } from "react";

export default function ScrollRestorer({ id }: { id: string }) {
  useEffect(() => {
    const key = `scroll-${id}`;
    const saved = sessionStorage.getItem(key);
    if (saved) window.scrollTo(0, parseInt(saved));

    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return null;
}
