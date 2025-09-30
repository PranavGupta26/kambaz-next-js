"use client";

import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      {/* Optional: Developer Info at top */}
      <div className="mb-4">
        <h1 className="h4 fw-bold">Pranav Gupta</h1>
        <h2 className="h6 text-muted">CS5610</h2>
        <a
          href="https://github.com/PranavGupta26/kambaz-next-js"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-underline text-primary"
        >
          GitHub Repository
        </a>
      </div>

      {/* Sign in Form */}
      <h3 className="mb-3">Sign in</h3>

      <FormControl
        id="wd-username"
        placeholder="Username"
        className="mb-3 form-control"
      />

      <FormControl
        id="wd-password"
        type="password"
        placeholder="Password"
        className="mb-3 form-control"
      />

      <Link
        id="wd-signin-btn"
        href="/Account/Profile"
        className="btn btn-primary w-100 mb-3"
      >
        Sign in
      </Link>

      <div className="text-center">
        <Link id="wd-signup-link" href="/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
