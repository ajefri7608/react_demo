import React from "react";
import { motion } from "framer-motion";
import "./switchBtn.scss";

type Param = {
  swichCallBack: (isOn: boolean) => void;
  isOn?: boolean;
};
export const SwitchBtn = (param: Param) => {
  return (
    <div
      className="switch"
      data-isOn={param.isOn}
      onClick={() => param.swichCallBack(!param.isOn)}
    >
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
