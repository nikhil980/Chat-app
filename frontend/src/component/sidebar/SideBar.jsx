import Convertations from "./Convertations";
import Logout from "./Logout";
import SearchInput from "./SearchInput";


const SideBar = () => {
  return (
    <div className="border-r  w-52 lg:w-72  border-slate-500 p-4 flex flex-col">
    <SearchInput/>
      <div className='divider px-3'></div>
      <Convertations/>
      <Logout/>
    </div>
  )
}

export default SideBar;