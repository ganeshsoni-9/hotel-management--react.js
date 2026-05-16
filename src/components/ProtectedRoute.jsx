import React from "react";

import {
  Navigate,
} from "react-router-dom";

const ProtectedRoute = ({
  children,
}) => {

  const isLoggedIn =
    localStorage.getItem(
      "isLoggedIn"
    );

  // AGAR LOGIN NAHI HAI
  // TO AUTH PAGE PAR BHEJO

  if (!isLoggedIn) {

    return (
      <Navigate to="/auth" />
    );
  }

  // LOGIN HAI TO PAGE DIKHAO

  return children;
};

export default ProtectedRoute;