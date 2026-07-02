"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import GitHubButton from "./GitHubButton";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-[#0B0B0F]/90
            backdrop-blur-2xl
            shadow-[0_10px_40px_rgba(0,0,0,.45)]
            transition-all
            duration-300
          "
        >
          <div className="flex h-[72px] items-center justify-between px-6">
            <Logo />

            <DesktopNav />

            <GitHubButton />
          </div>
        </div>
      </div>
    </header>
  );
}