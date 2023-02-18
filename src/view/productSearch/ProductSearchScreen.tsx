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
    for (var i = 0; i < productData.length; i += 3) {
      tmp.push(
        <Row>
          {productData[i] !== undefined ? (
            <Col xs={12} md={6} lg={3}>
              {<ProductItem product={productData[i]} />}
            </Col>
          ) : (
            <></>
          )}
          {productData[i + 1] !== undefined ? (
            <Col xs={12} md={6} lg={3}>
              {<ProductItem product={productData[i + 1]} />}
            </Col>
          ) : (
            <></>
          )}
          {productData[i + 2] !== undefined ? (
            <Col xs={12} md={6} lg={3}>
              {<ProductItem product={productData[i + 2]} />}
            </Col>
          ) : (
            <></>
          )}
          {productData[i + 3] !== undefined ? (
            <Col xs={12} md={6} lg={3} className="gridContainer">
              {<ProductItem product={productData[i + 3]} />}
            </Col>
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
