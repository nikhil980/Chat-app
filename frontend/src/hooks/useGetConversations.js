// import  { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
// import axios from "axios"
// const useGetConversations = () => {
 
//      const [loading,setloading]=useState(false);
//      const [conversations,setConversation]=useState([]);

//      useEffect(()=>{
//     const getConversation=async()=>{
//        setloading(true);
//         try{
//             // const res=await fetch("http://localhost:5000/api/users",{
//             //     credentials: 'include'
//             // });
//             const res = await axios.get('http://localhost:5000/api/users', 
//               { withCredentials: true // Include cookies with the request 
//                });

//             const data=await res.data;
           
//             console.log(data);
//             if(data.error)
//             {
//                 throw new Error(data.error);
//             }
//             setConversation(data);
//         }
//         catch(err)
//         {
//             toast.error(err.message);
//         }
//          finally{
//            setloading(false);
//          }
         
//     }
//     getConversation();
//      }, [])
//  return{loading,conversations};
// }

// export default useGetConversations;

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const useGetConversations = () => {
  const [loading,setloading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
     setloading(true);
      try {
        // const res = await fetch('http://localhost:5000/api/users', {
        //   credentials: 'include'// Include cookies with the request
        // });
        const res = await axios.get('http://localhost:5000/api/users', {
          withCredentials: true // Include cookies with the request
        });

        const data = res.data;

        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
       setloading(false);
      }
    };

    getConversation();
  }, []); // Ensure the dependency array is empty

  return { loading, conversations };
};

export default useGetConversations;
