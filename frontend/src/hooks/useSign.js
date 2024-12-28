import  { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
// import axios from "axios";
const useSign = () => {
  const [loading, setloading] = useState(false);
  const {setAuthUser}=useAuthContext();
  
  const signup = async ({
    fullname,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputError({
      fullname,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setloading(true);
    try
    {
      const res=await fetch("http://localhost:5000/api/auth/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          fullname,
          username,
          password,
          confirmPassword,
          gender,
        }),
        credentials: 'include'
      })
    // const res =await axios.post("http://localhost:5000/api/auth/signup",{
    //         fullname,
    //         username,
    //         password,
    //         confirmPassword,
    //         gender,
    // })
    // // .then(response => {
    // //     console.log(response.data);
    // //     })
    // //     .catch(err => {
    // //         toast.error(err.message)
    // //     });
      const data=await res.json();
      if(data.error)
      {
        throw new Error(data.error);
      }
     //localstorage 
     localStorage.setItem("chat-user",JSON.stringify(data))
     //context
   setAuthUser(data);
    }
      catch(err)
      {
        toast.error(err.message)
      }
      finally{
        toast.success('Successfully Signup!');
        setloading(false);
      }
    
  };
  return {loading,signup};
};

export default useSign;

function handleInputError({
  fullname,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullname || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the field");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords is not match ");
    return false;
  }
  if (password.length<6)
  {
    toast.error("Password must be at least 6 character");
    return false;
  }
 
  return true;
}