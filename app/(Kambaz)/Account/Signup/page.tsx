"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { usersnew } from "@/app/(Kambaz)/Database";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
    if (password !== verifyPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if user already exists
    const existingUser = usersnew.find((u) => u.username === username);
    if (existingUser) {
      alert("Username already taken");
      return;
    }

    // Create new user object (you can modify structure as needed)
    const newUser = {
      username,
      password,
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      role: "USER",
    };

    // Add to your local mock database
    usersnew.push(newUser);

    // Redirect to their profile page
    router.push(`/Account/Profile/${username}`);
  };

  return (
    <div id="wd-signup-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Sign up</h3>
      <Form>
        <Form.Group className="mb-3" controlId="signupUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="verifyPassword">
          <Form.Control
            type="password"
            placeholder="Verify password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className="form-control"
          />
        </Form.Group>

        <Button className="w-100 mb-2" variant="primary" onClick={handleSignup}>
          Sign up
        </Button>

        <Link href="/Account/Signin" passHref>
          <Button className="w-100" variant="outline-secondary">
            Sign in
          </Button>
        </Link>
      </Form>
    </div>
  );
}
