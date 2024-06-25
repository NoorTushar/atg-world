import createAccountBG from "../../assets/atg_illustration.png";
import { FaEye } from "react-icons/fa";
import fbIcon from "../../assets/f_logo_RGB-Blue_1024.png";
import googleIcon from "../../assets/search.png";
import cancelLogo from "../../assets/baseline-cancel-24px.svg";
import cancelLogoGrey from "../../assets/cancel-button-gray.svg";
import { IoCloseSharp } from "react-icons/io5";

const CreateAccountForm = ({
   closeCreateModal,
   isCreateModalOpen,
   openSignInModal,
}) => {
   console.log(isCreateModalOpen);
   return (
      isCreateModalOpen && (
         <div className="min-h-screen w-full  bg-black   flex items-end md:items-center justify-center bg-opacity-80 fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            <div className="bg-white max-w-[750px] w-full  rounded-xl relative">
               {/* <img
            onClick={closeCreateModal}
            src={cancelLogoGrey}
            alt=""
            fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30
            className="absolute -right-7 -top-7 hidden md:block
                  cursor-pointer"
          /> */}
               <IoCloseSharp
                  className="absolute -right-7 bg-white rounded-full  text-2xl font-bold -top-6 hidden md:block
                  cursor-pointer"
                  onClick={closeCreateModal}
                  src={cancelLogoGrey}
               />
               <p className="bg-[#EFFFF4] text-[#008A45] text-center text-sm font-medium p-4 overflow-hidden hidden md:block rounded-t-lg">
                  Let`s learn, share & inspire each other with our passion for
                  computer engineering. Sign up now 🤘🏼￼
               </p>
               <div className="p-5 md:p-10 ">
                  <div className="flex justify-between items-center">
                     <h2 className="font-bold text-lg md:text-[24px]">
                        Create Account
                     </h2>

                     {/* only visible from medium screen */}
                     <p className="text-[#3D3D3D] hidden md:block">
                        Already have an account?{" "}
                        <button
                           onClick={openSignInModal}
                           className="text-[#2F6CE5] font-semibold"
                           href=""
                        >
                           Sign In
                        </button>
                     </p>

                     {/* close button only in small screen */}
                     <div className="md:hidden" onClick={closeCreateModal}>
                        <img
                           className="cursor-pointer"
                           src={cancelLogo}
                           alt=""
                        />
                     </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                     <div className="h-full">
                        <form className=" mt-6">
                           <div className="grid grid-cols-2">
                              <div>
                                 <input
                                    type="text"
                                    placeholder="First Name"
                                    className="bg-[#F7F8FA] border border-[#D9D9DB] outline-none py-3 md:py-4 px-3 w-full text-[13px] md:text-base"
                                 />
                              </div>
                              <div>
                                 <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="bg-[#F7F8FA] border border-[#D9D9DB] outline-none py-3 md:py-4 px-3 w-full text-[13px] md:text-base"
                                 />
                              </div>
                           </div>
                           <div className=" w-full">
                              <input
                                 type="email"
                                 placeholder="Email"
                                 className="bg-[#F7F8FA] border border-[#D9D9DB] outline-none py-3 md:py-4 px-3 w-full text-[13px] md:text-base"
                              />
                           </div>
                           <div className=" w-full relative">
                              <input
                                 type="password"
                                 placeholder="Password"
                                 className="bg-[#F7F8FA] border border-[#D9D9DB] outline-none py-3 md:py-4 px-3 w-full text-[13px] md:text-base"
                              />
                              <FaEye className="text-[#8A8A8A] text-xl cursor-pointer absolute right-6 top-1/2 -translate-y-1/2" />
                           </div>
                           <div className=" w-full relative">
                              <input
                                 type="password"
                                 placeholder="Confirm Password"
                                 className="bg-[#F7F8FA] border border-[#D9D9DB] outline-none py-3 md:py-4 px-3 w-full text-[13px] md:text-base"
                              />
                           </div>

                           <div className="grid grid-cols-2 md:grid-cols-1 items-center justify-between">
                              <button className="bg-[#2F6CE5] w-full rounded-3xl text-white py-3 text-sm font-semibold my-6">
                                 Create Account
                              </button>

                              {/* only visible in small devices */}
                              <div className="text-end md:hidden">
                                 <button
                                    className="text-[#495057] font-medium underline"
                                    onClick={openSignInModal}
                                 >
                                    or, Sign In
                                 </button>
                              </div>
                           </div>
                        </form>
                        {/* Social Logins */}
                        <div className="space-y-2">
                           {/* Facebook Login */}
                           <button className="rounded-lg border-[0.8px] py-3 w-full border-[#D9D9DB] flex justify-center items-center gap-2 text-sm">
                              <img src={fbIcon} alt="" /> Sign up with Facebook
                           </button>
                           {/* Google Login */}
                           <button className="rounded-lg border-[0.8px] py-3 w-full border-[#D9D9DB] flex justify-center items-center gap-2 text-sm">
                              <img src={googleIcon} alt="" /> Sign up with
                              Google
                           </button>
                        </div>
                     </div>
                     <div className="h-full">
                        <div className="flex flex-col h-full">
                           <div className="flex-1 p-10 hidden md:block">
                              <img
                                 src={createAccountBG}
                                 className="w-full h-full object-cover "
                                 alt=""
                              />
                           </div>
                           <p className="opacity-[0.6] text-[11px] text-center">
                              By signing up, you agree to our Terms &
                              conditions, Privacy policy
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   );
};

export default CreateAccountForm;
