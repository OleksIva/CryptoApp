import React from 'react';

const Footer = () => {
  // Define variables for the lists
  const productItems = ['Spot', 'Inverse Perpetual', 'USDT Perpetual', 'Exchange', 'Launchpad', 'Binance Pay'];
  const servicesItems = ['Buy Crypto', 'Markets', 'Trading Fee', 'Affiliate Program', 'Referral Program', 'API'];
  const supportItems = ['Bybit Learn', 'Help Center', 'User Feedback', 'Submit a request', 'API Documentation', 'Trading Rules'];
  const aboutUsItems = ['About Bybit', 'Authenticity Check', 'Careers', 'Business Contacts', 'Blog'];

  // Render list items
  const renderListItems = (items, listTitle) => {
    return (
      <ul className={`footer-list footer-list--${listTitle.toLowerCase()}`}>
        <li>
          <p className={`footer-list-title footer-list-title--${listTitle.toLowerCase()}`}>{listTitle}</p>
        </li>
        {items.map((item, index) => (
          <li key={index} className={`footer-list-item footer-list-item--${listTitle.toLowerCase()}`}>
            <a href="#" className={`footer-link footer-link--${listTitle.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="footer">
      <div className="footer-top" data-section>
        <div className="container footer-top__container">
          <div className="footer-brand footer-brand--top">
            <a href="#" className="logo footer-logo">
              <img src="./assets/images/logo.svg" width="50" height="50" alt="Cryptex logo" />
              Cryptex
            </a>
            <h2 className="footer-title footer-title--top">Let's talk! 🤙</h2>
            <a href="tel:+123456789101" className="footer-contact-link footer-contact-link--top">+12 345 678 9101</a>
            <a href="mailto:hello.cryptex@gmail.com" className="footer-contact-link footer-contact-link--top">hello.cryptex@gmail.com</a>
            <address className="footer-contact-link footer-contact-link--top">
              Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
            </address>
          </div>
          {renderListItems(productItems, 'Products')}
          {renderListItems(servicesItems, 'Services')}
          {renderListItems(supportItems, 'Support')}
          {renderListItems(aboutUsItems, 'About Us')}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom__container">
          <p className="copyright footer-copyright">
            &copy; 2022 Cryptex All Rights Reserved by <a href="#" className="copyright-link footer-copyright-link">codewithsadee</a>
          </p>
          <ul className="social-list footer-social-list">
            <li>
              <a href="#" className="social-link footer-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            {/* Add other social links with ion-icons here */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
