import React from "react";
import appstore_link from '../assets/appstore-link.svg';
import playmarket_link from '../assets/playmarket-link.svg';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import round_shape from '../assets/round-shape.svg'

function AppLink() {
    return(<section className="bg-1"><div className="wrapper app-link">
        <div className="app-link__info-container"><h2>Try the future, today.</h2>
        <h2>Download Crypto</h2>
        <p>Stay connected to the market with our mobile app. Featuring advanced order types and analytical tools for experienced traders, as well as a simple buy & sell interface for those just getting started.</p>
        <div className="app-link__link-container">
            <a href="" className="app-link__link-button"><img height={'55px'} className="" src={appstore_link} alt='ios'></img></a>
            <a href="" className="app-link__link-button"><img height={'55px'} className="" src={playmarket_link} alt='android'></img></a>
        </div></div>
        <div className="app-link__image-container">
        <img height={'450px'} className="phone1" src={phone1} alt='phone'></img>
        <img height={'450px'} className="phone2" src={phone2} alt='phone'></img>
        <img height={'127px'} className="round-shape" src={round_shape} alt='shape'></img>
        </div>
    </div></section>)
}

export default AppLink;