import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
import { ModalComponent } from "./ModalComponent";
import { MANAGEMENT_ACTIONS, membershipColumns } from "./constant";
import "./index.css";

export const Management = () => {
  const [message, setMessage] = useState("");
  const [membership, setMembership] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/membership")
      .then((res) => {
        setMembership(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <main className="flight-main admin-main">
        <section className="service">
          <h3>Admin Management</h3>
          <p style={{color: 'green', fontSize: '20px'}}>{message}</p>
          <div className="row">
            <h3>Actions:</h3>
            <table>
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th className="center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Passenger</td>
                  <td className="center">
                    <ModalComponent
                      title="Grant Membership"
                      action={MANAGEMENT_ACTIONS.GRANT_MEMBERSHIP}
                      buttonText="Grant Membership"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter User ID:</label>
                          <input
                            type="text"
                            className="form-control"
                            id={MANAGEMENT_ACTIONS.GRANT_MEMBERSHIP}
                          />
                        </div>
                      }
                    />
                    <ModalComponent
                      action={MANAGEMENT_ACTIONS.REMOVE_PASSENGER}
                      title="Remove Passenger"
                      buttonText="Remove"
                      buttonType="danger"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter User ID:</label>
                          <input
                            type="text"
                            className="form-control"
                            id={MANAGEMENT_ACTIONS.REMOVE_PASSENGER}
                          />
                        </div>
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Flight</td>
                  <td className="center">
                    <ModalComponent
                      title="Add Flight"
                      action={MANAGEMENT_ACTIONS.ADD_FLIGHT}
                      buttonText="Add Flight"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Departure Airport:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="departure"
                          />
                          <label>Destination Airport:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="destination"
                          />
                          <label>Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                          />
                          <label>Total Seats:</label>
                          <input
                            type="number"
                            min={0}
                            className="form-control"
                            id="totalSeats"
                          />
                          <label>Price:</label>
                          <input
                            type="number"
                            min={0}
                            className="form-control"
                            id="price"
                          />
                        </div>
                      }
                    />
                    <ModalComponent
                      action={MANAGEMENT_ACTIONS.REMOVE_FLIGHT}
                      title="Remove Flight"
                      buttonText="Remove"
                      buttonType="danger"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Flight ID:</label>
                          <input
                            type="text"
                            className="form-control"
                            id={MANAGEMENT_ACTIONS.REMOVE_FLIGHT}
                          />
                        </div>
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Inventory</td>
                  <td className="center">
                    <ModalComponent
                      title="Add Inventory"
                      action={MANAGEMENT_ACTIONS.ADD_INVENTORY}
                      buttonText="Add Inventory"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Item Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="itemName"
                          />
                          <label>Quantity:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="itemQuantity"
                          />
                        </div>
                      }
                    />
                    <ModalComponent
                      action={MANAGEMENT_ACTIONS.UPDATE_INVENTORY}
                      title="Update Inventory"
                      buttonText="Update"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Item Id:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="updateItemName"
                          />
                          <label>Quantity:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="updateItemQuantity"
                          />
                        </div>
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Discount Coupon</td>
                  <td className="center">
                    <ModalComponent
                      title="Discount Coupon"
                      action={MANAGEMENT_ACTIONS.ADD_COUPON}
                      buttonText="Add Coupon"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Coupon Code:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="couponCode"
                          />
                          <label>Discount Percent:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="couponDiscount"
                          />
                        </div>
                      }
                    />
                    <ModalComponent
                      action={MANAGEMENT_ACTIONS.REMOVE_COUPON}
                      title="Remove Coupon"
                      buttonText="Remove"
                      buttonType="danger"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Coupon Code:</label>
                          <input
                            type="text"
                            className="form-control"
                            id={MANAGEMENT_ACTIONS.REMOVE_COUPON}
                          />
                        </div>
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Revenue</td>
                  <td className="center">
                    <ModalComponent
                      title="Add Revenue"
                      action={MANAGEMENT_ACTIONS.ADD_REVENUE}
                      buttonText="Add Revenue"
                      buttonType="primary"
                      setMessage={setMessage}
                      children={
                        <div className="form-group">
                          <label>Enter Revenue Type:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="revenueType"
                          />
                          <label>Amount:</label>
                          <input
                            type="number"
                            className="form-control"
                            id="revenueAmount"
                          />
                          <label>Date:</label>
                          <input
                            type="date"
                            className="form-control"
                            id="revenueDate"
                          />
                        </div>
                      }
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <h1>Membership Requests</h1>
            <Table
              pagination={false}
              bordered
              columns={membershipColumns(membership, setMembership)}
              dataSource={membership}
            />
          </div>
        </section>
      </main>
    </>
  );
};
