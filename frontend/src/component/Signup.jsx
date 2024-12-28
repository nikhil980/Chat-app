"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/utility";
import { Label } from "../Ui/Lable";
import { Input } from "../Ui/Input";
import useSign from "../hooks/useSign";
import { BackgroundBeamsWithCollision } from "../Ui/BackgroundBeamWithCollision";
import { BackgroundGradient } from "../Ui/BackgroundGradiant";
import GenderCheckbox from "./GenderCheckbox";
   
export function SignupForm() {
  const [input,setInput]=useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
  
  const{signup,loading}=useSign();
  const handleCheckBoxChange=(gender)=>{
    setInput({...input,gender})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
   console.log(input);
   await signup(input)
  };

  return (
 
    <BackgroundBeamsWithCollision>
     <BackgroundGradient className="rounded-[22px] max-w-screen-sm p-1 sm:p-1 bg-zinc-900">
    <div className="max-w-md z-0  w-full mx-auto rounded-[22px] md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
  
      <h1 className="font-bold p-3 text-4xl text-center text-neutral-200">
        Sign Up  
        <span className= "text-neutral-200"> Chat App</span>
      </h1>
    
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full name</Label>
            <Input id="firstname" placeholder="Enter Full name" type="text"
                 value={input.fullname}
                 onChange={(e)=>setInput({...input,fullname:e.target.value})}
            />
          </LabelInputContainer>
        
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Username">Username</Label>
          <Input id="email" placeholder="Enter Username" type="text"
            value={input.username}
            onChange={(e)=>setInput({...input,username:e.target.value})}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password"
             value={input.password}
             onChange={(e)=>setInput({...input,password:e.target.value})}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="twitterpassword" placeholder="••••••••" type="password" 
              value={input.confirmPassword}
              onChange={(e)=>setInput({...input,confirmPassword:e.target.value})}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="confirmPassword">Gender<GenderCheckbox oncheckboxchange={handleCheckBoxChange} selectedGender={input.gender}/></Label>
        
        </LabelInputContainer>
         <Link to='/login' className=' text-neutral-200  text-sm hover:underline hover:text-blue-300 mt-1 mb-1 inline-block'>Already have an account?</Link>
        
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
          {
             loading?<span className='loading loading-spinner'></span>:"Sign up →"
         }
          <BottomGradient />
        </button>
        
       
      </form>
     
    </div>
    </BackgroundGradient>
    </BackgroundBeamsWithCollision>
   
  
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
