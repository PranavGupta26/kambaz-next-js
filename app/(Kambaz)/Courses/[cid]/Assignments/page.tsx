import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
      <button id="wd-add-assignment-group">+ Group</button>

      {/* Add Assignment navigation */}
      <Link href="/Courses/1234/Assignments/Add">
        <button id="wd-add-assignment">+ Assignment</button>
      </Link>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/124"
            className="wd-assignment-link"
          >
            A2 - CSS
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/125"
            className="wd-assignment-link"
          >
            A3 - JavaScript
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/126"
            className="wd-assignment-link"
          >
            A4 - React
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/127"
            className="wd-assignment-link"
          >
            A5 - Node.js
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/128"
            className="wd-assignment-link"
          >
            A6 - MongoDB
          </Link>
        </li>
      </ul>
    </div>
  );
}
