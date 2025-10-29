"use client";

import { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb"; // existing breadcrumb
import { FaAlignJustify } from "react-icons/fa6";

// Define a type for a course
interface Course {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description?: string;
  [key: string]: unknown; // safer than 'any'
}

// Define Redux slice state type
interface CoursesState {
  courses: Course[];
}

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();

  // Typed selector instead of 'any'
  const { courses } = useSelector(
    (state: { coursesReducer: CoursesState }) => state.coursesReducer
  );

  // Find the current course
  const course: Course | undefined = courses.find((c) => c._id === cid);

  // State to track sidebar visibility
  const [showSidebar, setShowSidebar] = useState(true);

  // Toggle function for sandwich icon
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div id="wd-courses" className="p-3">
      {/* ===== Header Section ===== */}
      <div className="d-flex align-items-center mb-2 border-bottom pb-2">
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

      {/* Breadcrumb */}
      <div className="text-muted mb-3">
        <Breadcrumb course={course} />
      </div>

      {/* Main layout */}
      <div className="d-flex">
        {showSidebar && (
          <div className="me-3">
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
