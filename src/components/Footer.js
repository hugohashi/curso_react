import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer=() => {
  return (
    <footer className="footer">
      <div className="sb_footer_section_padding">
        <div className="sb_footer_links">

          <div className="sb_footer_links_div">
            <h2>E-MAIL</h2>
            <a href={`mailto:pedroeapereira@gmail.com`}> <p> <h2>pedroeapereira@gmail.com</h2> </p> </a>
          </div>

          <div className="sb_footer_links_div">
            <h2>TELEMÓVEL</h2>
            <a href="tel:+351916792001"> <p> <h2>+351 916792001</h2> </p> </a>
          </div>

          <div class="sb_footer_links_div">
            <h2>Em Breve</h2>
              <div className="socialmedia">
                <a href="#" className="linkedin social"> <FontAwesomeIcon icon={faLinkedin} size="2x"/> </a> 
                <a href="#" className="facebook social"> <FontAwesomeIcon icon={faFacebook} size="2x"/> </a>
                <a href="#" className="instagram social"> <FontAwesomeIcon icon={faInstagram} size="2x"/> </a>
              </div>
          </div>
        </div>

        <br></br>

        <div className="sb_footer_below">
          <div className="sb_footer_copyright">
            <p>
            <h3>@{new Date().getFullYear()} Pedro Pereira Unipessoal. All rights reserved.</h3>
            </p>
          </div>
          <div className="sb_footer_below_links">
            <a href="#"> <div> <p> <h3>Terms & Conditions</h3> </p> </div> </a>
            <a href="#"> <div> <p> <h3>Privacy</h3> </p> </div> </a>
            <a href="#"> <div> <p> <h3>Security</h3> </p> </div> </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
