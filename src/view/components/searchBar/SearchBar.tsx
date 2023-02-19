import React, { useState } from "react";
import "./SearchBar.scss";

type Param = {
  textChangeCallBack: (text: string) => void;
  currentText?: string;
};
export const SearchBar = (param: Param) => {
  return (
    <div className="searchBarContainer">
      <div className="searchBarGrp">
        <img src={require("assets/icon/search.png")} className="searchIcon" />
        <input
          className="searchTextInput"
          style={{ outline: "none", border: "none" }}
          type="text"
          value={param.currentText}
          onChange={(event) => param.textChangeCallBack(event.target.value)}
          placeholder="Search in here"
        ></input>
      </div>
    </div>
  );
};
