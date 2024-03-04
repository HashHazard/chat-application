import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import MainContainer from "./Components/MainContainer";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import CreateGroups from "./Components/CreateGroups";
import Groups from "./Components/Groups";

function App() {
  return (
    <div className="App">
      {/* <MainContainer /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="groups" element={<Groups />}></Route>
          <Route path="create-groups" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// resources:
// www.flaticon.com
// https://mui.com/material-ui/material-icons/
// https://getcssscan.com/css-box-shadow-examples
// https://gist.github.com/bartholomej/8415655 (css media query cheatsheet)
