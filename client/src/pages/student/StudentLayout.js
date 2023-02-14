import React from "react";
import { Outlet } from "react-router-dom";

function StudentLayout() {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
}

export default StudentLayout;