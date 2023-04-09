import * as React from "react";
import { useLocation, useRoutes, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import Form from "./Form";
import Error from "./Error";
import Dashboard from "./Dashboard";
import Login from "./Login"

function setCookie(key, value) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
  var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}

export default function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "start",
      element: <Form />,
    },
    {
      path: "dashboard",
      element: <Dashboard />
    },
    {
      path: "login",
      element: <Login />,
    }
  ]);
  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(router, { key: location.pathname })}
    </AnimatePresence>
  );
};