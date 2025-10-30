"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { useRef, useEffect, useState } from "react";

// Define a proper type for assignments
interface Assignment {
  _id: string;
  title: string;
  description: string;
  assignTo?: string;
  points: number;
  grade?: string;
  dueDate: string;
  availableFrom: string;
  availableUntil: string;
  module: string;
  submissionType: "online-entry" | "no-submission" | "on-paper" | "";
  onlineDetail?: string;
}

export default function EditAssignment() {
  const router = useRouter();
  const { cid, id } = useParams() as { cid: string; id: string };
  const submissionTypeRef = useRef<HTMLSelectElement>(null);
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const stored: Assignment[] = JSON.parse(localStorage.getItem("assignments") || "[]");
    const found = stored.find(a => a._id === id);
    if (!found) return;
    setAssignment(found);
  }, [id]);

  const toggleOnlineOptions = () => {
    const onlineDiv = document.getElementById("online-options");
    if (!submissionTypeRef.current || !onlineDiv) return;
    onlineDiv.hidden = submissionTypeRef.current.value !== "online-entry";
  };

  useEffect(() => {
    if (assignment) toggleOnlineOptions();
  }, [assignment]);

  const formatDateTimeLocal = (d: string | Date) => {
    const date = new Date(d);
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assignment) return;

    const stored: Assignment[] = JSON.parse(localStorage.getItem("assignments") || "[]");
    const updated = stored.map(a => {
      if (a._id !== id) return a;

      const onlineDetailInput = document.querySelector<HTMLInputElement>('input[name="onlineDetail"]:checked');

      return {
        ...a,
        title: (document.getElementById("wd-name") as HTMLInputElement).value,
        description: (document.getElementById("wd-description") as HTMLTextAreaElement).value,
        assignTo: (document.getElementById("wd-assignTo") as HTMLInputElement).value,
        points: parseInt((document.getElementById("wd-points") as HTMLInputElement).value),
        grade: (document.getElementById("wd-grade") as HTMLSelectElement).value,
        dueDate: (document.getElementById("wd-dueDate") as HTMLInputElement).value,
        availableFrom: (document.getElementById("wd-availableFrom") as HTMLInputElement).value,
        availableUntil: (document.getElementById("wd-availableUntil") as HTMLInputElement).value,
        module: (document.getElementById("wd-group") as HTMLSelectElement).value,
        submissionType: (document.getElementById("wd-submissionType") as HTMLSelectElement).value as Assignment["submissionType"],
        onlineDetail: onlineDetailInput?.value || "",
      };
    });

    localStorage.setItem("assignments", JSON.stringify(updated));
    router.push(`/Courses/${cid}/Assignments`);
  };

  if (!assignment) return <div className="p-6">Loading assignment...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">✏️ Edit Assignment</h2>
        <Link href={`/Courses/${cid}/Assignments`}>
          <span className="text-blue-600 hover:underline cursor-pointer">Back to Assignments</span>
        </Link>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Assignment Group */}
        <div className="flex flex-col">
          <label htmlFor="wd-group" className="font-medium text-gray-700 mb-1">Assignment Group</label>
          <select
            id="wd-group"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue={assignment.module}
          >
            <option value="" disabled>Select a group</option>
            <option value="Group 1 – Basics">Group 1 – Basics</option>
            <option value="Group 2 – Intermediate">Group 2 – Intermediate</option>
            <option value="Group 3 – Advanced">Group 3 – Advanced</option>
          </select>
        </div>

        {/* Assign To */}
        <div className="flex flex-col">
          <label htmlFor="wd-assignTo" className="font-medium text-gray-700 mb-1">Assign To</label>
          <input
            id="wd-assignTo"
            type="text"
            defaultValue={assignment.assignTo || "Default Group"}
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
            defaultValue={assignment.title}
            required
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
            defaultValue={assignment.description}
          />
        </div>

        {/* Submission Type */}
        <div className="flex flex-col mt-4">
          <label htmlFor="wd-submissionType" className="font-medium text-gray-700 mb-1">Submission Type</label>
          <select
            id="wd-submissionType"
            ref={submissionTypeRef}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={toggleOnlineOptions}
            defaultValue={assignment.submissionType}
          >
            <option value="" disabled>Select submission type</option>
            <option value="online-entry">Online Entry</option>
            <option value="no-submission">No Submission</option>
            <option value="on-paper">On Paper</option>
          </select>
        </div>

        {/* Conditional Online Entry */}
        <div id="online-options" className="flex flex-col mt-4" hidden>
          <label className="font-medium text-gray-700 mb-2">Online Submission Method</label>
          <div className="space-y-1">
            {["Text Entry", "File Upload", "Website URL", "External Tool"].map((type) => (
              <label key={type} className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="onlineDetail"
                  value={type}
                  className="form-radio"
                  defaultChecked={assignment.onlineDetail === type}
                />
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
                  defaultValue={assignment.points}
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
                  defaultValue={assignment.grade || ""}
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
                  defaultValue={formatDateTimeLocal(assignment.dueDate)}
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
                  defaultValue={assignment.availableFrom}
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
                  defaultValue={assignment.availableUntil}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 pt-4">
          <Link href={`/Courses/${cid}/Assignments`}>
            <button type="button" className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Cancel
            </button>
          </Link>
          <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
