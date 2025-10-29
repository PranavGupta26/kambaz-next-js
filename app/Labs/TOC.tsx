"use client";

import Link from "next/link";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <>
      {/* Regular unordered list navigation */}
      <ul>
        <li>
          <Link href="/Labs" id="wd-labs-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/Account/Signin" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>

      {/* Bootstrap Nav (pills style) */}
      <Nav variant="pills">
        <NavItem>
          <NavLink
            href="/Labs"
            as={Link}
            className={`nav-link ${pathname.endsWith("Labs") ? "active" : ""}`}
          >
            Labs
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            href="/Labs/Lab1"
            as={Link}
            className={`nav-link ${pathname.endsWith("Lab1") ? "active" : ""}`}
          >
            Lab 1
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            href="/Labs/Lab2"
            as={Link}
            className={`nav-link ${pathname.endsWith("Lab2") ? "active" : ""}`}
          >
            Lab 2
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            href="/Labs/Lab3"
            as={Link}
            className={`nav-link ${pathname.endsWith("Lab3") ? "active" : ""}`}
          >
            Lab 3
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            href="/Labs/Lab4"
            as={Link}
            className={`nav-link ${pathname.endsWith("Lab4") ? "active" : ""}`}
          >
            Lab 4
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/Account/Signin" as={Link}>
            Kambaz
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="https://github.com/jannunzi" target="_blank">
            My GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </>
  );
}
