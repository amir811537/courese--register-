const Cart = ({ cart, index }) => {
  const { course_name } = cart;
  return (
    <div className="rounded-full">
      <h3 className="text-sm font-bold text-center bg-white p-4 ">
        {index + 1}. {course_name}
      </h3>
    </div>
  );
};

export default Cart;
