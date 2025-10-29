"use client";
import { createSlice } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: dbAssignments, // ✅ Preload existing DB data
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        ...payload,
        _id: uuidv4(), // Unique ID for new assignments
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
