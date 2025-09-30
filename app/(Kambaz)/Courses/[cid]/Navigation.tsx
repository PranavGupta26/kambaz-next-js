'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';  // We'll use usePathname to highlight active link

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();

  // Define links dynamically
  const links = [
    { href: `/Courses/${cid}/Home`, label: 'Home', id: 'wd-course-home-link' },
    { href: `/Courses/${cid}/Modules`, label: 'Modules', id: 'wd-course-modules-link' },
    { href: `/Courses/${cid}/Piazza`, label: 'Piazza', id: 'wd-course-piazza-link' },
    { href: `/Courses/${cid}/Zoom`, label: 'Zoom', id: 'wd-course-zoom-link' },
    { href: `/Courses/${cid}/Assignments`, label: 'Assignments', id: 'wd-course-assignments-link' },
    { href: `/Courses/${cid}/Quizzes`, label: 'Quizzes', id: 'wd-course-quizzes-link' },
    { href: `/Courses/${cid}/Grades`, label: 'Grades', id: 'wd-course-grades-link' },
    { href: `/Courses/${cid}/People/Table`, label: 'People', id: 'wd-course-people-link' },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map(({ href, label, id }) => {
        // Determine if this link is active (matches current path)
        const isActive = pathname === href;

        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={`list-group-item border-0 ${isActive ? 'active' : 'text-danger'}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
