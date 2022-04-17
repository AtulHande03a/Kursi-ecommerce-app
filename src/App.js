import { Footer, Navbar } from "components";
import { Routes } from "routes/Routes";
import "./styles/styles.css";
import { ToastContainer, Zoom } from "react-toastify";

const App = () => {
  console.log("hello");
  return (
    <>
      {/* <ToastContainer
        theme="colored"
        position="top-right"
        transition={Zoom}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      /> */}
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
