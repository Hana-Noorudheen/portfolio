import Project from "./Project";
import { UserContext } from "../App.js";
import { useContext } from "react";
import Typewriter from "typewriter-effect";

import p1_1 from "../Assests/img/p1.1.jpg";
import p1_2 from "../Assests/img/p1.2.jpg";
import p1_3 from "../Assests/img/p1.3.jpg";

import p2_1 from "../Assests/img/p2.1.jpg";
import p2_2 from "../Assests/img/p2.2.jpg";
import p2_3 from "../Assests/img/p2.3.jpg";

const Data = () => {
  const data = [
    {
      Name: "LiveShop",
      Category: "Web Design",
      Client: "Nill",
      Date: "22/08/2021",
      Description: "Ecommerce website",
      Image1: p1_1,
      Image2: p1_2,
      Image3: p1_3,
      Link: "https://liveshops.herokuapp.com/",
      Num:1,
    },
    {
      Name: "Blood Bank",
      Category: "Web Design",
      Client: "Nill",
      Date: "01/07/2021",
      Description: "Blood details collecting app",
      Image1: p2_1,
      Image2: p2_2,
      Image3: p2_3,
      Link: "https://dpbloodbank.herokuapp.com/",
      Num:2,
    },
  ];

  const { state } = useContext(UserContext);
  console.log(state);
  if (state === 1) {
    return <Project info={data[0]} />;
  } else if (state === 2) {
    return <Project info={data[1]} />;
  } else return <h1>not matched</h1>;
};

export default Data;
