"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// Define a type for your user object
type User = {
  username: string;
  password?: string;
  [key: string]: any; // for other possible fields
};

// Define a type for the slice of state your component uses
interface AccountState {
  currentUser?: User | null;
}

export default function AccountPage() {
  // Use typed selector instead of `any`
  const currentUser = useSelector(
    (state: { accountReducer: AccountState }) => state.accountReducer?.currentUser
  );

  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    } else {
      router.push(`/Account/Profile/${currentUser.username}`);
    }
  }, [currentUser, router]);

  return null;
}
