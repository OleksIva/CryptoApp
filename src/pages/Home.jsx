import React from "react";
import IntroSection from "../components/IntroSection";
import PlatformHighlights from "../components/PlatformHighlights";
import CoinList from "../components/CoinList";
import AppLink from "../components/AppLink";

function Home() {
    return(
        <div className="home">
        <IntroSection />
        <CoinList />
        <PlatformHighlights />
        <AppLink />
        </div>
    )
}

export default Home;