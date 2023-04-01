import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./general/Navbar";
import { Login } from "./general/Login";
import { About } from "./passenger/About";
import { Footer } from "./general/Footer";
import { Signup } from './passenger/Signup';
import { Contact } from './passenger/Contact';
import { Profile } from './passenger/Profile';
import { Flight } from './passenger/Flight';
import { Booking } from './passenger/Booking';

export const MyContext = createContext();
function App() {
  const [isLogged, setIsLogged] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isLogged);
  return (
    <MyContext.Provider value={{ isLogged, setIsLogged, isAdmin, setIsAdmin }}>
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/user/profile" element={<Profile/>} />
          <Route exact path="/user/flight" element={<Flight/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/user/booking" element={<Booking/>} />
        </Routes>
      <Footer/>
    </Router>
    </MyContext.Provider>
  );
}

export default App;