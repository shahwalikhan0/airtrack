import React, { useState, useEffect } from "react";
import axios from "axios";
import { MANAGEMENT_ACTIONS } from "./constant";
import { Button, Modal } from "antd";

export const ModalComponent = ({
  title,
  children,
  buttonText,
  action,
  buttonType,
  setMessage,
}) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [sendCall, setSendCall] = useState(false);

  useEffect(() => {
    if (sendCall === false) return;
    let url = "",
      isRemoveCall = 0;
    if (
      action === MANAGEMENT_ACTIONS.REMOVE_FLIGHT ||
      action === MANAGEMENT_ACTIONS.REMOVE_PASSENGER ||
      action === MANAGEMENT_ACTIONS.REMOVE_COUPON
    ) {
      url = `http://localhost:3001/${action}/${data?.value}`;
      isRemoveCall = 1;
    } else if (action === MANAGEMENT_ACTIONS.GRANT_MEMBERSHIP) {
        url = `http://localhost:3001/${action}/${data?.value}`;
        isRemoveCall = 2;
    }
    else if (action === MANAGEMENT_ACTIONS.UPDATE_INVENTORY) {
        url = `http://localhost:3001/${action}/${data?.id}`;
        isRemoveCall = 2;
    }
     else url = `http://localhost:3001/${action}`;

    if (isRemoveCall === 0) {
      axios
        .post(url, data)
        .then((res) => {
          console.log(res.data);
          setSendCall(false);
          setMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          setSendCall(false);
          setMessage(err.response.data.message);
        });
    } else if (isRemoveCall === 1) {
      axios
        .delete(url)
        .then((res) => {
          console.log(res.data);
          setSendCall(false);
            setMessage(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          setSendCall(false);
            setMessage(err.response.data.message);
        });
    }
    else if (isRemoveCall === 2) {
        axios
          .put(url, data)
          .then((res) => {
            console.log(res.data);
            setSendCall(false);
            setMessage(res.data.message);
          })
          .catch((err) => {
            console.log(err);
            setSendCall(false);
            setMessage(err.response.data.message);
          });
      }
  }, [sendCall]);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    if (action == MANAGEMENT_ACTIONS.ADD_FLIGHT) {
      const departure = document.getElementById("departure").value;
      const destination = document.getElementById("destination").value;
      const date = document.getElementById("date").value;
      const price = document.getElementById("price").value;
      const seats = document.getElementById("totalSeats").value;

      setData({
        departure: departure,
        destination: destination,
        date: date,
        price: price,
        seats: seats,
      });
    } else if (action == MANAGEMENT_ACTIONS.ADD_INVENTORY) {
      const itemName = document.getElementById("itemName").value;
      const itemQuantity = document.getElementById("itemQuantity").value;
      setData({
        item_name: itemName,
        quantity: itemQuantity,
      });
    } else if (action == MANAGEMENT_ACTIONS.UPDATE_INVENTORY) {
      const id = document.getElementById("updateItemName").value;
      const itemQuantity = document.getElementById("updateItemQuantity").value;
      setData({
        id: id,
        quantity: itemQuantity,
      });
    } else if (action == MANAGEMENT_ACTIONS.ADD_REVENUE) {
      const revenueType = document.getElementById("revenueType").value;
      const revenueDate = document.getElementById("revenueDate").value;
      const revenueAmount = document.getElementById("revenueAmount").value;
      setData({
        type: revenueType,
        date: revenueDate,
        amount: revenueAmount,
      });
    } else if (action == MANAGEMENT_ACTIONS.ADD_COUPON) {
      const couponCode = document.getElementById("couponCode").value;
      const couponDiscount = document.getElementById("couponDiscount").value;
      setData({
        discountCode: couponCode,
        discount_percent: couponDiscount,
      });
    } else {
      const value = document.getElementById(action).value;
      setData({
        value: value,
      });
    }
    setSendCall(!sendCall);
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        danger={buttonType == "danger" ? true : false}
      >
        {buttonText}
      </Button>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};
