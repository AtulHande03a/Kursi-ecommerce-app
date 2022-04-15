import { Footer, Navbar } from "components";
import { Routes } from "routes/Routes";
import "./styles/styles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
