import React from "react";
import IntroSection from "../components/IntroSection";
import PlatformHighlights from "../components/PlatformHighlights";
import CoinList from "../components/CoinList";
import AppLink from "../components/AppLink";
import News from "../components/News";
import Footer from "../components/Footer";

function Home() {
    return(
        <div className="home">
        <IntroSection />
        <CoinList />
        <PlatformHighlights />
        <AppLink />
        <News />
        {/* <Footer /> */}
        </div>
    )
}

export default Home;