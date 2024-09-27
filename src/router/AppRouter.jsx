import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Footer from "../components/Footer";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
import BookDetails from "../pages/BookDetails";
import MyList from "../pages/MyList";

const AppRouter = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="" element={<PrivateRouter />}>
            <Route path="/myList" element={<MyList />} />
            <Route path="/myList/:book" element={<MyList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/details/:bookID/" element={<BookDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
