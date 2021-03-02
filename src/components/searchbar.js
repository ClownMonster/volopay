import React from "react";
import "./components.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchBar = () => {
  return (
    <div className="S-container">
      <div className="S-box">
        <Autocomplete
          className="box"
          placeholder="Search"
          options={Imgs.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              className="inputTosearch"
              {...params}
              label="Search"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    </div>
  );
};

const Imgs = [
  { title: "flower" },
  { title: "Volopay" },
  { title: "Bangalore" },
  { title: "Rose" },
  { title: "Weather" },
  { title: "Cloud" },
  { title: "sky" }
];

export default SearchBar;
