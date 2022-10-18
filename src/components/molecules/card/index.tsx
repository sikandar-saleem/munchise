import React from "react";
import { Props } from "./types";

const Card = ({ logo, companyName, speciality, city }: Props) => (
  <div className="flex">
    <div>
      <img src={logo.src} alt={logo.alt} className="h-40"/>
    </div>
    <div className="ml-4">
      <h3 className="text-2xl font-bold">{companyName}</h3>
      <p className="text-md font-lg">{`Speciality: ${speciality}`}</p>
      <p className="text-md font-lg">{`City: ${city}`}</p>
    </div>
  </div>
);
export default Card;
