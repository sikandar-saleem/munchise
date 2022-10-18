import React from "react";

// import Home from "../components/home";
import Home from "../components/organism/home";
import Data from "../assets/data/companiesList.json";
import Cities from "../assets/data/citiesList.json";
import Specialities from "../assets/data/specialityList.json";

const HomePage = () => (
  <Home
    data={Data.companies}
    cities={Cities.cities}
    specialities={Specialities.specialities}
  />
);

export default HomePage;
