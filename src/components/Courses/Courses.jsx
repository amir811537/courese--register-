import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const[courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('programming.json')
        .then(res => res.json())
        .then(data=> setCourses(data))
    })



    return (
        <div className="md:w-2/3">
            <h1>Courses Name:{courses.length}</h1>
        </div>
    );
};

export default Courses;