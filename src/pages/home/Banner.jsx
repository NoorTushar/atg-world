import bannerImg from "./../../assets/banner.png";

const Banner = () => {
   return (
      <section
         className="h-[440px] bg-cover bg-no-repeat bg-center bg relative"
         style={{
            backgroundImage: `url(${bannerImg})`,
         }}
      >
         {/* Overlay */}
         <div className="absolute w-full h-full bg-black bg-opacity-60 pointer-events-none"></div>
         {/* Banner Contents */}
         <div className="z-10 h-full absolute pl-6 pb-6  md:pl-40 md:pb-20">
            <div className="text-white text-start flex flex-col items-start justify-end h-full  px-6  ">
               <h1 className="text-[36px] font-bold">Computer Engineering</h1>
               <p className="text-lg text-white">
                  142,765 Computer Engineers follow this
               </p>
            </div>
         </div>
      </section>
   );
};

export default Banner;
