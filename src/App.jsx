import { useState } from "react";
import "./App.css";
import Carts from "./components/Carts/Carts";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [carts, setCarts] = useState([]);
  const [totalHour, setTotalHour] = useState(0);

  const handleAddToCarts = (course) => {
    const itemExists = carts.some((cartItem) => cartItem.id === course.id);
    const newTotalHour = itemExists ? totalHour : totalHour + course.credit;
    if (newTotalHour <= 20) {
      if (itemExists) {
        toast.warn("You already selected this course!");
      } else {
        setCarts((prevCartItems) => [...prevCartItems, course]);
        setTotalHour(newTotalHour);
      }
    } else {
      toast.error("You cannot take more than 20 credits.");
    }
  };

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-screen-2xl mx-auto">
      <Courses handleAddToCarts={handleAddToCarts}></Courses>
        
        <Carts carts={carts}></Carts>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
