import Foo from "./foo";
import Header from "../components/header/header";
import CoffeeList from "../components/coffee/coffee-list";
import CoffeeResults from "../components/coffee/coffeeResults";

const Home = () => (
  <main className="">
    <Header />
    {/* <Foo /> */}
    {/* <CoffeeResults /> */}
    <CoffeeList />
  </main>
);

export default Home;
