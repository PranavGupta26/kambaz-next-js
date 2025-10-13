import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb"; // ✅ Import breadcrumb
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";

export default async function CoursesLayout(
  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>
) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses" className="p-3">
      {/* ===== Header Section ===== */}
      <div className="d-flex align-items-center mb-2 border-bottom pb-2">
        <FaAlignJustify className="me-3 fs-4 text-danger" />
        <h2 className="text-danger mb-0">
          {course?.name || "Course"} ({cid})
        </h2>
      </div>

      {/* ✅ Add Breadcrumb right below the course title */}
      <div className="text-muted mb-3">
        <Breadcrumb course={course} />
      </div>

      {/* ===== Main Layout: Sidebar + Page Content ===== */}
      <div className="d-flex">
        <div className="d-none d-md-block me-3">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}
