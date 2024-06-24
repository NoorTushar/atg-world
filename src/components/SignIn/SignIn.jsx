import createAccountBG from "../../assets/atg_illustration.png";
import { FaEye } from "react-icons/fa";
import fbIcon from "../../assets/f_logo_RGB-Blue_1024.png";
import googleIcon from "../../assets/search.png";
import cancelLogo from "../../assets/baseline-cancel-24px.svg";
import cancelLogoGrey from "../../assets/cancel-button-gray.svg";

const SignIn = () => {
   return (
      <div className="min-h-screen bg-black flex items-end md:items-center justify-center bg-opacity-80 ">
         <div className="bg-white max-w-[750px] w-full  rounded-xl relative">
            <img
               src={cancelLogoGrey}
               alt=""
               className="absolute -right-7 -top-7 hidden md:block"
            />
            <p className="bg-[#EFFFF4] text-[#008A45] text-center text-sm font-medium p-4 overflow-hidden rounded-t-lg hidden md:block">
               Let`s learn, share & inspire each other with our passion for
               computer engineering. Sign up now 🤘🏼
            </p>
            <div className="p-5 md:p-10 ">
               <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg md:text-[24px]">
                     Welcome Back!
                  </h2>

                  {/* only visible from medium screen */}
                  <p className="text-[#3D3D3D] hidden md:block">
                     Don’t have an account yet?{" "}
                     <a className="text-[#2F6CE5] font-semibold" href="">
                        Create new for free!
                     </a>
                  </p>

                  {/* close button only in small screen */}
                  <div className="md:hidden">
                     <img className="cursor-pointer" src={cancelLogo} alt="" />
                  </div>
               </div>
               <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="h-full">
                     <form className=" mt-6">
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

                        <div className="grid grid-cols-2 md:grid-cols-1 items-center justify-between">
                           <button className="bg-[#2F6CE5] w-full rounded-3xl text-white py-3 text-sm font-semibold my-6">
                              Sign In
                           </button>

                           {/* only visible in small devices */}
                           <div className="text-end md:hidden">
                              <a
                                 className="text-[#495057] font-medium underline"
                                 href=""
                              >
                                 or, Create Account
                              </a>
                           </div>
                        </div>
                     </form>
                     {/* Social Logins */}
                     <div className="space-y-2">
                        {/* Facebook Login */}
                        <button className="rounded-lg border-[0.8px] py-3 w-full border-[#D9D9DB] flex justify-center items-center gap-2 text-sm">
                           <img src={fbIcon} alt="" /> Sign in with Facebook
                        </button>
                        {/* Google Login */}
                        <button className="rounded-lg border-[0.8px] py-3 w-full border-[#D9D9DB] flex justify-center items-center gap-2 text-sm">
                           <img src={googleIcon} alt="" /> Sign in with Google
                        </button>
                     </div>

                     {/* Forgot password? */}
                     <div className="text-center mt-6">
                        <button className="text-[12px] font-medium">
                           Forgot Password?
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
