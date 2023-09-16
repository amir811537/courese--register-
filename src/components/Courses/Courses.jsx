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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
