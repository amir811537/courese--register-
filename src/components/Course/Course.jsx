import { BsBook, BsCurrencyDollar } from "react-icons/bs";

const Course = ({ course, handleAddToCarts }) => {
  const { course_name, img, details, price, credit, id } = course;

  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="max-h-40 " src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-center"></div>
          <div className="flex justify-evenly">
            <div className="flex items-center space-x-3">
              <BsCurrencyDollar />
              <p>price: {price}</p>
            </div>
            <div className="flex gap-4 items-center space-x-3">
              <BsBook />
              <p>Cridit:{credit}hr</p>
            </div>
          </div>

          <button
            onClick={() => handleAddToCarts(course)}
            className="btn btn-primary"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
