import "./PopularMeal.css";

const PopularMeal = ({ foodItems }) => {
  return (
    <div className="meal-wrapper">
      {foodItems.map((item, index) => (
        <div key={index} className="meal-card">
          <img src={item.img} alt={item.name} />
          <h6>{item.name}</h6>
          <button>Order Now</button>
        </div>
      ))}
    </div>
  );
};

export default PopularMeal;
