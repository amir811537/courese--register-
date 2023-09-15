import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleAddToCarts }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("programming.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:grid grid-cols-3 py-4">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleAddToCarts={handleAddToCarts}
        ></Course>
      ))}
    </div>
  );
};

export default Courses;
