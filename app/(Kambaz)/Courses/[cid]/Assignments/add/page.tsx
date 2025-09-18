"use client";
import Link from "next/link";

export default function AddAssignment() {
  return (
    <div
      id="wd-add-assignment"
      className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-2xl"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          ➕ Add New Assignment
        </h2>
        <Link href="/Courses/1234/Assignments">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Back to Assignments
          </span>
        </Link>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Title */}
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="title"
          >
            Assignment Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="e.g. Project 1: React Components"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Due Date */}
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="dueDate"
          >
            Due Date
          </label>
          <input
            id="dueDate"
            type="datetime-local"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Points */}
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="points"
          >
            Points
          </label>
          <input
            id="points"
            type="number"
            placeholder="e.g. 100"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Available From */}
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="availableFrom"
          >
            Available From
          </label>
          <input
            id="availableFrom"
            type="date"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label
            className="block mb-1 font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Enter assignment instructions..."
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <Link href="/Courses/1234/Assignments">
            <button
              type="button"
              className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Assignment
          </button>
        </div>
      </form>
    </div>
  );
}
