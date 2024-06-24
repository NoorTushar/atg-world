import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { FaPencilAlt } from "react-icons/fa";
import CreateAccountForm from "../components/CreateAccountForm/CreateAccountForm";
import SignIn from "../components/SignIn/SignIn";

const MainLayout = () => {
   return (
      <div>
         <div>
            <Navbar></Navbar>
         </div>
         <div>
            <Outlet></Outlet>
         </div>
         <div></div>
         <button className="rounded-full md:hidden fixed bottom-8 right-8 bg-[#FF6B6B] text-white p-3.5 z-50">
            <FaPencilAlt className="text" />
         </button>
         <CreateAccountForm />
         <SignIn />
      </div>
   );
};

export default MainLayout;
