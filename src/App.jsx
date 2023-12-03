// libraries
import "@fontsource/inter";

// CSS files
import "./App.css";
import "./styles/Navbar.css";
import "./styles/TravelCard.css";

// Components
import Navbar from "./components/Navbar";
import TravelCard from "./components/TravelCard";

// data
import data from "./data/data";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="travel-list">
        {data.map((travelData, index) => {
          return <TravelCard key={index} {...travelData} />;
        })}
      </section>
    </div>
  );
}

export default App;
