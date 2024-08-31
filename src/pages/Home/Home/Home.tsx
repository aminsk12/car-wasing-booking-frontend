import Banner from "../Banner/Banner";
import ReviewForm from "../Reviews/ReviewForm";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Location from "@/pages/Location/Location";
import ScrollToTopButton from "@/components/ScrolleUpToBottom/ScrolleUpToBottom";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedServices></FeaturedServices>
      <Hero></Hero>
      <ReviewForm></ReviewForm>
      <div style={{ backgroundColor: "#000000" }}>
        <Location />
      </div>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Home;
