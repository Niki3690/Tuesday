import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/PAGES/About";
import Cart from "./component/PAGES/Cart";
import Home from "./component/PAGES/Home";
import Navbar from "./component/Navbar";
import { Provider } from "react-redux";
import Store from "./component/STORE/Store";
import Single from "./component/Single";
import BreadCrumbs from "./component/BreadCrumbs";
import Login from "./component/PAGES/Login";
import ProtectedRoutes from "./component/ProtectedRoutes";

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <BreadCrumbs />
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="item/:id" element={<Single />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>

      {/* <img src="https://picsum.photos/200/300" style={{height:300,width:300}} /> */}
    </div>
  );
};

export default App;
