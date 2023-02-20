import React from "react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./productSearchScreen.scss";
import { ProductSearchBar } from "./component/productSearchBar/ProductSearchBar";
import { ProductItem } from "./component/productItem/ProductItem";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { searchProduct } from "redux/slice/productSlice";

export const ProductSearchScreen = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(
    (state) => state.product.filteredProductData
  );

  const [switchBtn, setSwitchBtn] = useState<boolean>();
  const [text, setText] = useState<string>();
  const [dropDownList, setDropDownList] = useState<boolean>(false);
  const [dropDownListSelectedItem, setDropDownListSelectedItem] =
    useState<string>();

  useEffect(() => {
    if (
      switchBtn !== undefined ||
      text !== undefined ||
      dropDownListSelectedItem !== undefined
    ) {
      console.log("switch:", switchBtn);
      console.log("text:", text);

      dispatch(searchProduct({ text, switchBtn, dropDownListSelectedItem }));
    }
  }, [switchBtn, text, dropDownListSelectedItem]);

  function renderProductRow() {
    const tmp = [];
    if (productData !== undefined) {
      for (var i = 0; i < productData.length; i += 3) {
        tmp.push(
          <Row>
            {productData[i] !== undefined ? (
              <Col xs={12} md={6} lg={6} xl={3} className="gridContainer">
                {<ProductItem product={productData[i]} />}
              </Col>
            ) : (
              <></>
            )}
            {productData[i + 1] !== undefined ? (
              <Col xs={12} md={6} lg={6} xl={3} className="gridContainer">
                {<ProductItem product={productData[i + 1]} />}
              </Col>
            ) : (
              <></>
            )}
            {productData[i + 2] !== undefined ? (
              <Col xs={12} md={6} lg={6} xl={3} className="gridContainer">
                {<ProductItem product={productData[i + 2]} />}
              </Col>
            ) : (
              <></>
            )}
            {productData[i + 3] !== undefined ? (
              <Col xs={12} md={6} lg={6} xl={3} className="gridContainer">
                {<ProductItem product={productData[i + 3]} />}
              </Col>
            ) : (
              <></>
            )}
          </Row>
        );
      }
    }
    return tmp;
  }
  function renderFakeProductData() {
    return (
      <AnimatePresence mode="wait">
        <Container>{renderProductRow()}</Container>
      </AnimatePresence>
    );
  }
  return (
    <div className="productSearchScreenContainer">
      <ProductSearchBar
        onSearchTextChanage={(text) => setText(text)}
        onSwitchBtnPress={(state) => setSwitchBtn(state)}
        searchText={text}
        switchBtn={switchBtn}
        dropDownList={dropDownList}
        onDropDownListPress={(state) => {
          setDropDownList(state);
        }}
        onDropDownListSelected={(item) => {
          console.log("3", item);
          setDropDownListSelectedItem(item);
        }}
        dropDownListCurrentItem={dropDownListSelectedItem}
      />
      {renderFakeProductData()}
    </div>
  );
};
