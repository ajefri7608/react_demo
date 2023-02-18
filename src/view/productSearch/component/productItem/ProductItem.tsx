import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductData } from "../../../../model/product";
import "./productItem.scss";
import "theme/typography.scss";

type Param = { product: ProductData };

export const ProductItem = (param: Param) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="boxContainer"
    >
      {param.product.images?.length > 0 ? (
        <img
          className="productImage"
          src={require("../../../../" + param.product.images[0].filePath)}
          // src={require("assets/product/car1.jpg")}
        />
      ) : (
        <></>
      )}
      <div className="productDescriContainer">
        <div className="productTitleContainer ">
          <span className="font-01-bold">{param.product.name}</span>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <img
              className="heartIcon"
              src={require("assets/icon/heart_filled.png")}
            />
          </motion.div>
        </div>
        <div className="discriLine1Container">
          <span className="font-02-bold ">{param.product.brand}</span>
          <span className="font-02-bold ">{"$" + param.product.price}</span>
        </div>
        <span className="font-03-bold ">
          {param.product.engineSize + " cc"}
        </span>
        <span className="font-03-bold ">{param.product.used}</span>
      </div>
    </motion.div>
  );
};
