"use client";

import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as db from "../../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) {
      alert("Invalid username or password");
      return;
    }

    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      {/* ✅ Header Section */}
      <div className="mb-4 text-center">
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

      {/* ✅ Signin Form */}
      <h3 className="mb-3 text-center">Sign in</h3>

      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-3 form-control"
        placeholder="Username"
        id="wd-username"
      />

      <FormControl
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-3 form-control"
        placeholder="Password"
        type="password"
        id="wd-password"
      />

      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100 mb-3"
      >
        Sign in
      </Button>

      <div className="text-center">
        <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
