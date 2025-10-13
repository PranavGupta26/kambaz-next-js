"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";
import * as db from "../Database"; // ✅ Import courses from your local database

export default function Dashboard() {
  const courses = db.courses; // ✅ Dynamically load all courses

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        {/* ✅ Responsive grid for courses */}
        <Row xs={1} md={4} className="g-4">
          {courses.map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "260px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`} // ✅ Dynamic link with encoded course ID
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={(course as any).image ?? "/images/reactjs.jpg"}
                    style={{ width: "100%", height: 160 }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
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
