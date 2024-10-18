import Hero from "../components/component/Hero";
import Fliters from "../components/component/Fliters";
import FindHome from "../components/component/FindHome";
import AboutUs from "../components/component/AboutUs";
import Services from "../components/component/Services";
import Featured from "../components/component/features/Featured";
import Categories from "../components/component/categories/Categories";
import Testimonial from "../components/component/Testimonial";
import Brands from "../components/component/Brands";
import BlogPost from "../components/component/BlogPost";

const Home = () => {
  return (
    <>
      <Hero />
      <Fliters />
      <FindHome />
      <AboutUs />
      <Services />
      <Featured />
      <Categories />
      <Testimonial />
      <Brands />
      <BlogPost />
    </>
  );
};

export default Home;
