"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormControl } from "react-bootstrap";
import { usersnew } from "@/app/(Kambaz)/Database";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignin = () => {
    // Simple check (optional, can be replaced with real auth later)
    const user = usersnew.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // ✅ Redirect to the correct profile URL using username
      router.push(`/Account/Profile/${user.username}`);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
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

      <h3 className="mb-3">Sign in</h3>

      <FormControl
        id="wd-username"
        placeholder="Username"
        className="mb-3 form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <FormControl
        id="wd-password"
        type="password"
        placeholder="Password"
        className="mb-3 form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        id="wd-signin-btn"
        onClick={handleSignin}
        className="btn btn-primary w-100 mb-3"
      >
        Sign in
      </button>

      <div className="text-center">
        <a id="wd-signup-link" href="/Account/Signup">
          Sign up
        </a>
      </div>
    </div>
  );
}
