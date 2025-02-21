"use client";
import Image from "next/image";
import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div className="loading_page_container">
      <div className="loader_inner">
        <Image className="rounded-full" src={"/images/logo.jfif"} width={100} height={40} />
      </div>
    </div>
  );
};

export default Loading;