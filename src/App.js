import "./App.css";
import Header from "./Header";
import Table1 from "./Components/Table1";
import React, { useState } from "react";
import Monthly from "./Components/Monthly";
import Abtsutta from "./Components/Abtsatta";
import Records from "./Components/Records";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from "./Components/About";
import Privacy from "./Components/PrivacyPolicy";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App" id="section4">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy/>} />
        </Routes>
      </BrowserRouter>
      <div
        className="tab1" id="section3">
        <h2 className="satta" style={{backgroundColor: 'rgb(200,50,89)'}}>Satta King 2023 Chart</h2>
        <Table1 />
      </div>
      <div className="monthsl">
        <h2 className="satta" style={{backgroundColor: 'rgb(200,50,89)'}}>Monthly Satta King Results</h2>
        <Monthly />
      </div>
      <div className="result" id="section1">
            
            <div className="col-block">
            <div className="block" style={{flexBasis:'20%'}}>
                <h3>Shivani Gupta (CEO)</h3>
                <p style={{color:'black'}}>गली देसावर की सिंगल लीक जोड़ी 1001% Fix</p>
                <p>7077354319</p>
                <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=7077354319`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
                <a href={`tel:7077354319`}><button className="c-button">Call Now</button></a>
            </div>
            <hr></hr>
            <div className="block">
                <h3>Kiran Sharma MD</h3>
                <p style={{color:'blue'}}>LEAK GAME KING</p>
                <p style={{color:'black'}}>गली दिसावर गाजियाबाद फरीदाबाद दीपावली पर होगी सबके घर में खुशियाँ। गेम लो सिंगल जोड़ी में दिसावर & कंपनी से लीक गेम जो होगा 100% फिक्स। कंपनी के खाते में पैसा जमा करवाकर कंपनी से गेम लें। गली और दिसावर कंपनी से लीक और फास्ट गेम बुक करवाएं और अपना लॉस वापस करें। डेट फिक्स गेम मिलेगी। जिस भाई का कभी गेम पास नहीं हुआ हो और परेशान हो, तो हमसे संपर्क करें।</p>
                <p>7536975011</p>
                <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=7536975011`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
                <a href={`tel:7536975011`}><button className="c-button">Call Now</button></a>
            </div>
            <hr></hr>
            <div className="block">
                <h3>Saurabh Patel</h3>
                <p style={{color:'blue'}}>King of Sutta</p>
                <p style={{color:'black'}}>फरीदाबाद गाजियाबाद गली दिसावर मैं आपको सिंगल जोड़ी मैं कंपनी गेम पास कराकर देगी, गेम की 1001% गारंटी होगी। गेम किसी का बाप नहीं काट पाएगा। जो भाई लॉस में हो, लॉस कवर कराने के लिए व्हाट्सएप पर कॉल या मैसेज करे।</p>
                <p>6287686224</p>
                <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=6287686224`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
                <a href={`tel:6287686224`}><button className="c-button">Call Now</button></a>
            </div>
            </div>
            
        <div className="col-block">
        <div className="block" style={{ flexBasis: "50%" }}>
          <h3>Sangeeta Yadav MD</h3>
          <p style={{ color: "black" }}>
            फरीदाबाद गाजियाबाद गली दिसावर मैं आपको सिंगल जोड़ी मैं कंपनी गेम पास
            कराकर देगी गेम की 1001% गारंटी होगी गेम किसी का बाप नहीं काट पाएगा
            जो भाई लॉस मैं हो लॉस कवर कराने के लिए व्हाट्सएप पर कॉल या मेसेज करे
          </p>
          <p>9124438657</p>
          <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=9124438657`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
          <a href={`tel:9124438657`}><button className="c-button">Call Now</button></a>
        </div>
        <hr></hr>
        <div className="block" style={{ flexBasis: "50%" }}>
          <h3>SAURABH YADAV(CEO)</h3>
          <p style={{ color: "black" }}>
            फरीदाबाद गाजियाबाद गली दिसावर में लीक जोड़ी गेम लेना चाहता है और जो
            कोई भी भाई जगह-जगह से धोखा खाया हुआ है धोखा खाकर थक चुका है तो
            बिल्कुल भी टेंशन ना ले सिर्फ इमानदार लोग ही कॉल या मैसेज करें और
            मोटा खेलने वाले लोग ही संपर्क करें गेम 1001% परसेंट गारंटी के साथ
            कंपनी पास करवा कर देगी देगी
          </p>
          <p>6287686224</p>
          <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=6287686224`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
          <a href={`tel:6287686224`}><button className="c-button">Call Now</button></a>
        </div>
      <hr></hr>
      <div className="block">
        <h3>Kiran Sharma MD</h3>
        <p style={{ color: "black" }}>
          सिंगल लीक जोड़ी Date फिक्स डायरेक्ट सट्टा ब्रांच से लीक गेम पास की फुल
          गारंटी है 101% पास लीक एंड कन्फर्म मेरी जोड़ी पैसा आपका तुम अपनी सोच
          बदलो मैं तुम्हारी तकदीर बदल दूंगा हम से जुड़े 20 से 25 लाख महीने का
          कमाये आज ही व्हाट्सएप करें
        </p>
        <p>7536975011</p>
        <button className="w-button" onClick= {()=>{
                  const whatsappURL = `https://api.whatsapp.com/send?phone=7536975011`;
                  window.open(whatsappURL, '_blank');
                }}>WHATSAPP</button>
        <a href={`tel:7536975011`}><button className="c-button">Call Now</button></a>
      </div>
      </div>
      <br></br>
      </div>
      <br></br>
    
      <Abtsutta />
      <hr></hr>
      <Records />
      <hr></hr>
      <div className="ldb">
        <h2>SATTA KING SATTA RESULT</h2>
        <p>
          satta matka , satta , satta king up , kalyan matka , matka result ,
          satta king result , सट्टा किंग , delhi satta king , disawar satta ,
          disawar , satta bajar , gali satta result , satta king 2023 , black
          satta king , satta king chart , desawar ,satta king desawar, desawar
          satta satta king fast , satta king ghaziabad , satta king 786 , satta
          king result , satta king online ,satta king faridabad , shri ganesh
          satta king , satta king result chart , taj satta king , satta king
          kashipur , satta king desawar 2019 , satta king 2018 , satta result ,
          satta company , satta king 2019 , satta king up , satta king chart ,
          satta king gali , satta king 2018 chart, satta king chart 2019, gali
          satta chart, satta king 2019 chart, satta king desawar , fast satta
          result , gali desawar result
        </p>
      </div>
      <div className="bld">
        <p>नोट- इस नंबर पर कोई गेम नही मिलता है</p>
        <p>
          गेम का रिजल्ट डलवाना हो या अपना नंबर गेम सेल के लिए व्हाट्सएप करे Only
          Whatsapp
        </p>
        <p className="p2">Vedant Thakur OWNER</p>
        <p className="p4">07873057308</p>
      </div>
      <div className="fixed-button-container">
        <button
          className="fixed-button"
          onClick={() => scrollToSection("section4")}
        >
          ^
        </button>
      </div>
    </div>
  );
}

export default App;
