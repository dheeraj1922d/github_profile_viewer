"use client";
import React from "react";
import { useState } from "react";
import style from "./Searchbar.module.css";
import { FaSearch } from "react-icons/fa";


const Searchbar = ({setData}) => {
  const [userName, setUserName] = useState("");
  

  const changeHandler = (event) => {
    setUserName(event.target.value);
    
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    fetch(`https://api.github.com/users/${userName}`).then((result)=>{
      return result.json();
    }).then((value)=>{
      
      setData(value);
      
    })


  }
  return (
    <form  onSubmit={submitHandler}>
      <div className={style.searchbox}>
        <input
          className={style.searchtext}
          id="text"
          type="text"
          placeholder="Search"
          onChange={changeHandler}
          value={userName}
        />
        <a href="#" className={style.searchbtn}>
          <FaSearch />
        </a>
      </div>

      <input type="submit" value="submit" className={style.submitbtn}></input>
    </form>
  );
};

export default Searchbar;
