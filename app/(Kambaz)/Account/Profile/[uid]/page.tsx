"use client";

import { usersnew } from "@/app/(Kambaz)/Database";
import { useParams } from "next/navigation";
import { FormControl, FormSelect } from "react-bootstrap";

export default function ProfilePage() {
  const params = useParams();
  const uid = Array.isArray(params.uid) ? params.uid[0] : params.uid;
  const user = usersnew.find((u) => u.username === uid);

  if (!user) {
    return (
      <div className="container mt-5 text-danger">
        <h3>User not found</h3>
      </div>
    );
  }

  return (
    <div id="wd-profile-screen" className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="mb-4">Profile</h3>

      <FormControl
        defaultValue={user.username}
        placeholder="Username"
        className="mb-3 form-control"
      />
      <FormControl
        defaultValue={user.password}
        type="password"
        placeholder="Password"
        className="mb-3 form-control"
      />
      <FormControl
        defaultValue={user.firstName}
        placeholder="First Name"
        className="mb-3 form-control"
      />
      <FormControl
        defaultValue={user.lastName}
        placeholder="Last Name"
        className="mb-3 form-control"
      />
      <FormControl
        defaultValue={user.dob?.slice(0, 10)}
        type="date"
        className="mb-3 form-control"
      />
      <FormControl
        defaultValue={user.email}
        type="email"
        placeholder="Email"
        className="mb-3 form-control"
      />

      <FormSelect defaultValue={user.role} className="mb-3 form-control">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
    </div>
  );
}
