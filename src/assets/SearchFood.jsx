import "./SearchFood.css";

function SearchFood({ foodItems }) {

  return (
    <div>
      {foodItems &&
        foodItems.map((item, index) => {
          return (
            <div className="search-food" key={index}>
              <div className={item.flag === "squareImage" ? "food" : "circle"}>
                <img src={item.img} />
                <p>{item.name}</p>
                <button
                  style={{
                    backgroundColor: "rgba(243, 174, 134, 0.49)",
                    color: "#F17228",
                  }}
                >
                  {" "}
                  30 min Delivery{" "}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SearchFood;
