import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { flightColumns } from "../admin/constant"
import { useUserAuth } from "../general/constant"
import { useNavigate } from "react-router-dom";
import "./flight.css";

export const Flight = () => {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();
  const isUserLoggedIn = useUserAuth();
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/flight")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <main className="flight-main">
        <div className="flight-container-header">
          <h1 style={{ width: '50%' }}>Airtrack - Flights</h1>
        </div>
        <Table
          bordered
          columns={flightColumns(flights)}
          dataSource={flights}
        />
      </main>
    </>
  )
}