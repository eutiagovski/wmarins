import { useState } from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Portfolio from "../../components/portfolio/Portfolio";

const Home = () => {
  const [hidden, setHidden] = useState('hidden')

  const handleScroll = async (e) => {
    if (document.documentElement.scrollTop > 430) {
      setHidden('show')
    }
  };



  return (
    <>
      <Header />
      {/* <About /> */}
      <Portfolio />
    </>
  );
};

export default Home;
