import React from "react";
import "./footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterNavItem from "../Components/FooterNavItem";

library.add(faFacebook, faInstagram, faTwitter, faYoutube);

function Footer() {
  const usefulLinks = [
    "Home",
    "Movies",
    "My List",
    "Terms of service",
    "Privacy policy",
  ];
  const locations = ["Egypt", "Abu Dhabi", "Dubai"];
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="/" className="logo d-flex align-items-center">
                <span>CINEMA</span>
              </a>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                odit obcaecati ducimus iure iste minima, nisi, ratione laborum
                incidunt omnis atque consectetur autem, laboriosam inventore
                eius saepe! Quod, vitae repudiandae?
              </p>
              <div className="social-links mt-3">
                <a href="#" className="facebook">
                  <FontAwesomeIcon icon={["fab", "fa-facebook"]} />
                </a>
                <a href="#" className="instagram">
                  <FontAwesomeIcon icon={["fab", "fa-instagram"]} />
                </a>
                <a href="#" className="twitter">
                  <FontAwesomeIcon icon={["fab", "fa-twitter"]} />
                </a>
                <a href="#" className="youtube">
                  <FontAwesomeIcon icon={["fab", "fa-youtube"]} />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {usefulLinks.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Cinemas</h4>
              <ul>
                {locations.map((link) => (
                  <FooterNavItem key={link} name={link} />
                ))}
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                United Arab Emirates <br /> <br />
                <strong>Phone:</strong>+971551402109 <br />
                <strong>Email:</strong>khaledtantawi195@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Khaled Tantawi</span>
          </strong>
          .All Rights Reserved
        </div>
        <div className="credits">
          Designed By{" "}
          <a
            href="https://www.linkedin.com/in/khaled-tantawi195/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khaled Tantawi
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
