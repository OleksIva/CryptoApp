import React from "react";
import intro1 from '../assets/intro1.svg';
import intro2 from '../assets/intro2.svg';
import intro3 from '../assets/intro3.svg';

function PlatformHighlights() {
    return(<section className="platform-highlights">
        <h2>The most trusted cryptocurrency platform</h2>
        <ul className="platform-highlights__list">
            <li className="platform-highlights__list-item">
            <figure class="platform-highlights__icon-container">
                <img height={'70px'} className="platform-highlights__icon" src={intro1} alt='intro1'></img>
                </figure>
                <h3>Ease of Trading</h3>
                <p>Intuitive interface</p>
                <p>Instant deposit options</p>
                <p>Cash out directly to your bank account</p>
            </li>
            <li className="platform-highlights__list-item">
            <img height={'70px'} className="platform-highlights__icon" src={intro2} alt='intro2'></img>
                <h3>Institutional-grade Security</h3>
                <p>98% of assets stored safely offline</p>
                <p>Highly encrypted personal data</p>
                <p>Whitelisting and transaction confirmations</p>
            </li>
            <li className="platform-highlights__list-item">
            <img height={'70px'} className="platform-highlights__icon" src={intro3} alt='intro3'></img>
                <h3>Proven Reliability</h3>
                <p>Exchanging bitcoin since 2011</p>
                <p>Industry-leading uptime</p>
                <p>24/7 dedicated support</p>
            </li>
        </ul>
    </section>)
}

export default PlatformHighlights;