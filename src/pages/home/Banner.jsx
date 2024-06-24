import bannerImg from "./../../assets/banner.png";

const Banner = () => {
  return (
    <div
      className="hero h-[440px] object-cover w-full"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-white ">
        <div className="max-w-5xl flex justify-end flex-col absolute left-56">
          <h1 className="mb-5 text-4xl  font-bold">Computer Engineering</h1>
          <p className="mb-5">142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
