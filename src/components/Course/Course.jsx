import { BsBook,BsCurrencyDollar } from "react-icons/bs";


const Course = ({course}) => {

const {course_name,img,details,price,credit,id}= course;

    return (
        <div>
            {/* <h2 className="text-4xl">{course_name}</h2> */}

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{course_name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-center">
   
    </div>
<div className="flex justify-evenly">
<div className="flex items-center"><BsCurrencyDollar /> 
        <p>price: {price}</p></div>
       <div className="flex items-center">
       <BsBook />
        <p>Cridit:{credit}hr</p>
       </div>

</div>
    
    <button className="btn btn-primary">Buy Now</button>
   
  </div>
</div>




        </div>






    );
};

export default Course;