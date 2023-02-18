import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./login.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { increment, login } from "../../redux/slice/userSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Form } from "react-bootstrap";

export function LoginScreen() {
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* <div className="loginBox">
        <button
          aria-label="Increment value"
          onClick={() => {
            console.log("aaaaa");
            dispatch(login());
          }}
        >
          Increment
        </button>
        <span>{count}</span>
      </div> */}
    </div>
  );
}
