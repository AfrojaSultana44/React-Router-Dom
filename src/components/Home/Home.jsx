import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();

  console.log(location);

  return (
    <div className="w-full max-w-[1140px] mx-auto pt-5">
      <Header />

      {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}

      <Footer />
    </div>
  );
};

export default Home;
