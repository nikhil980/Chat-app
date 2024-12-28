"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/utility";
import { Label } from "../Ui/Lable";
import { Input } from "../Ui/Input";
import {BackgroundLines } from "../Ui/Background";
import { BackgroundGradient } from "../Ui/BackgroundGradiant";
import useLogin from "../hooks/useLogin";
 
export  function LoginForm () {
const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const {loading,login}=useLogin();
  const handleSubmit = async(e) => {
    e.preventDefault();
   console.log({username,password});
   await login(username,password);
  };
 
  return (
 
    <BackgroundLines className="flex  items-center justify-center h-screen w-full flex-row px-4">
 
     <BackgroundGradient className="rounded-[22px] max-w-screen-sm p-1 sm:p-1 bg-zinc-900">
    <div className="max-w-md z-0   w-full mx-auto rounded-[22px] md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
  
      <h1 className="font-bold p-3 text-4xl text-center text-neutral-200">
       Login
        <span className= "text-neutral-200"> Chat App</span>
      </h1>
    
      <form className="my-8" onSubmit={handleSubmit}>
      
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Username">Username</Label>
          <Input id="email" placeholder="Enter Username" type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
          />
        </LabelInputContainer>
        <Link to='/signup' className=' text-neutral-200  text-sm hover:underline hover:text-blue-300 mt-1 mb-1 inline-block'>{"Dont't"} have an account?</Link>
       
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
              {
             loading ?<span className='loading loading-spinner'></span>: `Login →`
         }
          <BottomGradient />
        </button>
        
       
      </form>
     
    </div>
    </BackgroundGradient>
    </BackgroundLines>
   
  
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};