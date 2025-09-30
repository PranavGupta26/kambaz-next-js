"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaBan } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="d-flex justify-content-end gap-2 text-nowrap"
    >
      {/* Collapse All */}
      <Button
        variant="secondary"
        size="lg"
        id="wd-collapse-all"
        className="d-flex align-items-center"
        style={{ height: "46px" }}
      >
        Collapse All
      </Button>

      {/* View Progress */}
      <Button
        variant="secondary"
        size="lg"
        id="wd-view-progress"
        className="d-flex align-items-center"
        style={{ height: "46px" }}
      >
        View Progress
      </Button>

      {/* Publish All Dropdown */}
      <Dropdown>
        <DropdownToggle
          variant="secondary"
          size="lg"
          id="wd-publish-all-btn"
          className="d-flex align-items-center gap-2"
          style={{ height: "46px" }}
        >
          <GreenCheckmark />
          <span>Publish All</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id="wd-publish-all-modules-and-items">
            <div className="d-flex align-items-center gap-2">
              <GreenCheckmark />
              <span>Publish all modules and items</span>
            </div>
          </DropdownItem>
          <DropdownItem id="wd-publish-modules-only">
            <div className="d-flex align-items-center gap-2">
              <GreenCheckmark />
              <span>Publish modules only</span>
            </div>
          </DropdownItem>
          <Dropdown.Divider />
          <DropdownItem id="wd-unpublish-all-modules-and-items">
            <div className="d-flex align-items-center gap-2">
              <FaBan className="text-dark" />
              <span>Unpublish all modules and items</span>
            </div>
          </DropdownItem>
          <DropdownItem id="wd-unpublish-modules-only">
            <div className="d-flex align-items-center gap-2">
              <FaBan className="text-dark" />
              <span>Unpublish modules only</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Add Module */}
      <Button
        variant="danger"
        size="lg"
        id="wd-add-module-btn"
        className="d-flex align-items-center gap-2"
        style={{ height: "46px" }}
      >
        <FaPlus />
        <span>Module</span>
      </Button>
    </div>
  );
}
