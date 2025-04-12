import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/loader';
import Navbar from './components/Navbar';
import Hero from './components/hero'; // Ensure correct import path
import Footer from './components/Footer'; // Import Footer component
import AboutUs from './components/AboutUs'; // Import AboutUs component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate loading completion
    }, 2000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar className="navbar-top" />
      <div className="App">
        <Hero />
        <AboutUs /> {/* Add About Us section */}
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
}

export default App;
