import "./Footer.css";
import Lottie from "lottie-react";
import robot from "../assets/robot.json";
import GalaxyBubble from "./GalaxyBubble";
import GalaxyBackground from "./GalaxyBackground";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Removed Phone and Envelope

function Footer() {
  return (
    <footer className="footer">
      <GalaxyBubble />
      
      <GalaxyBackground />
      
      <div className="robot">
        <Lottie animationData={robot} loop={true} />
      </div>

      <div className="planet"></div>

      <div className="footer-content">
        <h2>Let's Connect</h2>

        {/* NATIVE PHONE SYMBOL */}
        <p className="contact-item">
          <span className="native-icon">&#128502;</span> +91 7871053771
        </p>

        {/* NATIVE ENVELOPE SYMBOL */}
        <p className="contact-item">
          <span className="native-icon">&#9993;</span> thonishm26@gmail.com
        </p>

        <div className="social">
          <a href="https://www.linkedin.com/in/m-thonish26" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/thonish26" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://wa.me/917871053771" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2026 Thonish. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
