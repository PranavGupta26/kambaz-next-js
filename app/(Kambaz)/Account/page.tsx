"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  // Use `any` if RootState type is unavailable
  const currentUser = useSelector((state: any) => state.accountReducer?.currentUser);
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
