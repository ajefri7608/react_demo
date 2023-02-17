import React from "react";
import { useRouteError } from "react-router-dom";

export type RouteError = {
  statusText?: string;
  message?: string;
};
export const PageNotFound = () => {
  const error = useRouteError() as RouteError;
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
