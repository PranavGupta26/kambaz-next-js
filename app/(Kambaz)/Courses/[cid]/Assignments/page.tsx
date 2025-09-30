"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import {
  FaChevronDown,
  FaPlus,
  FaSearch,
  FaFileAlt,
} from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

import ModuleControlButtons from "../Modules/ModuleControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";

const assignments = [
  {
    id: 123,
    title: "A1 - ENV + HTML",
    available: "May 6 at 12:00am",
    due: "May 13 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/123",
  },
  {
    id: 124,
    title: "A2 - CSS",
    available: "May 13 at 12:00am",
    due: "May 20 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/124",
  },
  {
    id: 125,
    title: "A3 - JavaScript",
    available: "May 20 at 12:00am",
    due: "May 27 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/125",
  },
  {
    id: 126,
    title: "A4 - React Basics",
    available: "Jun 1 at 12:00am",
    due: "Jun 7 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/126",
  },
  {
    id: 127,
    title: "A5 - State Management",
    available: "Jun 8 at 12:00am",
    due: "Jun 14 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/127",
  },
  {
    id: 128,
    title: "A6 - APIs & Fetch",
    available: "Jun 15 at 12:00am",
    due: "Jun 21 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/128",
  },
  {
    id: 129,
    title: "A7 - Deployment",
    available: "Jun 22 at 12:00am",
    due: "Jun 28 at 11:59pm",
    points: 100,
    link: "/Courses/1234/Assignments/129",
  },
];

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-4">
      {/* Search bar and buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search input with icon */}
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search for Assignments"
            style={{ boxShadow: "none" }}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button className="btn btn-light border">+ Group</button>
          <Link href="/Courses/1234/Assignments/Add">
            <button className="btn btn-danger">+ Assignment</button>
          </Link>
        </div>
      </div>

      {/* Assignment Group */}
      <div className="border rounded bg-light">
        {/* Header */}
        <div className="px-3 py-2 d-flex justify-content-between align-items-center border-bottom">
          <div className="d-flex align-items-center fw-bold text-dark">
            <FaChevronDown className="me-2" />
            ASSIGNMENTS
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">40% of Total</span>
            <FaPlus className="text-dark" />
            <ModuleControlButtons />
          </div>
        </div>

        {/* Assignment Items */}
        <ListGroup className="rounded-0">
          {assignments.map((assignment, idx) => (
            <ListGroupItem
              key={assignment.id}
              className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom border-gray"
              style={{
                borderLeft: "4px solid green", // only left border green
                borderTop: idx === 0 ? "none" : undefined,
              }}
            >
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-1">
                  <FaFileAlt className="me-2 text-secondary" />
                  <Link
                    href={assignment.link}
                    className="fw-bold text-dark text-decoration-none"
                  >
                    {assignment.title.split(" - ")[0]}
                  </Link>
                </div>
                <span className="text-danger small">Multiple Modules</span>
                <span className="text-muted small">
                  Not available until <strong>{assignment.available}</strong>
                </span>
                <span className="text-muted small">
                  Due <strong>{assignment.due}</strong> | {assignment.points} pts
                </span>
              </div>

              {/* Right-side icons */}
              <div className="d-flex align-items-center gap-3">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4 text-dark" />
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
