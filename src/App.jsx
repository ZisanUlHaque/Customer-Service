import { Suspense } from "react";
import "./App.css";
import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";


const fetchCard = async() => {
  const res = await fetch("./card.json")
  return res.json()
}
const cardPromise = fetchCard()
function App() {
  return (
    <>
      <Navbar></Navbar>

   

      <Suspense fallback={<span className="loading loading-ring loading-xl flex justify-center max-w[1000px] mx-auto"></span>}>
        <Cards cardPromise = {cardPromise}></Cards>
      </Suspense>

      <About></About>

      <Footer></Footer>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
