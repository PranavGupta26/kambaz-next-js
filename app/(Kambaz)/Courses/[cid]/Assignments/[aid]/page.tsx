"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function AddAssignment() {
  const submissionTypeRef = useRef<HTMLSelectElement>(null);

  // Default Dates
  const now = new Date();
  const defaultDueDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 1 week later
  const defaultAvailableFrom = new Date();
  const defaultAvailableUntil = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // 2 weeks later

  const formatDateTimeLocal = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const toggleOnlineOptions = () => {
    const onlineDiv = document.getElementById("online-options");
    if (!submissionTypeRef.current) return;
    if (onlineDiv) onlineDiv.hidden = submissionTypeRef.current.value !== "online-entry";
  };

  useEffect(() => {
    toggleOnlineOptions();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">➕ Add New Assignment</h2>
        <Link href="/Courses/1234/Assignments">
          <span className="text-blue-600 hover:underline cursor-pointer">Back to Assignments</span>
        </Link>
      </div>

      <form className="space-y-6">
        {/* Assignment Group */}
        <div className="flex flex-col">
          <label htmlFor="wd-group" className="font-medium text-gray-700 mb-1">
            Assignment Group
          </label>
          <select
            id="wd-group"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="" disabled>Select a group</option>
            <option value="group1">Group 1 – Basics</option>
            <option value="group2">Group 2 – Intermediate</option>
            <option value="group3">Group 3 – Advanced</option>
          </select>
        </div>

        {/* Assign To */}
        <div className="flex flex-col">
          <label htmlFor="wd-assignTo" className="font-medium text-gray-700 mb-1">Assign To</label>
          <input
            id="wd-assignTo"
            type="text"
            defaultValue="Default Group"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Assignment Name */}
        <div className="flex flex-col">
          <label htmlFor="wd-name" className="font-medium text-gray-700 mb-1">Assignment Name</label>
          <input
            id="wd-name"
            type="text"
            placeholder="e.g. A1 - ENV + HTML"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="wd-description" className="font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="wd-description"
            rows={4}
            placeholder="Assignment instructions or description..."
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Submission Type Dropdown */}
        <div className="flex flex-col mt-4">
          <label htmlFor="wd-submissionType" className="font-medium text-gray-700 mb-1">Submission Type</label>
          <select
            id="wd-submissionType"
            ref={submissionTypeRef}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={toggleOnlineOptions}
          >
            <option value="" disabled>Select submission type</option>
            <option value="online-entry">Online Entry</option>
            <option value="no-submission">No Submission</option>
            <option value="on-paper">On Paper</option>
          </select>
        </div>

        {/* Conditional Online Entry Radio Buttons */}
        <div id="online-options" hidden className="flex flex-col mt-4">
          <label className="font-medium text-gray-700 mb-2">Online Submission Method</label>
          <div className="space-y-1">
            {["Text Entry", "File Upload", "Website URL", "External Tool"].map((type) => (
              <label key={type} className="inline-flex items-center space-x-2">
                <input type="radio" name="onlineDetail" value={type} className="form-radio" />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Points, Grade, Dates */}
        <table className="w-full border-collapse mt-2">
          <tbody>
            <tr className="border-b">
              <td className="pr-4 py-2 text-right font-medium">Points</td>
              <td className="py-2">
                <input
                  id="wd-points"
                  type="number"
                  defaultValue={100}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </td>
            </tr>

            <tr className="border-b">
              <td className="pr-4 py-2 text-right font-medium">Grade</td>
              <td className="py-2">
                <select
                  id="wd-grade"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="" disabled>Select grade</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </td>
            </tr>

            <tr className="border-b">
              <td className="pr-4 py-2 text-right font-medium">Due Date</td>
              <td className="py-2">
                <input
                  id="wd-dueDate"
                  type="datetime-local"
                  defaultValue={formatDateTimeLocal(defaultDueDate)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </td>
            </tr>

            <tr className="border-b">
              <td className="pr-4 py-2 text-right font-medium">Available From</td>
              <td className="py-2">
                <input
                  id="wd-availableFrom"
                  type="date"
                  defaultValue={formatDateTimeLocal(defaultAvailableFrom).slice(0, 10)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </td>
            </tr>

            <tr className="border-b">
              <td className="pr-4 py-2 text-right font-medium">Available Until</td>
              <td className="py-2">
                <input
                  id="wd-availableUntil"
                  type="date"
                  defaultValue={formatDateTimeLocal(defaultAvailableUntil).slice(0, 10)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <Link href="/Courses/1234/Assignments">
            <button type="button" className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Cancel
            </button>
          </Link>
          <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Assignment
          </button>
        </div>
      </form>
    </div>
  );
}
