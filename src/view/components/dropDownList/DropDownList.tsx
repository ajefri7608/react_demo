import { motion, Variants } from "framer-motion";
import React, { MouseEventHandler } from "react";
import "./dropDownList.scss";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

type Param = {
  isOpen?: boolean;
  currentItem?: string;
  DropListOnPress: (isOpen: boolean) => void;
  DropListElementOnPress: (item?: string) => void;
};

const itemList = ["Ford", "Honda", "Toyota", "All"];

export const DropDownList = (param: Param) => {
  return (
    <motion.nav
      initial={false}
      animate={param.isOpen ? "open" : ""}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => param.DropListOnPress(!param.isOpen)}
      >
        {param.currentItem !== undefined ? param.currentItem : "Choose a Brand"}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.div
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
        }}
        style={{ pointerEvents: param.isOpen ? "auto" : "none" }}
        className="dropDownListItemsConainer"
        data-isOpen={param.isOpen}
      >
        {itemList.map((item: string) => {
          return (
            <span
              className="item"
              onClick={() => {
                param.DropListElementOnPress(item);

                param.DropListOnPress(!param.isOpen);
              }}
            >
              {item}
            </span>
          );
        })}
      </motion.div>
    </motion.nav>
  );
};
