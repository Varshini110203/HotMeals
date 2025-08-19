import Header from "./assets/Header";
import "./App.css";
import Delivery from "./assets/Delivery";
import SearchFood from "./assets/SearchFood";
import Bestdeal from "./assets/Bestdeal";
import PopularMeal from "./assets/PopularMeal";
import Footer from "./assets/Footer";
import Vada from "./assets/images/Image.png";
import Idly from "./assets/images/Image (1).png";
import Parotta from "./assets/images/Image (2).png";
import Kitchadi from "./assets/images/Image (3).png";
import Howdoes from "./assets/Howdoes";
import Dosa from "./assets/images/Food Photo (1).png";
import Aapam from "./assets/images/Food Photo.png";
import Puttu from "./assets/images/Food Photo (2).png";
import Idiyappam from "./assets/images/Food Photo (3).png";
import Pongal from "./assets/images/Food Photo (4).png";
import VegRice from "./assets/images/Food Photo (5).png";
import Murukku from "./assets/images/Rectangle 336.png";
import Paniyaram from "./assets/images/Rectangle 337.png";
import SeevalMurukku from "./assets/images/Rectangle 338.png";
import Mixture from "./assets/images/Rectangle 338 1.png";
import VegSoup from "./assets/images/Rectangle 338 2.png";
import GulabJamun from "./assets/images/Rectangle 339.png";
import PorivellangaiUrundai from "./assets/images/Rectangle 340.png";
import Jangri from "./assets/images/Rectangle 341.png";
import Laddu from "./assets/images/Rectangle 342.png";
import Halwa from "./assets/images/Rectangle 343.png";

const App = () => {
  // const Food_Details = [
  //   { name: "vada", img: Vada, flag: 'squareImage'},
  //   { name: "idly", img: Idly,flag: 'squareImage' },
  //   { name: "parotta", img: Parotta,flag: 'squareImage' },
  //   { name: "kitchaddi", img: Kitchadi ,flag: 'squareImage'},
  // ];

  const searchFood = [
    { name: "vada", img: Vada, flag: "squareImage" },
    { name: "idly", img: Idly, flag: "squareImage" },
    { name: "parotta", img: Parotta, flag: "squareImage" },
    { name: "kitchaddi", img: Kitchadi, flag: "squareImage" },
    { name: "Dosa", img: Dosa, flag: "circle" },
    { name: "Aapam", img: Aapam, flag: "circle" },
    { name: "Puttu", img: Puttu, flag: "circle" },
    { name: "Idiyappam", img: Idiyappam, flag: "circle" },
    { name: "Pongal", img: Pongal, flag: "circle" },
    { name: "Veg Rice", img: VegRice, flag: "circle" },
  ];

  const foodItems = [
    { name: "Murukku", img: Murukku },
    { name: "Paniyaram", img: Paniyaram },
    { name: "SeevalMurukku", img: SeevalMurukku },
    { name: "Mixture", img: Mixture },
    { name: "VegSoup", img: VegSoup },
    { name: "GulabJamun", img: GulabJamun },
    { name: "PorivellangaiUrundai", img: PorivellangaiUrundai },
    { name: "Jangri", img: Jangri },
    { name: "Laddu", img: Laddu },
    { name: "Halwa", img: Halwa },
  ];
  return (
    <>
      {/* <Header> </Header> */}
      <Header />
      <Delivery />
      <div className="search-food-wrapper">
        <SearchFood
          foodItems={searchFood.filter((item) => item.flag === "squareImage")}
        />
      </div>

      {/* <SearchFood img={Vada} name="Vada"/>
      <SearchFood img={Idly} name="Idly"></SearchFood>
      <SearchFood img={Parotta} name="Parotta"></SearchFood>
      <SearchFood img={Kitchadi} name="Kitchadi"></SearchFood> */}
      {/* {searchFood.map((item, index) => (
        <div key={index}>
          {" "}
          <SearchFood img={item.img} name={item.name} flag={"circle"} />{" "}
        </div>
      ))} */}
      <Howdoes />
      <div className="search-food-wrapper-circle">
        <h4> Search food </h4>
        <SearchFood
          foodItems={searchFood.filter((item) => item.flag === "circle")}
        />
      </div>
      <Bestdeal />
      <div className="popularItems">
        <h4>Popular Items</h4>
        <PopularMeal foodItems={foodItems} />
      </div>
      <Footer />
    </>
  );
};

export default App;
