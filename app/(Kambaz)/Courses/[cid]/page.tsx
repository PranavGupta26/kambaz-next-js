// app/Courses/page.tsx
import { redirect } from "next/navigation";

export default function CoursesIndexPage() {
  // Redirect to default course (replace '1' with actual default)
  redirect("/Courses/1/Home");
}
