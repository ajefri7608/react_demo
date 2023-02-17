import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductData } from "../../../model/product";
import "./productItem.scss";

type Param = { product: ProductData };

export const ProductItem = (param: Param) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="boxContainer"
    >
      {param.product.name}
    </motion.div>
  );
};
