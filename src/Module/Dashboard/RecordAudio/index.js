import React from "react";
import { Navtab } from "../../../Component";
import { Outlet } from "react-router-dom";

function RecordAudio() {
    const navItem = [{name: "Recording", route: '/'},{name: "Saved", route: "/saved-audio"}]
  return <div className="screen">
    <Navtab navItem={navItem} />
    <Outlet/>
  </div>;
}

export { RecordAudio };
