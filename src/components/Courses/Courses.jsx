import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const[courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('programming.json')
        .then(res => res.json())
        .then(data=> setCourses(data))
    },[])



    return (
        <div className="md:w-2/3">
            <h1>Courses Name:{courses.length}</h1>
        

{
    courses.map(course =><Course 
    key={course.id} 
    course={course}>
        
    </Course>)
}

        </div>
    );
};

export default Courses;