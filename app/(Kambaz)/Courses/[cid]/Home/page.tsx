"use client";

import GreenCheckmark from "../Modules/GreenCheckmark";
import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <>
      <div id="wd-home">
        {/* Toolbar at the top */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Course Modules</h2>
          <div className="space-x-2">
            {/* Removed Publish All and + Module buttons */}
          </div>
        </div>

        {/* Main Layout */}
        <table className="w-full">
          <tbody>
            <tr>
              <td valign="top" width="70%">
                {/* Removed Publish All dropdown and + Module button */}
                <Modules />
              </td>
              <td valign="top">
                <CourseStatus />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
