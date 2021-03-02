import React from "react";
import "./components.css";
//import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//import { RadioGroup } from "@material-ui/core";

const SearchBar = () => {
  return (
    <div className="S-container">
      <Autocomplete
        className="S-box"
        id="custom-input-demo"
        options={Imgs}
        renderInput={(params) => (
          <div className="box" ref={params.InputProps.ref}>
            <input
              className="inputTosearch"
              style={{
                width: "100%",
                borderRadius: "12px",
                padding: "1rem",
                fontSize: "20px",
                fontFamily: "serif"
              }}
              type="text"
              placeholder="Search"
              {...params.inputProps}
            />
          </div>
        )}
      />
    </div>
  );
};

const Imgs = [
  "Flower",
  "Cloud",
  "Rain",
  "Morning",
  "Sun Rise",
  "Nature",
  "Birds",
  "Parrot",
  "Trees",
  "Fog",
  "Hills",
  "Valleys",
  "Rivers",
  "Sunset",
  "Ocean",
  "Mist"
];

export default SearchBar;
