//import logo from "./logo.svg";
import "../App.css";
import resume from "../assets/Resume.pdf";
import email from "../assets/mail_icon.png";
import github from "../assets/github_icon.svg";
import linkedin from "../assets/linkedin_icon.svg";
import resume_icon from "../assets/resume_icon.png";

function App() {
  return (
    <div className="App" id="app">
      <header className="App-header">
        <p>*curently migrating the site from static html to react*</p>
        <div
          className="textbox"
          style={{
            backgroundColor: "turquoise",
            display: "flex",
            alignSelf: "center",
            width: "800px",
          }}
        >
          <p>
            Hi! I'm a second year student at McGill studying software
            engineering. I am currently a helpdesk tutor for CSUS McGill, and
            also a Development Coordinator at Enactus McGill, working on our
            latest community initiative! Some of my favourite hobbies include
            running, playing ping pong, and practicing piano and violin.
          </p>
        </div>

        <div style={{ backgroundColor: "blue", height: 10 }}>
          <div className="icon-div">
            <a
              href="mailto:emmanuel.ma@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={email} className="App-icon" alt="logo" />
            </a>
          </div>
          <div className="icon-div">
            <a
              href="https://www.linkedin.com/in/emmanuel-ma-5092261a5/"
              target="_blank"
              rel="nofollow"
            >
              <img src={linkedin} className="App-icon" alt="logo" />
            </a>
          </div>
          <div className="icon-div">
            <a
              href="https://github.com/emmanuel-bob-ma-joey"
              target="_blank"
              rel="nofollow"
            >
              <img src={github} className="App-icon" alt="logo" />
            </a>
          </div>
          <div className="icon-div">
            <a href={resume} target="_blank" rel="nofollow">
              <img src={resume_icon} className="App-icon" alt="logo" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
