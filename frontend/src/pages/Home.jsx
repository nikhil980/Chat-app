"use client";
import React from "react";
import { BackgroundBeams } from "../Ui/BackgroundBeam";
import SideBar from "../component/sidebar/SideBar";
import MessageContainer from "../component/message/MessageContainer";
// import Navbar from "../component/Navbar";

// import { NavbarDemo } from "../component/NaveBar";

 
export function Home() {
  return (
    <div className="h-screen w-full  rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
       
      <div className="flex h-screen w-screen  z-10 rounded-lg overflow-visible bg-gray-400 bg-clip-padding backdrop-filter  bg-opacity-0 ">
     
      <SideBar/>
      <MessageContainer/>
      </div>
      <BackgroundBeams/>
    </div>
  );
}