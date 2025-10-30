// app/(Kambaz)/Courses/[cid]/Assignments/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../../Database";

export interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
  course: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: dbAssignments || [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload);
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== action.payload
      );
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
