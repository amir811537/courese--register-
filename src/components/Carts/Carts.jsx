import { useEffect, useState } from "react";
import Cart from "../cart/cart";

const Carts = ({ carts }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalHour, setTotalHour] = useState(0);

  // Calculate remainingCredit based on 20 - totalHour
  const remainingCredit = 20 - totalHour;

  useEffect(() => {
    if (carts.length > 0) {
      const totalPriceSum = carts.reduce((sum, { price }) => sum + Number(price), 0);
      const totalHourSum = carts.reduce((sum, { credit }) => sum + Number(credit), 0);
      setTotalPrice(totalPriceSum);
      setTotalHour(totalHourSum);

      // Show alert if credit goes beyond 20
      if (totalHourSum > 20) {
        alert("You cannot take more than 20 credits.");
      }

      // Show alert if credit goes below 0
      if (totalHourSum < 0) {
        alert("You cannot take less than 0 credits.");
      }
    }
  }, [carts]);

  return (
    <div className="md:w-1/3">
      <h2 className="text-center text-3xl">Charts: {carts.length}</h2>
      <h3>Credit Remaining hour: {remainingCredit >= 0 ? remainingCredit : 0}</h3>
      {carts.map((cart, index) => (
        <div key={cart.id}>
          <Cart cart={cart} index={index}></Cart>
        </div>
      ))}
      <h3>Total Credit hour: {totalHour}</h3>
      <h3>Total Price: ${totalPrice.toFixed(0)} USD</h3>
    </div>
  );
};

export default Carts;
