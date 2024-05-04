import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  inventoryColumns,
  passengerColumns,
  flightColumns,
  revenueColumns,
  couponColumns,
} from "./constant";
import { useAdminAuth } from "../general/constant";
import "./index.css";

export const AdminHome = () => {
  const [flights, setFlights] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [passenger, setPassenger] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const navigate = useNavigate();
  const isAdminLoggedIn = useAdminAuth();
  const username = window.localStorage.getItem("user");
  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/");
    }
  }, [isAdminLoggedIn]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/flight")
      .then((res) => {
        setFlights(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/inventory")
      .then((res) => {
        setInventory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/passenger")
      .then((res) => {
        setPassenger(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/revenue")
      .then((res) => {
        setRevenue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3001/coupon")
      .then((res) => {
        setCoupon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="flight-main admin-main">
        <section className="service">
          <h3>Welcome - {username}</h3>
          <div className="row">
              <h1>Flights</h1>
              <Table
              bordered
                columns={flightColumns(flights)}
                dataSource={flights}
              />
          </div>

          <div className="row">
            <h1>Inventory</h1>
              <Table
              bordered
                columns={inventoryColumns(inventory)}
                dataSource={inventory}
              />
          </div>

          <div className="row">
              <h1>Passenger</h1>
              <Table
              bordered
                columns={passengerColumns(passenger)}
                dataSource={passenger}
              />
          </div>

          <div className="row">
            <h1>Revenue</h1>
              <Table
              bordered
                columns={revenueColumns(revenue)}
                dataSource={revenue}
              />
          </div>

          <div className="row">
            <h1>Discount Coupon</h1>
              <Table
              bordered
                columns={couponColumns(coupon)}
                dataSource={coupon}
              />
          </div>
        </section>
      </main>
    </>
  );
};
