import React, { useState } from "react";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  // State to manage dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setActiveDropdown(activeDropdown === section ? null : section);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="nav">
          <span className="nav-item">Help</span>
          <span className="nav-item"><i className="fa fa-flag fa-us"></i>Deutsch</span>
           |<span className="nav-item">EUR</span>
          <button className="menu-button">
            <span className="material-icons">menu</span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="intro">
        <h1 className="intro-title">Hello, how can we help you?</h1>
        <p className="intro-subtitle">Find Travel guide, FAQ, chat,</p>
      </section>

      {/* Cards Section */}
      <section className="cards">
      <section className="faq-section">
  <div className="row">
    <div className="card">
      <div className="card-header">
        <span className="material-icons card-icon">help</span>
        <h2 className="card-title">FAQ</h2>
      </div>
      <p className="card-text">Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</section>

<section className="travel-guide-section">
  <div className="row">
    <div className="card">
      <div className="card-header">
        <span className="material-icons card-icon">place</span>
        <h2 className="card-title">Travel Guide</h2>
      </div>
      <p className="card-text">Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</section>

        

        {/* Chat Section */}
<div className="card">
  <div className="card-header" onClick={() => toggleDropdown("chat")}>
    <span className="material-icons card-icon">chat</span>
    <h2 className="card-title">Chat</h2>
<i className={`fa fa-angle-down arrow ${activeDropdown === "chat" || activeDropdown === "social" || activeDropdown === "query" ? "open" : ""}`}></i>
  </div>
  {activeDropdown === "chat" && (
    <div className="dropdown-content">
      <p className="card-text">Lorem ipsum dolor sit amet</p>
      <div className="icons">
        <i className="fa fa-whatsapp icon"></i> {/* WhatsApp icon */}
        <i className="fa fa-telegram icon"></i> {/* Telegram icon */}
        <i className="fa fa-comment icon"></i> {/* General chat icon */}
      </div>
    </div>
  )}
</div>

{/* Social Section */}
<div className="card">
  <div className="card-header" onClick={() => toggleDropdown("social")}>
    <span className="material-icons card-icon">share</span>
    <h2 className="card-title">Social</h2>
    <i className={`fa fa-angle-down arrow ${activeDropdown === "chat" || activeDropdown === "social" || activeDropdown === "query" ? "open" : ""}`}></i>
    </div>
  {activeDropdown === "social" && (
    <div className="dropdown-content">
      <p className="card-text">Lorem ipsum dolor sit amet</p>
      <div className="icons">
        <i className="fa fa-facebook icon"></i> {/* Facebook */}
        <i className="fa fa-instagram icon"></i> {/* Instagram */}
        <i className="fa fa-twitter icon"></i> {/* Twitter */}
        <i className="fa fa-linkedin icon"></i> {/* LinkedIn */}
      </div>
    </div>
  )}
</div>

        {/* Send Query Section */}
        <div className="card">
          <div className="card-header" onClick={() => toggleDropdown("query")}>
            <span className="material-icons card-icon">mail</span>
            <h2 className="card-title">Send Query</h2>
            <i className={`fa fa-angle-down arrow ${activeDropdown === "chat" || activeDropdown === "social" || activeDropdown === "query" ? "open" : ""}`}></i>
            </div>
          {activeDropdown === "query" && (
            <div className="dropdown-content">
              <p className="card-text">Lorem ipsum doloor sit amet</p>
              <form className="query-form">
                <div className="form-group">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                  <input type="text" placeholder="Order no." />
                </div>
                <textarea placeholder="Your Query"></textarea>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
