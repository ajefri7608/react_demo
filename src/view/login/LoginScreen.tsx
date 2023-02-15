import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { increment, login } from "../../redux/slice/userSlice";

export function LoginScreen() {
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
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
      </div>
    </div>
  );
}
