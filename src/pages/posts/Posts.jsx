import groupIcon from "../../assets/group-logo.png";
import { IoMdArrowDropdown } from "react-icons/io";

import postUser1 from "./post1 Large Small.jpeg";
import postUser2 from "./post2 Large Small.jpeg";
import postUser3 from "./post3 Large Small.jpeg";
import postUser4 from "./post4 Large Small.jpeg";
import post1Banner from "./post1Img.jpeg";
import post2Banner from "./post2Img.jpeg";
import post3Banner from "./post3Img.jpeg";
import { BsThreeDots } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { RiCalendarEventFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";

const Posts = () => {
   return (
      <div className="max-w-[1040px] mx-auto md:w-[75%] w-[90%]">
         {/* post tabs and bth */}
         <div className="flex justify-between items-center  border-b mb-6">
            <div>
               <div role="tablist" className="tabs">
                  <a role="tab" className="tab">
                     All Posts(32)
                  </a>
                  <a role="tab" className="tab tab-active">
                     Article
                  </a>
                  <a role="tab" className="tab">
                     Event
                  </a>
                  <a role="tab" className="tab">
                     Education
                  </a>
                  <a role="tab" className="tab">
                     Job
                  </a>
               </div>
            </div>

            <div className="flex gap-3 items-center">
               <div className="dropdown dropdown-end rounded-none">
                  <div tabIndex={0} role="button" className="btn m-1 rounded">
                     Write a post <IoMdArrowDropdown />
                  </div>
                  <ul
                     tabIndex={0}
                     className="dropdown-content menu bg-[#EDEEF0] rounded-box z-[1] w-52 p-2 shadow"
                  >
                     <li>
                        <a>Item 1</a>
                     </li>
                     <li>
                        <a>Item 2</a>
                     </li>
                  </ul>
               </div>

               <div>
                  <button className="bg-[#2F6CE5] rounded text-white mx-auto w-40 h-12 flex items-center text-center gap-2 justify-center">
                     <img src={groupIcon} alt="" /> Join Group
                  </button>
               </div>
            </div>
         </div>
         {/* post tabs and bth */}

         {/* post and recommended group */}
         <div className="">
            {/* post cards */}
            {/* 1st card */}
            <div className="border rounded-lg">
               <img
                  className="h-[220px] w-full object-cover"
                  src={post1Banner}
                  alt=""
               />
               <div className="p-4 ">
                  <h4>✍️ Article</h4>
                  <div className="flex justify-between md:items-center items-start">
                     <h3 className="text-[22px] font-semibold my-2">
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                     </h3>
                     <div className="dropdown dropdown-end rounded-none">
                        <div
                           tabIndex={0}
                           role="button"
                           className="font-bold text-2xl btn bg-white m-1 border-none rounded"
                        >
                           <BsThreeDots />
                        </div>
                        <ul
                           tabIndex={0}
                           className="dropdown-content bg-white menu border rounded-box z-[1] w-52 p-2"
                        >
                           <li>
                              <a>Edit</a>
                           </li>
                           <li>
                              <a>Report</a>
                           </li>
                           <li>
                              <a>Option3</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <p className="text-[#5C5C5C]">
                     I’ve worked in UX for the better part of a decade. From now
                     on, I plan to rei…
                  </p>
                  <div className="flex justify-between mt-8">
                     <div className="flex items-center gap-2.5">
                        <img
                           src={postUser1}
                           className="rounded-full size-12 object-cover"
                           alt=""
                        />
                        <div>
                           <h3 className="text-lg font-medium">
                              Sarthak Kamra
                           </h3>
                           <p className="text-sm text-[#525252] md:hidden flex  items-center gap-1.5">
                              1.4k views
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <p className="text-sm text-[#525252] hidden md:flex  items-center gap-1.5">
                           <FaRegEye /> 1.4k views
                        </p>
                        <button className="btn-sm btn text-lg md:hidden items-center flex gap-2">
                           <IoShareSocial />{" "}
                           <span className="font-normal text-sm">Share</span>
                        </button>
                        <button className="btn-sm btn text-lg hidden md:block">
                           <IoShareSocial />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 2nd card */}
            <div className="border rounded-lg">
               <img
                  className="h-[220px] w-full object-cover"
                  src={post2Banner}
                  alt=""
               />
               <div className="p-4 ">
                  <h4>🔬️ Education</h4>
                  <div className="flex justify-between md:items-center items-start">
                     <h3 className="text-[22px] font-semibold my-2">
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                     </h3>
                     <div className="dropdown dropdown-end rounded-none">
                        <div
                           tabIndex={0}
                           role="button"
                           className="font-bold text-2xl btn bg-white m-1 border-none rounded"
                        >
                           <BsThreeDots />
                        </div>
                        <ul
                           tabIndex={0}
                           className="dropdown-content bg-white menu border rounded-box z-[1] w-52 p-2"
                        >
                           <li>
                              <a>Edit</a>
                           </li>
                           <li>
                              <a>Report</a>
                           </li>
                           <li>
                              <a>Option3</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <p className="text-[#5C5C5C]">
                     I’ve worked in UX for the better part of a decade. From now
                     on, I plan to rei…
                  </p>
                  <div className="flex justify-between mt-8">
                     <div className="flex items-center gap-2.5">
                        <img
                           src={postUser2}
                           className="rounded-full size-12 object-cover"
                           alt=""
                        />
                        <div>
                           <h3 className="text-lg font-medium">
                              Sarthak Kamra
                           </h3>
                           <p className="text-sm text-[#525252] md:hidden flex  items-center gap-1.5">
                              4.8k views
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <p className="text-sm text-[#525252] hidden md:flex  items-center gap-1.5">
                           <FaRegEye /> 1.4k views
                        </p>
                        <button className="btn-sm btn text-lg md:hidden items-center flex gap-2">
                           <IoShareSocial />{" "}
                           <span className="font-normal text-sm">Share</span>
                        </button>
                        <button className="btn-sm btn text-lg hidden md:block">
                           <IoShareSocial />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 3rd card */}
            <div className="border rounded-lg">
               <img
                  className="h-[220px] w-full object-cover"
                  src={post3Banner}
                  alt=""
               />
               <div className="p-4 ">
                  <h4>🗓️ Meetup</h4>
                  <div className="flex justify-between md:items-center items-start">
                     <h3 className="text-[22px] font-semibold my-2">
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                     </h3>
                     <div className="dropdown dropdown-end rounded-none">
                        <div
                           tabIndex={0}
                           role="button"
                           className="font-bold text-2xl btn bg-white m-1 border-none rounded"
                        >
                           <BsThreeDots />
                        </div>
                        <ul
                           tabIndex={0}
                           className="dropdown-content bg-white menu border rounded-box z-[1] w-52 p-2"
                        >
                           <li>
                              <a>Edit</a>
                           </li>
                           <li>
                              <a>Report</a>
                           </li>
                           <li>
                              <a>Option3</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-10">
                     <div className="flex items-center gap-2">
                        <RiCalendarEventFill />
                        <span>Fri, 12 Oct, 2018</span>
                     </div>

                     <div className="flex items-center gap-2">
                        <MdOutlineLocationOn />
                        <span>Ahmedabad, India</span>
                     </div>
                  </div>
                  <button className="border border-gray-300 rounded-xl w-full py-2.5 text-[#E56135] text-sm font-semibold mt-4">
                     Visit Website
                  </button>
                  <div className="flex justify-between mt-8">
                     <div className="flex items-center gap-2.5">
                        <img
                           src={postUser3}
                           className="rounded-full size-12 object-cover"
                           alt=""
                        />
                        <div>
                           <h3 className="text-lg font-medium">Ronal Jones</h3>
                           <p className="text-sm text-[#525252] md:hidden flex  items-center gap-1.5">
                              800 views
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <p className="text-sm text-[#525252] hidden md:flex  items-center gap-1.5">
                           <FaRegEye /> 1.4k views
                        </p>
                        <button className="btn-sm btn text-lg md:hidden items-center flex gap-2">
                           <IoShareSocial />{" "}
                           <span className="font-normal text-sm">Share</span>
                        </button>
                        <button className="btn-sm btn text-lg hidden md:block">
                           <IoShareSocial />
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 4th card */}
            <div className="border rounded-lg">
               <div className="p-4 ">
                  <h4>💼️ Job</h4>
                  <div className="flex justify-between md:items-center items-start">
                     <h3 className="text-[22px] font-semibold my-2">
                        Software Developer
                     </h3>
                     <div className="dropdown dropdown-end rounded-none">
                        <div
                           tabIndex={0}
                           role="button"
                           className="font-bold text-2xl btn bg-white m-1 border-none rounded"
                        >
                           <BsThreeDots />
                        </div>
                        <ul
                           tabIndex={0}
                           className="dropdown-content bg-white menu border rounded-box z-[1] w-52 p-2"
                        >
                           <li>
                              <a>Edit</a>
                           </li>
                           <li>
                              <a>Report</a>
                           </li>
                           <li>
                              <a>Option3</a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 md:gap-10">
                     <div className="flex items-center gap-2">
                        <RiCalendarEventFill />
                        <span>Innovaccer Analytics Private Ltd.</span>
                     </div>

                     <div className="flex items-center gap-2">
                        <MdOutlineLocationOn />
                        <span>Noida, India</span>
                     </div>
                  </div>
                  <button className="border border-gray-300 rounded-xl w-full py-2.5 text-[#02B875] text-sm font-semibold mt-4">
                     Apply on Timesjobs
                  </button>
                  <div className="flex justify-between mt-8">
                     <div className="flex items-center gap-2.5">
                        <img
                           src={postUser4}
                           className="rounded-full size-12 object-cover"
                           alt=""
                        />
                        <div>
                           <h3 className="text-lg font-medium">Joseph Gray</h3>
                           <p className="text-sm text-[#525252] md:hidden flex  items-center gap-1.5">
                              1.7k views
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-center">
                        <p className="text-sm text-[#525252] hidden md:flex  items-center gap-1.5">
                           <FaRegEye /> 1.4k views
                        </p>
                        <button className="btn-sm btn text-lg md:hidden items-center flex gap-2">
                           <IoShareSocial />{" "}
                           <span className="font-normal text-sm">Share</span>
                        </button>
                        <button className="btn-sm btn text-lg hidden md:block">
                           <IoShareSocial />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Posts;

const posts = [
   {
      category: "✍️ Article",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      description:
         "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: {
         image: postUser1,
         name: "Sarthak Kamra",
      },
      views: "1.4k",
   },
   {
      category: "🔬️ Education",
      title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
         "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: {
         image: postUser2,
         name: "Sarthak Kamra",
      },
      views: "1.4k",
   },
];
