import "./styles.css";
import styled from "styled-components";
import SearchBar from "./components/searchbar";
import TitleBar from "./components/Title";
import Images from "./components/images";

export default function App() {
  const Grid = styled.div`
    display: grid;
    padding: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  `;

  return (
    <div className="App">
      <div>
        <TitleBar />
        <SearchBar />
        <Grid>
          {[...Array(50).keys()].map((i) => (
            <Images
              key={i}
              src={`https://picsum.photos/1000/1000?random=${i}`}
              alt={`Random image ${i}`}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
}
