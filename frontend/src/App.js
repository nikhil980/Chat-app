import { Navigate, Route, Routes } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import { SignupForm } from './component/Signup';
import { LoginForm } from './component/Login';
import { Home } from './pages/Home';
import { useAuthContext } from './context/AuthContext';


function App() {
    const {authUser}=useAuthContext();
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={authUser?<Home/>:<LoginForm/>}/>   
          <Route path='/login' element={authUser?<Navigate to='/'/>:<LoginForm/>}/>  
          <Route path='/signup' element={authUser?<Navigate to='/'/>:<SignupForm/>}/>       
       </Routes>
   <Toaster/>
    </div>
  );
}

export default App;
