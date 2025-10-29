"use client";

import { useState } from "react";
import Link from "next/link";
import { Row, Col, Card, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, Course } from "../Courses/reducer";

// ---------------------------
// Type for Redux state slice
// ---------------------------
interface RootState {
  coursesReducer: {
    courses: Course[];
  };
}

export default function Dashboard() {
  // ✅ Get courses from Redux store
  const courses = useSelector((state: RootState) => state.coursesReducer.courses);
  const dispatch = useDispatch();

  // ✅ Local course form state (fully typed as Course)
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New Course
        {/* ✅ Add Course */}
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => {
            // Create a new course with unique _id
            const newCourse: Omit<Course, "_id"> = {
              name: course.name,
              number: course.number,
              startDate: course.startDate,
              endDate: course.endDate,
              image: course.image,
              description: course.description,
            };
            dispatch(addNewCourse(newCourse));
          }}
        >
          Add
        </button>

        {/* ✅ Update Course */}
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>
      <br />

      {/* ✅ Form controls */}
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        placeholder="Course Name"
      />
      <FormControl
        value={course.description}
        as="textarea"
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        placeholder="Course Description"
      />
      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4 row-cols-1 row-cols-md-5">
          {courses.map((ci: Course) => (
            <Col
              key={ci._id}
              className="wd-dashboard-course"
              style={{ width: "260px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${ci._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={ci.image ?? "/images/reactjs.jpg"}
                    style={{ width: "100%", height: 160 }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {ci.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {ci.description || "No description available."}
                    </Card.Text>

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-primary">Go</button>
                      <div>
                        {/* ✅ Edit course fills form */}
                        <button
                          id="wd-edit-course-click"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(ci);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>

                        {/* ✅ Delete course */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteCourse(ci._id));
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
