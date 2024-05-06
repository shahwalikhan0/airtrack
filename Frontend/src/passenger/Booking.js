import React, { useEffect, useState } from "react";
import { useUserAuth } from "../general/constant";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import axios from "axios";
import { bookingColumns, flightColumns, passengerColumns } from "../admin/constant";

export const Booking = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();

  const [flights, setFlights] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/flight")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:3001/passenger")
      .then((res) => {
        setPassengers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="booking-main">
      <div className="booking-container-header">
        <h1 style={{ width: "50%" }}>Airtrack - Bookings</h1>
      </div>
      <Table
        bordered
        columns={bookingColumns(flights, passengers)} // Pass flights and passengers to bookingColumns
        dataSource={flights} 
      />
    </main>
  );
};
