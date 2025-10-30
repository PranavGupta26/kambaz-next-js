"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaChevronDown, FaPlus, FaSearch, FaFileAlt, FaEdit, FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import ModuleControlButtons from "../Modules/ModuleControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();

  const [courseAssignments, setCourseAssignments] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("assignments") || "[]");
    setCourseAssignments(stored.filter((a: any) => a.course === cid));
  }, [cid]);

  const filteredAssignments = courseAssignments.filter(a =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (_id: string) => {
    if (!confirm("Are you sure you want to delete this assignment?")) return;

    const stored = JSON.parse(localStorage.getItem("assignments") || "[]");
    const updated = stored.filter((a: any) => a._id !== _id);
    localStorage.setItem("assignments", JSON.stringify(updated));
    setCourseAssignments(updated.filter((a: any) => a.course === cid));
  };

  return (
    <div id="wd-assignments" className="p-4">
      {/* Search bar and buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search for Assignments"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ boxShadow: "none" }}
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-light border">+ Group</button>
          <Link href={`/Courses/${cid}/Assignments/add`}>
            <button className="btn btn-danger">+ Assignment</button>
          </Link>
        </div>
      </div>

      {/* Assignment Group */}
      <div className="border rounded bg-light">
        <div className="px-3 py-2 d-flex justify-content-between align-items-center border-bottom">
          <div className="d-flex align-items-center fw-bold text-dark">
            <FaChevronDown className="me-2" />
            ASSIGNMENTS
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">40% of Total</span>
            <FaPlus className="text-dark" />
            <ModuleControlButtons
              moduleId={""}
              deleteModule={function (moduleId: string): void {
                throw new Error("Function not implemented.");
              }}
              editModule={function (moduleId: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>

        <ListGroup className="rounded-0">
          {filteredAssignments.map((assignment, idx) => (
            <ListGroupItem
              key={assignment._id} // ✅ Use _id consistently
              className="d-flex justify-content-between align-items-center px-3 py-3 border-bottom border-gray"
              style={{
                borderLeft: "4px solid green",
                borderTop: idx === 0 ? "none" : undefined,
              }}
            >
              <div className="d-flex flex-column">
                <div className="d-flex items-center mb-1 gap-2">
                  <FaFileAlt className="text-secondary" />
                  <Link
                    href={`/Courses/${cid}/Assignments/${assignment._id}`}
                    className="fw-bold text-dark text-decoration-none"
                  >
                    {assignment.title}
                  </Link>
                </div>
                <span className="text-danger small">{assignment.module}</span>
                <span className="text-muted small">
                  Not available until <strong>{assignment.availableFrom}</strong>
                </span>
                <span className="text-muted small">
                  Due <strong>{assignment.dueDate}</strong> | {assignment.points} pts
                </span>
              </div>

              <div className="d-flex align-items-center gap-2">
                {/* Edit button */}
                <button
                  onClick={() => router.push(`/Courses/${cid}/Assignments/Edit/${assignment._id}`)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(assignment._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition flex items-center gap-1"
                >
                  <FaTrash /> Delete
                </button>

                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4 text-dark" />
              </div>
            </ListGroupItem>
          ))}

          {filteredAssignments.length === 0 && (
            <div className="p-3 text-center text-muted">
              No assignments found.
            </div>
          )}
        </ListGroup>
      </div>
    </div>
  );
}
