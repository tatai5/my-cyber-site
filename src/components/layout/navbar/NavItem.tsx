"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export default function NavItem({
  label,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="
        group
        relative
        py-2
        text-sm
        font-medium
        transition-colors
        duration-300
      "
    >
      <span
        className={
          isActive
            ? "text-green-400"
            : "text-zinc-300 group-hover:text-green-400"
        }
      >
        {label}
      </span>

      <span
        className={`
          absolute
          -bottom-1
          left-0
          h-[2px]
          rounded-full
          bg-green-400
          transition-all
          duration-300
          ${isActive
            ? "w-full"
            : "w-0 group-hover:w-full"
          }
        `}
      />
    </Link>
  );
}