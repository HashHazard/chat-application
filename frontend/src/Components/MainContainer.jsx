import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const myContext = createContext();

// this component contains the sidebar and the chat area
function MainContainer() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  return (
    <div className="main-container">
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar />
        <Outlet />
      </myContext.Provider>

      {/* <UsersGroups /> */}

      {/* ---- */}
      {/* <ChatArea */}
      {/*   props={{ */}
      {/*     name: "Test#1", */}
      {/*     lastMessage: "Last Message #1", */}
      {/*     timeStamp: "today", */}
      {/*   }} */}
      {/* /> */}

      {/* ---- */}
      {/* <Welcome /> */}

      {/* ---- */}
      {/* <CreateGroups /> */}
    </div>
  );
}

export default MainContainer;
