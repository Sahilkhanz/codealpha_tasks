"use client";

import Editing from "./Editing";
import Id from "./Id";
import Upload from "./Upload";


const Page = () => {
    return (
      <>
        <div  className=" flex flex-col gap-2">
        {/* <Id/> */}
        <Editing/>
        <Upload/>
        </div>
      </>
    );
  };
  
  export default Page;
