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
import { useParams } from "next/navigation";

import ModuleControlButtons from "../Modules/ModuleControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { assignments } from "../../../Database"; // ✅ correct import

export default function Assignments() {
  const { cid } = useParams(); // ✅ dynamically get course ID from URL

  // ✅ Filter assignments that belong to the current course
  const courseAssignments = assignments.filter(a => a.course === cid);

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
          {/* ✅ Dynamic Add Assignment link */}
          <Link href={`/Courses/${cid}/Assignments/Add`}>
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
            <ModuleControlButtons moduleId={""} deleteModule={function (moduleId: string): void {
              throw new Error("Function not implemented.");
            } } editModule={function (moduleId: string): void {
              throw new Error("Function not implemented.");
            } } />
          </div>
        </div>

        {/* ✅ Assignment Items */}
        <ListGroup className="rounded-0">
          {courseAssignments.map((assignment, idx) => (
            <ListGroupItem
              key={assignment._id} // ✅ use _id instead of id
              className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom border-gray"
              style={{
                borderLeft: "4px solid green", // only left border green
                borderTop: idx === 0 ? "none" : undefined,
              }}
            >
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center mb-1">
                  <FaFileAlt className="me-2 text-secondary" />
                  {/* ✅ Construct the link dynamically using course + assignment IDs */}
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
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
