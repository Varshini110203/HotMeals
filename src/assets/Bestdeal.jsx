import { MdKeyboardArrowRight } from "react-icons/md";
import './Bestdeal.css'
import leaf from './images/Image (4).png'

const Bestdeal = () => {
  return (
    <>
    <div className="deal-Container">
      <div className="bestTitle">
        <h4>Best deals <span className="subtitle">Crispy <br ></br>Diffen</span>  </h4>
        <p className="bestSubtitle">
          Enjoy the large size of Dosa. Complete <br /> perfect slice of Dosa.
        </p>
        <button className="proceed">Proceed to order <MdKeyboardArrowRight /></button>
      </div>
      <div className="leafImg">
        <img src={leaf} />
       </div>
    </div>
  </>
  )
};

export default Bestdeal;
