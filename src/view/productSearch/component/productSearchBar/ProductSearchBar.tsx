import React, { useEffect, useState } from "react";
import { SearchBar } from "view/components/searchBar/SearchBar";
import { SwitchBtn } from "view/components/switchBtn/SwitchBtn";
import "./productSearchBar.scss";

type Param = {
  searchText?: string;
  switchBtn?: boolean;
  onSearchTextChanage: (text?: string) => void;
  onSwitchBtnPress: (switchBtnState: boolean) => void;
};

export const ProductSearchBar = (param: Param) => {
  return (
    <div className="productSearchBarContainer">
      <div className="searchBarContainer">
        <span className="searchBarTitle">Product Name:</span>
        <SearchBar
          currentText={param.searchText}
          textChangeCallBack={(text) => param.onSearchTextChanage(text)}
        />
      </div>

      <div className="switchBtnContainer">
        <span className="searchBarTitle">Brand new only?</span>
        <SwitchBtn
          swichCallBack={(isOn) => {
            console.log("switch", isOn);
            param.onSwitchBtnPress(isOn);
          }}
          isOn={param.switchBtn}
        />
      </div>
    </div>
  );
};
