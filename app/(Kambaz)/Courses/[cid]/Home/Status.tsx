"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";

export default function CourseStatus() {
  const [isPublished, setIsPublished] = useState(true);

  const actionButtons = [
    {
      label: "Import Existing Content",
      icon: <LiaFileImportSolid className="me-2 fs-5" />,
    },
    {
      label: "Import from Commons",
      icon: <LiaFileImportSolid className="me-2 fs-5" />,
    },
    {
      label: "Choose Home Page",
      icon: <MdDoNotDisturbAlt className="me-2 fs-5" />, // replace if you want
    },
    {
      label: "View Course Stream",
      icon: <MdDoNotDisturbAlt className="me-2 fs-5" />, // replace if you want
    },
    {
      label: "New Announcement",
      icon: <MdDoNotDisturbAlt className="me-2 fs-5" />, // replace if you want
    },
    {
      label: "New Analytics",
      icon: <MdDoNotDisturbAlt className="me-2 fs-5" />, // replace if you want
    },
    {
      label: "View Course Notifications",
      icon: <MdDoNotDisturbAlt className="me-2 fs-5" />, // replace if you want
    },
  ];

  return (
    <div
      className="border p-3 bg-white"
      style={{ width: "280px", marginLeft: "20px" }} // reduced width + spacing
    >
      {/* Title */}
      <h6 className="fw-bold mb-3">Course Status</h6>

      {/* Publish / Unpublish Buttons */}
      <div className="d-flex gap-2 mb-4">
        <div className="w-50 pe-1">
          <Button
            variant="secondary"
            size="lg"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={() => setIsPublished(false)}
            active={!isPublished}
          >
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish
          </Button>
        </div>
        <div className="w-50 ps-1">
          <Button
            variant="success"
            size="lg"
            className="w-100 d-flex align-items-center justify-content-center"
            onClick={() => setIsPublished(true)}
            active={isPublished}
          >
            <FaCheckCircle className="me-2 fs-5" />
            Publish
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex flex-column gap-2">
        {actionButtons.map((btn) => (
          <Button
            key={btn.label}
            variant="secondary"
            size="lg"
            className="text-start"
          >
            {btn.icon}
            {btn.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
