import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import LeftComp from "./component/LeftComponent/LeftComp";
import { PocketContextProvider } from "./context/PocketContext";
import SingleGroup from "./component/SingleGroup/SingleGroup";
import GroupPopUp from "./component/LeftComponent/GroupPopUp";

function App() {
  return (
      <PocketContextProvider>
        <div className="main-container">
          <BrowserRouter>
            <LeftComp />
            <Routes>
              <Route path="/SingleGroup/:groupId" element={<SingleGroup />} />
              <Route path="*" element={<Home />} />
              <Route path="/popup" element={<GroupPopUp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PocketContextProvider>
  );
}

export default App;
