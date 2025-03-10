import React from 'react';
import './Footer.css';
import { getConfig } from '@edx/frontend-platform';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-181818 py-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-start py-8 px-6 lg:px-0 container-xl">
        <div className="flex flex-col mb-8 lg:mb-0">
          <img src={getConfig().LOGO_WHITE_URL} alt="Aspen Publishing Logo" className="w-40 h-auto mb-4" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex flex-col gap-4 text-white">
            <h3 className="uppercase footer-link">
              <a href="https://aspenpublishing.com/pages/discover-jd-next-program" target="_blank" rel="noopener" aria-label="About Us">About Us</a>
            </h3>
            <h3 className="uppercase footer-link">
              <a href="https://support.aspenpublishing.com/hc/en-us/categories/19204583377428-JD-Next" target="_blank" rel="noopener" aria-label="Support">Support</a>
            </h3>
          </div>
          <div className="flex flex-col gap-4 text-light-gray">
            <a href={`${getConfig().LMS_BASE_URL}/tos`} className="footer-link-extra">Terms of Service</a>
            <a href={`${getConfig().LMS_BASE_URL}/privacy`} className="footer-link-extra">Privacy Policy</a>
            <a href={`${getConfig().LMS_BASE_URL}/disclosure`} className="footer-link-extra">California Consumer Act Policy</a>
            <a href={`${getConfig().LMS_BASE_URL}/agreement`} className="footer-link-extra">End User License Agreement</a>
          </div>
        </div>
      </div>
      <hr className="my-8 border-t border-d6ae75 mx-6 lg:mx-24 container-xl mx-auto" aria-hidden="true" />
      <div className="mx-auto flex flex-col lg:flex-row justify-between lg:items-center px-6 lg:px-0 py-8 container-xl">
        <span className="text-light-gray text-sm mb-4 lg:mb-0">&copy; {currentYear} ASPEN PUBLISHING</span>
        <div className="flex gap-4 lg:gap-8">
          <a href="https://www.facebook.com/profile.php?id=61555997104704" className="text-light-gray text-sm">Facebook</a>
          <a href="https://www.linkedin.com/company/aspenpublishing/" className="text-light-gray text-sm">LinkedIn</a>
          <a href="https://twitter.com/AspenPublishing" className="text-light-gray text-sm">Twitter</a>
          <a href="https://www.youtube.com/@aspenpublishing6830" className="text-light-gray text-sm">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;