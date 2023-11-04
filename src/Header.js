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
            </div>
        
      </header>
    );
  };
  
  export default Header
