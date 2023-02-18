import React, { useState } from "react";
import { SwitchBtn } from "view/components/switchBtn/SwitchBtn";

export const ProductSearchBar = () => {
  const [switchBtn, setSwitchBtn] = useState(false);
  return (
    <div className="productSearchBarContainer">
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
