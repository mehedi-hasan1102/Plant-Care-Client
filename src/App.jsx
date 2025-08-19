import { Outlet, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import DarkModeSidebar from "./Components/DarkModeSidebar";
import ScrollToTopButton from "./Components/ScrollToTopButton";




function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
    
      <Navbar />
       <DarkModeSidebar />
      {loading ? (
        <Loading />
      ) : (
       
        <Outlet />
      )}
     
      <ToastContainer position="top-center" autoClose={1000} />
      <ScrollToTopButton />
      <Footer />
      
    </>
  );
}

export default App;
