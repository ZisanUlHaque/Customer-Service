import React from 'react';

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4 border-3">
        <aside>
          <p className="text-white">
            Copyright © {new Date().getFullYear()} - All right reserved by
            ZeroThree
          </p>
        </aside>
      </footer>
    );
};

export default Footer;