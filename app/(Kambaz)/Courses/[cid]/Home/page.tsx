"use client";

import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  const handleViewProgress = () => {
    console.log("Viewing progress...");
  };

  const handlePublishAll = () => {
    console.log("Publishing all modules...");
  };

  const handleAddModule = () => {
    console.log("Adding a new module...");
  };

  return (
    <div id="wd-home">
      {/* Toolbar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Course Modules</h2>
        <div className="space-x-2">
          <button
            onClick={handleViewProgress}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            View Progress
          </button>
          <button
            onClick={handlePublishAll}
            className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Publish All
          </button>
          <button
            onClick={handleAddModule}
            className="px-3 py-1 rounded bg-purple-500 text-white hover:bg-purple-600"
          >
            + Module
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <table className="w-full">
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <Modules />
            </td>
            <td valign="top">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
