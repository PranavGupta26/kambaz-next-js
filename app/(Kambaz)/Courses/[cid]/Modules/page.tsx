"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id || module.name}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              {/* Module Header */}
              <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                  <span>{module.name}</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <FaPlus className="fs-5 cursor-pointer text-dark" />
                  <ModuleControlButtons />
                </div>
              </div>

              {/* Lessons for this Module */}
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id || lesson.name}
                      className="wd-lesson p-3 ps-1 d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3 flex-shrink-0" />
                        <span>{lesson.name}</span>
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
