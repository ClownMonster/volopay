import "./styles.css";
import SearchBar from "./components/searchbar";
import TitleBar from "./components/Title";

export default function App() {
  return (
    <div className="App">
      <div>
        <TitleBar />
        <SearchBar />
      </div>
    </div>
  );
}
