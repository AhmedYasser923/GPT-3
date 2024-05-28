import React from "react";
import "../brand/brand.css";
import { google, slack, dropbox, atlassian, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand">
      <div className="">
        <img src={google} alt="" />
      </div>
      <div className="">
        <img src={slack} alt="" />
      </div>
      <div className="">
        <img src={atlassian} alt="" />
      </div>
      <div className="">
        <img src={shopify} alt="" />
      </div>
      <div className="">
        <img src={dropbox} alt="" />
      </div>
    </div>
  );
};

export default Brand;
