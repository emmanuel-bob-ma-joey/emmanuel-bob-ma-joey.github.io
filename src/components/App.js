//import logo from "./logo.svg";
import "../App.css";
import resume from "../assets/resume_2022.pdf";
import email from "../assets/mail_icon.png";
import github from "../assets/github_icon.svg";
import linkedin from "../assets/linkedin_icon.svg";
import resume_icon from "../assets/resume_icon.png";

function App() {
  return (
    <div className="App" id="app">
      <header className="App-header">
        <p>
          I'm a second year student at McGill studying software engineering. My
          natural habitat is hunched over a keyboard - piano or computer,
          depending on the time of day. No matter if I'm practicing Bach
          preludes, or finding the shortest path between two nodes in a graph,
          I'm always creating something beautiful.
        </p>
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
