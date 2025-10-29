"use client";

import Link from "next/link";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  
  const username = "alice"; // could be dynamic in the future

  return (
    <div id="wd-account-navigation" className="container mt-4">
      <h5 className="mb-3">Account Navigation</h5>
      <div className="d-flex flex-column gap-2">
        <Link href="/Account/Signin" passHref>
          <Button variant="primary" className="w-100">Signin</Button>
        </Link>
        <Link href="/Account/Signup" passHref>
          <Button variant="secondary" className="w-100">Signup</Button>
        </Link>
        <Link href={`/Account/Profile/${username}`} passHref>
          <Button variant="outline-dark" className="w-100">Profile</Button>
        </Link>
      </div>
    </div>
  );
}
