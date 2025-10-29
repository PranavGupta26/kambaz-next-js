'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function CourseNavigation() {
  const params = useParams();
  const pathname = usePathname();

  const cid = params?.cid ?? "1"; // fallback to a default course id

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((label) => {
        const route = label === "People"
          ? `/Courses/${cid}/${label}/Table`
          : `/Courses/${cid}/${label}`;

        const isActive = pathname === route;

        return (
          <Link
            key={label}
            href={route}
            id={`wd-course-${label.toLowerCase()}-link`}
            className={`list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
