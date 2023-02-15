import BaseLayout from "../../layouts/base/BaseLayout";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <BaseLayout>
        <Header />
        <Portfolio />
      </BaseLayout>
    </>
  );
};

export default Home;
