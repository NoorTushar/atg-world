import Posts from "../posts/Posts";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <Banner></Banner>
      </div>
      {/* post */}
      <div>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Home;
