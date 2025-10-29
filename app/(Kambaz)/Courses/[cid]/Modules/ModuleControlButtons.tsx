import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      {/* ✅ Edit Module */}
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-2 mb-1 cursor-pointer"
      />

      {/* ✅ Delete Module */}
      <FaTrash
        className="text-danger me-2 mb-1 cursor-pointer"
        onClick={() => deleteModule(moduleId)}
      />

      {/* ✅ Publish/Checkmark */}
      <GreenCheckmark />

      {/* ✅ Add Button */}
      <BsPlus className="fs-1 text-dark" />

      {/* ✅ Options Menu */}
      <IoEllipsisVertical className="fs-4 text-dark" />
    </div>
  );
}
