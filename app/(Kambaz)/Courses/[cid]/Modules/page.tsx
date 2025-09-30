"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
        {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, idx) => (
          <ListGroupItem key={week} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
              {/* Week title with left icon */}
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                <span>{week}</span>
              </div>

              {/* Controls row: plus sign + module buttons (green check + three dots) */}
              <div className="d-flex align-items-center gap-2">
                <FaPlus className="fs-5 cursor-pointer text-dark" />
                <div className="d-flex align-items-center">
                  <ModuleControlButtons />
                </div>
              </div>
            </div>

            {/* Lessons only for Weeks 1-3 */}
            {idx < 3 && (
              <ListGroup className="wd-lessons rounded-0">
                {week === "Week 1" && [
                  "LEARNING OBJECTIVES",
                  "Introduction to the course",
                  "Learn what is Web Development"
                ].map((lesson) => (
                  <ListGroupItem key={lesson} className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                      <span>{lesson}</span>
                    </div>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
                {week === "Week 2" && ["LESSON 1", "LESSON 2"].map((lesson) => (
                  <ListGroupItem key={lesson} className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                      <span>{lesson}</span>
                    </div>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
                {week === "Week 3" && ["LEARNING OBJECTIVES", "Higher Learning", "Application"].map((lesson) => (
                  <ListGroupItem key={lesson} className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                      <span>{lesson}</span>
                    </div>
                    <LessonControlButtons />
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
