import Foo from "./foo";
import Header from "../components/header/header";

const Home = () => (
  <main className="top-left w-full">
    <Header />
    <Foo />
    <h1>Home</h1>
    <p>Home page content</p>
  </main>
);

export default Home;
