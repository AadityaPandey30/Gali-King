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
  const [isPopupVisible, setPopupVisible] = useState(false); //State for Satta chart button

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const [isPopupVisible1, setPopupVisible1] = useState(false); //State for Monthly Satta chart button

  const openPopup1 = () => {
    setPopupVisible1(true);
  };

  const closePopup1 = () => {
    setPopupVisible1(false);
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
      <hr style={{ color: "1px solid white" }}></hr>
      <div className="col-block">
        <div className="block" style={{ flexBasis: "50%" }}>
          <h3>Sangeeta Yadav MD</h3>
          <p style={{ color: "black" }}>
            फरीदाबाद गाजियाबाद गली दिसावर मैं आपको सिंगल जोड़ी मैं कंपनी गेम पास
            कराकर देगी गेम की 1001% गारंटी होगी गेम किसी का बाप नहीं काट पाएगा
            जो भाई लॉस मैं हो लॉस कवर कराने के लिए व्हाट्सएप पर कॉल या मेसेज करे
          </p>
          <p>9124438657</p>
          <button className="w-button">WHATSAPP</button>
          <button className="c-button">Call Now</button>
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
          <button className="w-button">WHATSAPP</button>
          <button className="c-button">Call Now</button>
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
        <button className="w-button">WHATSAPP</button>
        <button className="c-button">Call Now</button>
      </div>
      
      </div>
      <br></br>
      <div className="notice">
        <h2 style={{ margin: "5px" }}>:: NOTICE BOARD ::</h2>
        <h3 style={{ margin: "2px" }}>AMIT DUBEY ONLINE KHAIWAL</h3>
        <p className="p4">SATTA KING KA WADA</p>
        <p className="p4">1001% PAYMENT KI GARANTI</p>
        <p className="p4">जोडी रेट 10 के 950</p>
        <p className="p4">हरूप रेट 100 के 950 PM</p>
        <p className="p4">फरीदाबाद-05:50 PM</p>
        <p className="p4">गाज़ियाबाद :- 07:50 PM</p>
        <p className="p4">गली :- 10:50 PM</p>
        <p className="p4">दिसावर :- 04:30 AM</p>
        <p className="p4">भोपाल Morning - 4:30 AM</p>
        <p className="p4">PAYMENT GAME PASS KE</p>
        <p className="p4">30 MIN BAAD MILEGA</p>
        <p className="p4">OFFICIAL KHAIWAL AMIT DUBEY</p>
        <p className="p4">9058099847</p>
        <br></br>
        <button className="w-button">WHATSAPP</button>
        <button className="c-button">Call Now</button>
      </div>

      <div
        className="tab1"
        id="section3"
        style={{ backgroundColor: "rgb(0, 166, 174)" }}
      >
        <h2>Satta King 2023 Chart</h2>
        <button className="show" onClick={openPopup}>
          Show chart
        </button>
      </div>
      <Table1 show={isPopupVisible} onClose={closePopup} />
      <div className="monthsl">
        <h2>Monthly Satta King Results</h2>
        <button className="show" onClick={openPopup1}>
          Show chart
        </button>
      
        <Monthly show={isPopupVisible1} onClose={closePopup1} />
      </div>
    
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
