import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <p>Monday, 19:44, few clouds</p>
        <h1>🌤️ 26°</h1>
        <ul>
          <li>
            Feels like: <strong>26°</strong>
          </li>
          <li>
            Humidity: <strong>80°</strong>
          </li>
          <li>
            Wind: <strong>10km/h</strong>
          </li>
        </ul>
        <Forecast />
      </header>
      <footer>
        <p>
          Coded by{" "}
          <a href="https://github.com/kaaathi1211" target="_blank" rel="noreferrer">
            Katharina Krotke,
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/kaaathi1211/weather-react"
            target="_blank" rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://kate-weather-app.netlify.app/" target="_blank" rel="noreferrer"> 
            Netlify.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
