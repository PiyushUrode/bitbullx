
import Headroom from 'react-headroom'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react'
import { Suspense } from 'react'
import Presale from './Pages/Presale'

// Loading spinner component
const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

    <main id="container">
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="dots2">
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
        <div className="dot2" />
      </div>
      <div className="circle" />
    </main>



  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(delay);
  }, [])

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Headroom>
          <Navbar />
        </Headroom>

        <Routes>

          <Route path="*" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <Navigate to="/" />
            </Suspense>
          } />

          <Route path="/" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/Presale" element={
            <Suspense fallback={isLoading ? <Loader /> : null}>
              <Presale />
            </Suspense>
          } />
         


        </Routes>



        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
