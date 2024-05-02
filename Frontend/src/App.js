import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContext, { AppProvider } from './AppContext';
import { Navbar } from "./general/Navbar";
import { Login } from "./general/Login";
import { About } from "./passenger/About";
import { Footer } from "./general/Footer";
import { Signup } from './passenger/Signup';
import { Contact } from './passenger/Contact';
import { Profile } from './passenger/Profile';
import { Flight } from './passenger/Flight';
import { Booking } from './passenger/Booking';
import { AdminNavbar } from './admin/AdminNavbar';
import { AdminHome } from './admin/AdminHome';
import { Management } from './admin/Management';
import { Home } from './passenger/Home';

function App() {
  return (
    <AppProvider>
      <Router>
        <AppContext.Consumer>
          {({ isAdmin }) => isAdmin ? <AdminNavbar /> : <Navbar />}
        </AppContext.Consumer>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/user/profile" element={<Profile />} />
          <Route exact path="/user/flight" element={<Flight />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/user/booking" element={<Booking />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/admin/management" element={<Management />} />
          <Route exact path="/user/home" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
