import React from "react";
import Header from "./Header";
// import { Link, Element, animateScroll as scroll } from 'react-scroll';

function IntroSection() {
    const scrollToCoinApp = () => {
        const coinAppElement = document.getElementById('coin-app');
    
        if (coinAppElement) {
            coinAppElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    

    return (
        <div className="intro-section">
            <div className="intro-section__second-layer">
                <Header />
                <h1>Make better business with Cryptocurrency</h1>
                <p className="intro-section__info">We offer users a fully operational long-term rental platform. It plans to leverage blockchain technology.</p>
                <button className="intro-section__button" onClick={scrollToCoinApp}>Get Started</button>
            </div>
        </div>
    );
}

export default IntroSection;


// import React from "react";
// import Header from "./Header";
// import { Link, Element, animateScroll as scroll } from 'react-scroll';

// function IntroSection() {
//     const scrollToCoinApp = () => {
//         scroll.scrollTo('coin-app', {
//           duration: 800,
//           smooth: 'easeInOutQuart',
//         });
//     return (
//     <div className="intro-section">
//         <div className="intro-section__second-layer">
//         <Header />
//         <h1>Make better businees with Cryptocurrency</h1>
//         <p className="intro-section__info">We offers users a fully operational long-term rental platform. It plans to leverages blockchain technology.</p>
//         <button className="intro-section__button" onClick={scrollToCoinApp}>Get Whitelisted</button>
//         </div>
//     </div>)
// }

// export default IntroSection;