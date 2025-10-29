"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules); // initial modules from database
  const [moduleName, setModuleName] = useState("");

  // Add new module
  const addModule = () => {
    if (!moduleName.trim()) return; // prevent empty module names
    setModules([
      ...modules,
      { _id: uuidv4(), name: moduleName, course: cid, lessons: [] },
    ]);
    setModuleName("");
  };

  // Delete module
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };

  // Edit module
  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))
    );
  };

  // Update module
  const updateModule = (updatedModule: any) => {
    setModules(
      modules.map((m) => (m._id === updatedModule._id ? updatedModule : m))
    );
  };

  return (
    <div className="wd-modules">
      {/* Controls to add a new module */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />

      <br /><br /><br /><br />

      {/* List of modules */}
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary text-white d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center w-100">
                  <BsGripVertical className="me-2 fs-3 flex-shrink-0" />

                  {/* Module name or input for editing */}
                  {!module.editing && <span>{module.name}</span>}
                  {module.editing && (
                    <FormControl
                      className="w-50 d-inline-block"
                      defaultValue={module.name}
                      onChange={(e) =>
                        updateModule({ ...module, name: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          updateModule({ ...module, editing: false });
                        }
                      }}
                    />
                  )}
                </div>

                {/* Module control buttons */}
                <div className="d-flex align-items-center gap-2">
                  <FaPlus className="fs-5 cursor-pointer text-dark" />
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={deleteModule}
                    editModule={editModule}
                  />
                </div>
              </div>

              {/* Lessons */}
              {module.lessons && module.lessons.length > 0 && (
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
