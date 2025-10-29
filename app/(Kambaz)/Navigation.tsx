"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid }, // navigates to Dashboard
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 110 }}
      id="wd-kambaz-navigation"
    >
      {/* Northeastern Logo */}
      <ListGroupItem
        className="bg-black border-0 text-center"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/logo.png" width="70" alt="Northeastern Logo" />
      </ListGroupItem>

      {/* Account */}
      <ListGroupItem
        as={Link}
        href="/Account"
        className={`text-center border-0 ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>

      {/* Dynamic Links */}
      {links.map((link) => {
        const Icon = link.icon;

        // Determine active state
        let bgClass = "bg-black"; // default background black
        let textClass = "text-white"; // default text white

        if (link.label === "Dashboard") {
          if (pathname === "/Dashboard") {
            bgClass = "bg-white";
            textClass = "text-danger";
          }
        } else if (link.label === "Courses") {
          if (pathname.startsWith("/Courses")) {
            // only change text color, keep background black
            textClass = "text-danger";
          }
        } else {
          if (pathname.startsWith(link.path)) {
            bgClass = "bg-white";
            textClass = "text-danger";
          }
        }

        return (
          <ListGroupItem
            key={link.label}
            as={Link}
            href={link.path}
            className={`text-center border-0 ${bgClass} ${textClass}`}
          >
            <Icon className={`fs-1 ${textClass}`} />
            <br />
            {link.label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
