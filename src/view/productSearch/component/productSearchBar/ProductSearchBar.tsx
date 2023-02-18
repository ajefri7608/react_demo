import React, { useState } from "react";
import { SearchBar } from "view/components/searchBar/SearchBar";
import { SwitchBtn } from "view/components/switchBtn/SwitchBtn";

export const ProductSearchBar = () => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="productSearchBarContainer">
      <SearchBar
        currentText={text}
        textChangeCallBack={(text) => setText(text)}
      />
      <SwitchBtn
        swichCallBack={(isOn) => {
          console.log("switch", isOn);
          setSwitchBtn(isOn);
        }}
        isOn={switchBtn}
      />
    </div>
  );
};
