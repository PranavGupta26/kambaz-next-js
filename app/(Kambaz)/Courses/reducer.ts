import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses as dbCourses } from "../Database";
import { v4 as uuidv4 } from "uuid";

// ---------------------------
// Type Definitions
// ---------------------------
export interface Course {
  _id: string;
  name: string;
  number?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description?: string;
}

// State type
interface CoursesState {
  courses: Course[];
}

// ---------------------------
// Initial State
// ---------------------------
const initialState: CoursesState = {
  courses: dbCourses as Course[],
};

// ---------------------------
// Slice
// ---------------------------
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, action: PayloadAction<Omit<Course, "_id">>) => {
      // Preserve all fields from payload including `name`
      const newCourse: Course = {
        _id: uuidv4(),
        ...action.payload,
      };
      state.courses.push(newCourse);
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      state.courses = state.courses.map((c) =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

// ---------------------------
// Exports
// ---------------------------
export const { addNewCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
