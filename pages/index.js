import React from "react";
import { useState } from "react";
import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { FaGithub } from "react-icons/fa";

const index = () => {
  const [data, setData] = useState();
  return (
    <div className="wrapper">
      <div className="wrapper2">
        <FaGithub />
        <h1 className="heading">Github-Profile-Viewer</h1>
      </div>
      <Searchbar setData={setData} />

      {console.log(data)}
      {data && <Card data={data} />}
    </div>
  );
};

export default index;
