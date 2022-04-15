import React from "react";

export const Footer = () => {
  return (
    <footer class="footer text-center w-100 text-sm text-center min-ht-4 p-1 mt-2">
      <div class="footer-header">
        "Made with "<span>♥</span>" by Atul Hande"
      </div>
      <ul class="footer-social-icons flex my-1 m-center">
        <li class="list-inline-item text-m mr-1-5">
          <a
            class="social-link-footer"
            href="https://github.com/AtulHande03a"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="list-inline-item text-m mr-1-5">
          <a
            class="social-link-footer"
            href="https://www.linkedin.com/in/atul-hande/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li class="list-inline-item text-m mr-1-5">
          <a
            class="social-link-footer"
            href="https://twitter.com/AtulHande9"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <div class="footer-copy">"© 2022 Kursi e-Cart"</div>
    </footer>
  );
};
