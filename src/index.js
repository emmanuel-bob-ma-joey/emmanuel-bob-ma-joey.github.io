import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Project from "./components/Project";
import Poop from "./components/Poop";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex-container fixed-top">
      <div className="navbar">
        <a href="#">Emmanuel Ma</a>

        <div className="flex-container">
          <Banner />
        </div>
      </div>
    </div>

    <App />

    <div className="subtitle" id="projects">
      <h1>Projects</h1>
    </div>
    <div className="flex-container">
      <div className="flex-child">
        <Project
          title="News Article Web Scraper"
          subtitle="Python, Flask, mySQL, Vue, Bootstrap, Axios"
          text=" Web scraper web app that scrapes news sites to algorithmically select positive articles.
        "
          sourceLink="https://github.com/lucmaxwell/McHacks-2021"
        />
      </div>
      <div className="flex-child">
        <Project
          title="ML Text Summarizer Web App"
          subtitle="Python, Flask, Bootstrap "
          text="A web app that uses an ML text summarizer and AI chatbot to make filling out insurance papers easier. "
          sourceLink="https://github.com/THe142857/shinz"
        />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
