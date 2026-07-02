import { navLinks } from "./NavLinks";
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavItem
              label={link.label}
              href={link.href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}