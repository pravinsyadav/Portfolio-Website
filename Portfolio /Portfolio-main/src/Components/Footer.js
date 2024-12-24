import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pravin Yadav</h4>
      <div className="footerLinks">
        <a href="https://github.com/pravinsyadav" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/pravin-yadav-83ba2a241/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailTo:pravinsy2003@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/pravin0629/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;