"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathName = usePathname();

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-0">
      {links.map((link) => (
        <>
          <Link
            href={link}
            className={`list-group-item ${
              pathName.endsWith(link) ? "active" : "text-danger"
            }  border-0`}
          >
            {link}
          </Link>
          <br />
        </>
      ))}
    </div>
  );
}
