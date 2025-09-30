"use client";

import Link from "next/link";
import { FormControl, FormSelect } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Profile</h3>

      <FormControl
        defaultValue="alice"
        placeholder="Username"
        className="mb-3 form-control"
        id="wd-username"
      />

      <FormControl
        defaultValue="123"
        type="password"
        placeholder="Password"
        className="mb-3 form-control"
        id="wd-password"
      />

      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-3 form-control"
        id="wd-firstname"
      />

      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-3 form-control"
        id="wd-lastname"
      />

      <FormControl
        defaultValue="2000-01-01"
        type="date"
        className="mb-3 form-control"
        id="wd-dob"
      />

      <FormControl
        defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="mb-3 form-control"
        id="wd-email"
      />

      <FormSelect
        defaultValue="FACULTY"
        className="mb-3 form-control"
        id="wd-role"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>

      <Link href="/Account/Signin" className="btn btn-outline-secondary w-100">
        Sign out
      </Link>
    </div>
  );
}
