import React from "react";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import AOS from 'aos';
import { useEffect } from "react";

function News() {
    useEffect(() => {
        AOS.init({ once: false });
      }, []);
    return(<div className="news-wrapper"> 
    <section className="news" data-aos="fade-up">
        <h2>Learn to thrive</h2>
        <div className="card-container">
        <div className="card" data-aos="fade-right">
            <img className="card__image" src={news1} alt="news img" height="207px"></img>
            <h3 className="card__title">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h3>
            <p className="card__info">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p>
            <div className="card__footer">
                <p>By: Jennia Peris</p>
                <p>15/07/2021</p>
                <p>5 Min to read</p>
            </div>
        </div>
        <div className="card" data-aos="zoom-in">
            <img className="card__image" src={news2} alt="news img" height="207px"></img>
            <h3 className="card__title">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h3>
            <p className="card__info">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p>
            <div className="card__footer">
                <p>By: Jennia Peris</p>
                <p>15/07/2021</p>
                <p>5 Min to read</p>
            </div>
        </div>
        <div className="card" data-aos="fade-left">
            <img className="card__image" src={news3} alt="news img" height="207px"></img>
            <h3 className="card__title">New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange</h3>
            <p className="card__info">We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...</p>
            <div className="card__footer">
                <p>By: Jennia Peris</p>
                <p>15/07/2021</p>
                <p>5 Min to read</p>
            </div>
        </div>
        </div>
    </section></div>)
}

export default News;