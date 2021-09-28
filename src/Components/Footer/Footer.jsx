import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__loader"></div>
        <div className="footer__div">
          <h2 className="footer__header">
            Want to share an idea let's discuss
          </h2>

          <a
            className="footer__email"
            href="mailto:abdulmaliikalandarov@gmail.com"
          >
            abdulmaliikalandarov@gmail.com
          </a>
        </div>

        <ul className="footer__list">
          <li className="footer__item-telegram">
            <a href="index.html">telegram</a>
          </li>
          <li className="footer__item-linkedin">
            <a href="index.html">linkedin</a>
          </li>
          <li className="footer__item-behance">
            <a href="index.html">behance</a>
          </li>
          <li className="footer__item-dribbble">
            <a href="index.html">dribbble</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
