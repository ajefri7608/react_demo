import React from "react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ProductData } from "../../model/product";
import { GeneralResponse } from "../../model/user";
import { ProductItem } from "./component/ProductItem";
import { fakeProductResponse } from "./fakeData";
import "./productSearchScreen.scss";

export const ProductSearchScreen = () => {
  const [productData, setProductData] = useState<ProductData[]>([]);
  useEffect(() => {
    setProductData(fakeProductResponse.data);
  }, []);

  function renderProductRow() {
    const tmp = [];
    for (var i = 0; i < productData.length; i += 2) {
      tmp.push(
        <Row>
          {productData[i] !== undefined ? (
            <Col sm>{<ProductItem product={productData[i]} />}</Col>
          ) : (
            <></>
          )}
          {productData[i + 1] !== undefined ? (
            <Col sm>{<ProductItem product={productData[i]} />}</Col>
          ) : (
            <></>
          )}
          {productData[i + 2] !== undefined ? (
            <Col sm>{<ProductItem product={productData[i]} />}</Col>
          ) : (
            <></>
          )}
        </Row>
      );
    }
    return tmp;
  }
  function renderFakeProductData() {
    return (
      <AnimatePresence>
        <Container>{renderProductRow()}</Container>
      </AnimatePresence>
    );
  }
  return <div className="body">{renderFakeProductData()}</div>;
};
