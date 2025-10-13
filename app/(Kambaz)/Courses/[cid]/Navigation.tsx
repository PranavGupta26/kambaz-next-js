'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  // Array of link labels only
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((label) => {
        // For People, route goes to /People/Table
        const route = label === "People"
          ? `/Courses/${cid}/${label}/Table`
          : `/Courses/${cid}/${label}`;

        // Check if the current path matches this route
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
