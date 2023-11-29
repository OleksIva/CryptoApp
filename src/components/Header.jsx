import React from "react";

function Header() {
    const navListItems = ["Home", "Company", "About", "Pricing", "Team", "Contact", "Block"];
    const handleButtonClick = () => {
        alert('Coming soon...');
      };
    return (
        <header className="header">
            <div className="image-container"><img className="header__image" src={require("../assets/logo.png")} width="35" height="40" alt="CryptoUs Logo" />
            <p className="header__name">Cryptous</p></div>
            <ul className="nav-list">
                {navListItems.map((item, index) => (
                    <li key={index} className="nav-list__item">
                        <button className="nav-list__button" onClick={handleButtonClick}>{item}</button>
                    </li>
                ))}
            </ul>
            <button className="header__button">Trade Now</button>
        </header>
    )
}

export default Header;