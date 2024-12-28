import  { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const useLogout = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setloading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: 'include'
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (err) {
      toast.error(err.message);
    } finally {
      toast.success('Successfully Logout!');
      setloading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
