import React from "react";

export const Footer = () => {
  return (
    <footer className="footer text-center w-100 text-sm text-center min-ht-4 p-1 mt-2">
      <div className="footer-header">
        "Made with "<span>♥</span>" by Atul Hande"
      </div>
      <ul className="footer-social-icons flex my-1 m-center">
        <li className="list-inline-item text-m mr-1-5">
          <a
            className="social-link-footer"
            href="https://github.com/AtulHande03a"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="list-inline-item text-m mr-1-5">
          <a
            className="social-link-footer"
            href="https://www.linkedin.com/in/atul-hande/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="list-inline-item text-m mr-1-5">
          <a
            className="social-link-footer"
            href="https://twitter.com/AtulHande9"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <div className="footer-copy">"© 2022 Kursi e-Cart"</div>
    </footer>
  );
};
