// Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-top">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
          <p>Receive exclusive offers in your mailbox</p>
          <div className="subscribe-box">
            <span className="email-icon">
              <MdEmail />
            </span>
            <input type="email" placeholder="Enter Your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>All rights Reserved </p>
        <p>
          Made with <span className="heart">♥</span> by <strong>Athi</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
