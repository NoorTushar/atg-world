import logo from "./../assets/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
const Navbar = () => {
   return (
      <div>
         <div className="navbar bg-base-100 md:px-10 w-full">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Parent</a>
                        <ul className="p-2">
                           <li>
                              <a>Submenu 1</a>
                           </li>
                           <li>
                              <a>Submenu 2</a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a>Item 3</a>
                     </li>
                  </ul>
               </div>
               <a href="/" className="text-xl cursor-pointer">
                  <img src={logo} alt="logo" />
               </a>
            </div>
            <div className="navbar-center hidden lg:flex py-2">
               <div className=" flex items-center w-96 gap-4 p-2 px-4 rounded-full bg-[#F2F2F2]">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="#7A7A7A"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                     />
                  </svg>
                  <input
                     type="text"
                     className="w-full outline-none bg-[#F2F2F2] border-none text-[#5C5C5C]"
                     placeholder="Search for your favorite groups in ATG"
                  />
               </div>
            </div>
            <div className="navbar-end">
               <div className="flex items-center">
                  Create account. <button>It's free!</button>{" "}
                  <IoMdArrowDropdown />{" "}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
