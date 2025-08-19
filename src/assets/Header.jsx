import'./Header.css'
import mapimg from './images/map-marker-alt.png'
import { FaUser } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa';



function Header(){

    return(
        <>
        <div className='header'>
            <p className='head'> Hot Meals</p>
            <div className='location'>
                <p>
                    Deliver to: 
                    <img src={mapimg} style={{ height: 25, width: 14, margin: "0 5px" }} /> 
                    Current Location 
                    <span style={{ fontWeight: "bold"}}> Ashok Nagar, Chennai-600013.</span>
                </p>

            </div>
            <div className='search'>
                <FaSearch size={18} color="#FFB30E" />
                <span style={{ fontWeight: "bold" }}> Search Food </span>
                <FaUser size={18} color="#FFB30E" />
                <span style={{ fontWeight: "700", color: "#FFB30E", fontSize: "18px",fontFamily:"Source Sans Pro" }}> Login </span>
            </div>

        </div>
        </>
    )
}

export default Header;