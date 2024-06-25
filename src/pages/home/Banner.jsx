import bannerImg from "./../../assets/banner.png";

const Banner = () => {
   return (
      <section
         className="md:h-[440px] h-[260px] bg-cover bg-no-repeat bg-center bg relative"
         style={{
            backgroundImage: `url(${bannerImg})`,
         }}
      >
         {/* Overlay */}
         <div className="absolute w-full h-full bg-black bg-opacity-60 pointer-events-none"></div>
         {/* Banner Contents */}
         <div className="z-10 h-full absolute pb-10  md:pl-40 md:pb-20 ">
            <div className="text-white text-start flex flex-col items-start justify-end h-full  px-6  ">
               <h1 className="md:text-[36px] text-xl font-bold">
                  Computer Engineering
               </h1>
               <p className="md:text-lg text-base text-white">
                  142,765 Computer Engineers follow this
               </p>
            </div>
         </div>
      </section>
   );
};

export default Banner;
