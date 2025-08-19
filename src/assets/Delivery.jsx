import { RiMotorbikeFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Leafimg from "./images/pngegg 1.png";
import "./Delivery.css";

function Delivery() {
  return (
    <>
      <div className="content">
        <div className="loc">
          <p className="title"> Look at your fav Meals</p>
          <p className="sub-title">
            {" "}
            Within a few clicks, find meals that are accessible near you{" "}
          </p>
          <div className="search-container">
            <div className="delivery">
              <button
                style={{
                  color: "#F17228",
                  backgroundColor: "rgba(243, 174, 134, 0.49)",
                }}
              >
                {" "}
                <RiMotorbikeFill size={18} color="#F17228" /> Delivery{" "}
              </button>
              <button style={{ backgroundColor: "white" }}>
                <FaShoppingBag size={18} color="rgba(117, 117, 117, 1)" />
                Pick up
              </button>
            </div>
            <div className="search-bar">
              <FaLocationDot
                size={18}
                color="rgba(255, 116, 116, 1)"
              ></FaLocationDot>
              <input type="text" placeholder="Enter your address"></input>
              <button
                style={{
                  backgroundColor: "rgba(246, 89, 0, 1)",
                  color: "white",
                }}
              >
                <CiSearch size={18} color="white"></CiSearch>Find Food
              </button>
            </div>
          </div>
        </div>
        <div className="img">
          <img src={Leafimg} />
        </div>
      </div>
    </>
  );
}

export default Delivery;
