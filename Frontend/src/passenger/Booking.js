import React, { useEffect, useState } from "react";
import { useUserAuth } from "../general/constant";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import axios from "axios";
import { bookingColumns } from "./constant";

export const Booking = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();

  const [message, setMessage] = useState("");
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/flight")
      .then((res) => {
        const today = new Date().toISOString().split("T")[0];

        const futureFlights = res.data.filter((flight) => {
          const departureDate = new Date(flight.date);
          return departureDate >= new Date(today); 
        });

        setFlights(futureFlights);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="booking-main">
      <div className="booking-container-header">
        <h1 style={{ width: "100%" }}>Airtrack - Bookings</h1>
      </div>
      <p style={{ color: 'green', fontSize: '20px', textAlign: 'center' }}>{message}</p>

      <Table
        bordered
        columns={bookingColumns(flights, setFlights, setMessage)}
        dataSource={flights}
      />
    </main>
  );
};
