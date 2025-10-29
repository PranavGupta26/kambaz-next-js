"use client";

import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb"; // ✅ existing breadcrumb
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const course = courses.find((course: any) => course._id === cid);

  // ✅ Add state to track sidebar visibility
  const [showSidebar, setShowSidebar] = useState(true);

  // ✅ Toggle function for the sandwich icon
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div id="wd-courses" className="p-3">
      {/* ===== Header Section ===== */}
      <div className="d-flex align-items-center mb-2 border-bottom pb-2">
        {/* ✅ Make sandwich icon clickable to toggle sidebar */}
        <FaAlignJustify
          className="me-3 fs-4 text-danger"
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
          title="Toggle course navigation"
        />
        <h2 className="text-danger mb-0">
          {course?.name || "Course"} ({cid})
        </h2>
      </div>

      {/* ✅ Breadcrumb below course title */}
      <div className="text-muted mb-3">
        <Breadcrumb course={course} />
      </div>

      {/* ===== Main Layout: Sidebar + Page Content ===== */}
      <div className="d-flex">
        {/* ✅ Conditionally render sidebar */}
        {showSidebar && (
          <div className="me-3">
            <CourseNavigation />
          </div>
        )}

        {/* ✅ Page content area */}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
