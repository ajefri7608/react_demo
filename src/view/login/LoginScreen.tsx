import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Counter.module.css";
import { useAppSelector } from "../../redux/hook";
import { increment } from "../../redux/slice/userSlice";

export function LoginScreen() {
  const count = useAppSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
