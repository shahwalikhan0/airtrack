import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { ticketColumns } from "./constant"
import { useUserAuth } from "../general/constant"
import { useNavigate } from "react-router-dom";
import "./flight.css";

export const Flight = () => {
  const [flights, setFlights] = useState([]);
  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn]);
  useEffect(() => {
    const fetchTicketsAndFlights = async () => {
        const ticketResponse = await axios.get("http://localhost:3001/ticket");
        const flightResponse = await axios.get("http://localhost:3001/flight");

        const passengerId = window.localStorage.getItem("passenger");

        const filteredTickets = ticketResponse.data.filter(
          (ticket) => ticket.passenger_id === passengerId
        );

        const filteredFlightIds = filteredTickets.map((ticket) => ticket.flight_id);

        const filteredFlights = flightResponse.data.filter((flight) =>
          filteredFlightIds.includes(flight._id)
        );

        setTickets(filteredTickets); 
        setFlights(filteredFlights); 
      
    };

    fetchTicketsAndFlights();
  }, []);
  return (
    <>
      <main className="flight-main">
        <div className="flight-container-header">
          <h1 style={{ width: '50%' }}>Airtrack - Flights</h1>
        </div>
        <Table
          bordered
          columns={ticketColumns(flights)}
          dataSource={flights}
        />
      </main>
    </>
  )
}