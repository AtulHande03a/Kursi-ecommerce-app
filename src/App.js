import { Footer, Navbar } from "components";
import { Routes } from "routes/Routes";
import "./styles/styles.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
