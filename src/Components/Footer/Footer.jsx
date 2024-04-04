import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import zalo_icon from "../Assets/zalo_icon.png";

const Footer = () => {
  // Function to handle Instagram share
  const shareInstagram = () => {
    window.open("https://www.instagram.com/", "_blank");
  };

  // Function to handle Pinterest share
  const sharePinterest = () => {
    window.open("https://www.pinterest.com/", "_blank");
  };

  // Function to handle WhatsApp share
  const shareWhatsApp = () => {
    window.open("https://web.whatsapp.com/", "_blank");
  };

  // Function to handle Zalo share
  const shareZalo = () => {
    window.open("https://zalo.me/", "_blank");
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shop THOCUTE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} onClick={shareInstagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} onClick={sharePinterest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} onClick={shareWhatsApp} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={zalo_icon} onClick={shareZalo} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
