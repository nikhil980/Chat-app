import jwt from"jsonwebtoken";
import User from "../Models/userModels.js";



const protectRoute=async(req,res,next)=>{

    try{
      const token = req.cookies.jwts;

    //   const cookies = req.headers.cookie; 
    //   let token; 
    //   if (cookies) {
    //      const cookiesArray = cookies.split('; ');
    //      cookiesArray.forEach(cookie => { 
    //     const [name, value] = cookie.split('='); 
    //     if (name === 'jwts') { token = value; } 
    //   }); 
    // }

      // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzZhMzQzNTcwNjI2YTk5NmVmYzIyMTQiLCJpYXQiOjE3MzUwMjA2MDcsImV4cCI6MTczNjMxNjYwN30.oBH_WKJqNQHie9xtXtRoppZljRyiEGfJkSucT9XUUkc";
      console.log(token);
      if(!token){
        return res.status(401).json({error:"Unorthorized - No token Provided"});
      }
      const decoded=jwt.verify(token,"cb793b09b7fa71046b78d2331b52dcb20debc5644a90678fcddcb9ce1fdbdf623b8f3c4cf34b5430829e4575978bee68510cdb45eb54858d1203e9c3d301b031")
     
      if(!decoded){
        return res.status(401).json({error:"Unorthorized - Invalid Token"});
      }

      const user=await User.findById(decoded.userId).select("-password");

      if(!user){
       return  res.status(401).json({error:"User is Not Found"}); 
      }
     req.user=user;

     next();
    }  

    catch(error)
    {
        console.log("ERROR in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute;

