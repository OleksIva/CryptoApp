import React from "react";
import AOS from 'aos';
import { useEffect } from "react";

function News() {
    useEffect(() => {
        AOS.init({ once: false });
      }, []);
    return(<section><div>
        
    </div></section>)
}

export default News;