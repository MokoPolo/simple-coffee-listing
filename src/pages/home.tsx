import Foo from "./foo";
import Header from "../components/header/header";
import CoffeeList from "../components/coffee/coffee-list";

const Home = () => (
  <main className="">
    <Header />
    {/* <Foo /> */}
    <CoffeeList />
  </main>
);

export default Home;
