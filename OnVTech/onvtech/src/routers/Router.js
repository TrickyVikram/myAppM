import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "../page/Body";
import Contact from "../page/Contact";
import Signup from "../page/Signup";
import Login from "../page/Login";
import Admin from "../page/Admin";
import Service from "../page/Service";
import About from "../page/About";
import Profile from "../page/Profile";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Body/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/admin" element={<Admin/>}></Route>
          <Route exact path="/service" element={<Service/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/profile" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
