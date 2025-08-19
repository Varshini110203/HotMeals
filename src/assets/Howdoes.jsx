import "./Howdoes.css";
import Discount from "./images/Icon.png";
import Tracking from "./images/Icon (1).png";
import Delivery from "./images/Icon (2).png";

function howdoes() {
  return (
    <>
      <div className="container">
        <div className="howDoes">How does it work</div>
      </div>

      <div className="howDoes-container">
        <div className="discounts">
          <img src={Discount}></img>
          <div className="discount-card">
            <span>
              Daily <br /> Discounts{" "}
            </span>
          </div>
          <div className="vertical"></div>
        </div>
        <div className="discounts">
          <img src={Tracking}></img>
          <div className="discount-card">
            <span>
              Live <br /> Tracking{" "}
            </span>
          </div>
          <div className="vertical"></div>
        </div>
        <div className="discounts">
          <img src={Delivery}></img>
          <div className="discount-card">
            <span>
              Quick <br /> Delivery
            </span>
          </div>
          <div className="vertical"></div>
        </div>
      </div>
    </>
  );
}

export default howdoes;
