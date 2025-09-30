"use client";

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="mb-4">Sign up</h3>
      <Form>
        <Form.Group className="mb-3" controlId="signupUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            className="form-control"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signupPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="verifyPassword">
          <Form.Control
            type="password"
            placeholder="Verify password"
            className="form-control"
          />
        </Form.Group>

        <Link href="/Account/Profile" passHref>
          <Button className="w-100 mb-2" variant="primary">
            Sign up
          </Button>
        </Link>

        <Link href="/Account/Signin" passHref>
          <Button className="w-100" variant="outline-secondary">
            Sign in
          </Button>
        </Link>
      </Form>
    </div>
  );
}
