import "./App.css";
import Btn from "./components/Btn";
import heroImage from "./assets/hero.png";

function App() {
  return (
    <div className="flex center column container">
      <div className="mini-container">
        <div className="flex center column">
          <div className="flex center">
            <a href="https://react.dev" target="_blank">
              <div className="logo react hex" alt="React logo"></div>
            </a>
          </div>
          <h1>Brian Blomlie</h1>
          <div className="card">
            <h5>Frontend designer based in Oslo.</h5>
            <Btn />
            <p className="read-the-docs">
              Trykk på knappen for CV og kontaktinformasjon!
            </p>
          </div>
        </div>
        <img src={heroImage}></img>
      </div>
      <div></div>
    </div>
  );
}

export default App;
