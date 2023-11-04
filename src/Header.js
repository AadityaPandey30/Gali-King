import React from "react";
import {Link} from 'react-router-dom';


const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
      <header>
        <div className="head">
        <h1 style={{margin:'7px 0px 0px 10px'},{color:'black'},{fontFamily: 'revert'}}>⚡SATTA KING⚡</h1>
        <div className="button-row">
          <button className="button" onClick={() => scrollToSection("section1")}>Satta Result</button>
          <button style={{flexBasis: '40%'}} className="button" onClick={() => scrollToSection("section2")}>Desawar Result</button>
          <button className="button" onClick={() => scrollToSection("section3")}>Satta Chart</button>
        </div>
        <marquee behavior="scroll" direction="left">
                Sattaking, Gali Result, Tezpur Satta King, Lal Kila Satta King, Hindustan Satta King, Taj-1 Satta, Kashipur Satta, Dishawar Satta King.
        </marquee>
        <nav>
          <ul className="nav-links">
            <li>
               <Link to="/">Home </Link>
            </li>
            <li onClick={() => scrollToSection("section6")}>
              <Link to="/about"> About</Link>
            </li>
            <li onClick={() => scrollToSection("section5")}>
              Record
            </li>
            <li onClick={() => scrollToSection("section7")}>
              <Link to="/privacy"> Privacy Policy</Link>
            </li>
          </ul>
        </nav>
        </div>
        
        <div className="places" id="section2">
        <h2 className="satta">Satta King Live Result</h2>
                <div className="place">
                    <h2>DESAWAR</h2>
                    <p>TIME - 05:15 am</p>
                    <a href=""></a>
                </div>
                <hr></hr>
                <div className="place">
                    <h2>GALI</h2>
                    <p>TIME - 11:50 pm </p>
                    <a href=""></a>
                </div>
                <hr></hr>
                <div className="place">
                    <h2>GOA NIGHT</h2>
                    <p>TIME - 11:50 pm</p>
                    <a href=""></a>
                </div>
                <hr></hr>
                <div className="place">
                    <h2>RANCHI</h2>
                    <p>TIME - 05:00 am</p>
                    <a href=""></a>
                </div>
                <hr></hr>
                <div className="place">
                    <h2>BHOPAL MORNING</h2>
                    <p>TIME - 04:45 am</p>
                    <a href=""></a>
                </div>
                <hr></hr>
                <div className="place">
                    <h2>DWARKA NIGHT</h2>
                    <p>TIME - 05:00 am</p>
                    <a href=""></a>
                </div>
                <br></br>
            </div>

        <div className="result" id="section1">
            
            <div className="col-block">
            <div className="block" style={{flexBasis:'20%'}}>
                <h3>Shivani Gupta (CEO)</h3>
                <p style={{color:'black'}}>गली देसावर की सिंगल लीक जोड़ी 1001% Fix</p>
                <p>7077354319</p>
                <button className="w-button">WHATSAPP</button>
                <button className="c-button">Call Now</button>
            </div>
            <hr></hr>
            <div className="block">
                <h3>Kiran Sharma MD</h3>
                <p style={{color:'blue'}}>LEAK GAME KING</p>
                <p style={{color:'black'}}>गली दिसावर गाजियाबाद फरीदाबाद दीपावली पर होगी सबके घर में खुशियाँ। गेम लो सिंगल जोड़ी में दिसावर & कंपनी से लीक गेम जो होगा 100% फिक्स। कंपनी के खाते में पैसा जमा करवाकर कंपनी से गेम लें। गली और दिसावर कंपनी से लीक और फास्ट गेम बुक करवाएं और अपना लॉस वापस करें। डेट फिक्स गेम मिलेगी। जिस भाई का कभी गेम पास नहीं हुआ हो और परेशान हो, तो हमसे संपर्क करें।</p>
                <p>7536975011</p>
                <button className="w-button">WHATSAPP</button>
                <button className="c-button">Call Now</button>
            </div>
            <hr></hr>
            <div className="block">
                <h3>Saurabh Patel</h3>
                <p style={{color:'blue'}}>King of Sutta</p>
                <p style={{color:'black'}}>फरीदाबाद गाजियाबाद गली दिसावर मैं आपको सिंगल जोड़ी मैं कंपनी गेम पास कराकर देगी, गेम की 1001% गारंटी होगी। गेम किसी का बाप नहीं काट पाएगा। जो भाई लॉस में हो, लॉस कवर कराने के लिए व्हाट्सएप पर कॉल या मैसेज करे।</p>
                <p>6287686224</p>
                <button className="w-button">WHATSAPP</button>
                <button className="c-button">Call Now</button>
            </div>
            </div>
        </div>
        
      </header>
    );
  };
  
  export default Header
