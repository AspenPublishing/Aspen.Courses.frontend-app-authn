import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.svg" alt="Aspen Publishing Logo" className="footer-logo-img" />
        </div>

        <div className="footer-links">
          <div className="footer-links-group">
            <h3 className="footer-link-title">
              <a href="https://aspenpublishing.com/pages/discover-jd-next-program" target="_blank" rel="noopener" aria-label="About Us">
                About Us
              </a>
            </h3>
            <h3 className="footer-link-title">
              <a href="https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next" target="_blank" rel="noopener" aria-label="Support">
                Support
              </a>
            </h3>
          </div>
          <div className="footer-links-list">
            <a href="/tos" className="footer-link" aria-label="Terms of Service">Terms of Service</a>
            <a href="/privacy" className="footer-link" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="/disclosure" className="footer-link" aria-label="California Consumer Act Policy">California Consumer Act Policy</a>
            <a href="/agreement" className="footer-link" aria-label="End User License Agreement">End User License Agreement</a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" aria-hidden="true" />
      <div className="footer-bottom">
        <span className="footer-copyright">&copy; {currentYear} ASPEN PUBLISHING</span>
        <div className="footer-social-links">
          <a href="https://www.facebook.com/profile.php?id=61555997104704" className="footer-social-link" aria-label="Aspen Publishing on Facebook">Facebook</a>
          <a href="https://www.linkedin.com/company/aspenpublishing/" className="footer-social-link" aria-label="Aspen Publishing on LinkedIn">LinkedIn</a>
          <a href="https://twitter.com/AspenPublishing" className="footer-social-link" aria-label="Aspen Publishing on Twitter">Twitter</a>
          <a href="https://www.youtube.com/@aspenpublishing6830" className="footer-social-link" aria-label="Aspen Publishing on YouTube">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;