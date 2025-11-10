import React from "react";
import { AuthContext } from "../AuthContex";

const AuthProvider = ({ children }) => {
  const value = {};
  return (
    <div>
      <AuthContext value={value}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
