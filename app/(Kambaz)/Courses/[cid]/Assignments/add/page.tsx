"use client";

import Link from "next/link";

export default function AddAssignment() {
  return (
    <div
      id="wd-add-assignment"
      className="max-w-2xl mx-auto p-4 bg-white shadow rounded-3"
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 fw-bold text-dark">➕ Add New Assignment</h2>
        <Link href="/Courses/1234/Assignments" passHref>
          <a className="text-primary text-decoration-underline">Back to Assignments</a>
        </Link>
      </div>

      {/* Form */}
      <form>
        {/* Assignment Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Assignment Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Project 1: React Components"
            className="form-control"
          />
        </div>

        {/* Due Date */}
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input id="dueDate" type="datetime-local" className="form-control" />
        </div>

        {/* Use Bootstrap Grid for the following fields: Points, Assignment Group, Display Grade as, Submission Type, Assign */}
        <div className="row g-3 mb-3">
          {/* Points */}
          <div className="col-md-4">
            <label htmlFor="points" className="form-label">
              Points
            </label>
            <input
              id="points"
              type="number"
              placeholder="e.g. 100"
              className="form-control"
            />
          </div>

          {/* Assignment Group */}
          <div className="col-md-8">
            <label htmlFor="assignmentGroup" className="form-label">
              Assignment Group
            </label>
            <select id="assignmentGroup" className="form-select">
              <option value="">Select Group</option>
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
          </div>
        </div>

        <div className="row g-3 mb-3">
          {/* Display Grade as */}
          <div className="col-md-6">
            <label htmlFor="displayGradeAs" className="form-label">
              Display Grade as
            </label>
            <select id="displayGradeAs" className="form-select">
              <option value="">Select Option</option>
              <option>Points</option>
              <option>Percentage</option>
              <option>Letter Grade</option>
            </select>
          </div>

          {/* Submission Type */}
          <div className="col-md-6">
            <label htmlFor="submissionType" className="form-label">
              Submission Type
            </label>
            <select id="submissionType" className="form-select">
              <option value="">Select Type</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>
          </div>
        </div>

        {/* Assign */}
        <div className="mb-3">
          <label htmlFor="assign" className="form-label">
            Assign
          </label>
          <select id="assign" className="form-select">
            <option value="">Select User(s)</option>
            <option>All Students</option>
            <option>Group 1</option>
            <option>Group 2</option>
          </select>
        </div>

        {/* Available From */}
        <div className="mb-3">
          <label htmlFor="availableFrom" className="form-label">
            Available From
          </label>
          <input id="availableFrom" type="date" className="form-control" />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Enter assignment instructions..."
            className="form-control"
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-3 pt-3">
          <Link href="/Courses/1234/Assignments" passHref>
            <button
              type="button"
              className="btn btn-outline-secondary"
            >
              Cancel
            </button>
          </Link>
          <button type="submit" className="btn btn-primary">
            Save Assignment
          </button>
        </div>
      </form>
    </div>
  );
}
