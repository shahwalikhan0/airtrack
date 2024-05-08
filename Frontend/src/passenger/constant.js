import React from "react";
import axios from "axios";
import { Button } from "antd";
import { flightColumns } from "../admin/constant";

export const bookingColumns = (flights, setFlights, setMessage) => {
    const handleBookAction = (data) => {
        if (data?.seats_remaining <= 0) {

            setMessage("No seats remaining")
            return;
        }
        const { passenger } = window.localStorage;
        const sendData = {
            passenger_id: passenger,
            flight_id: data._id
        }
        axios
            .put("http://localhost:3001/ticket", sendData)
            .then((res) => {
                setMessage(res.data.message);
                const updatedFlights = flights.map((flight) => {
                    if (flight._id === data._id) {
                        flight.seats_remaining -= 1;
                    }
                    return flight;
                });
                setFlights(updatedFlights);
            })
            .catch((err) => {
                console.log(err);
                setMessage(err.response.data.message);
                return;
            });
        axios
            .put(`http://localhost:3001/updateFlight/${data?._id}`, sendData.flight_id)
            .then((res) => {
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const flightColumnsConfig = flightColumns(flights);

    const departureFilters = flightColumnsConfig.find(
        (col) => col.dataIndex === 'departure'
    ).filters;

    const destinationFilters = flightColumnsConfig.find(
        (col) => col.dataIndex === 'destination'
    ).filters;

    return [
        {
            title: "Booking ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Departure",
            dataIndex: "departure",
            key: "departure",
            filters: departureFilters,
            filterMode: "multiple",
            filterSearch: true,
            onFilter: (value, record) => record.departure.includes(value),
        },
        {
            title: "Destination",
            dataIndex: "destination",
            key: "destination",
            filterMode: "multiple",
            filterSearch: true,
            filters: destinationFilters,
            onFilter: (value, record) => record.destination.includes(value),
        },
        {
            title: "Flight Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },
        {
            title: "Seats Remaining",
            dataIndex: "seats_remaining",
            key: "seats_remaining",
            sorter: (a, b) => a.seats_remaining - b.seats_remaining,
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: "Book Seat",
            key: "action",
            render: (text, record) => (
                <Button
                    type="primary"
                    onClick={() => handleBookAction(record)}
                >
                    Book
                </Button>
            ),
        },
    ]
}
export const ticketColumns = (flights) => {
    const flightColumnsConfig = flightColumns(flights);

    const departureFilters = flightColumnsConfig.find(
        (col) => col.dataIndex === 'departure'
    ).filters;

    const destinationFilters = flightColumnsConfig.find(
        (col) => col.dataIndex === 'destination'
    ).filters;

    return [
        {
            title: "Flight ID",
            dataIndex: "_id",
            key: "_id",
        },
        {
            title: "Departure",
            dataIndex: "departure",
            key: "departure",
            filters: departureFilters,
            filterMode: "multiple",
            filterSearch: true,
            onFilter: (value, record) => record.departure.includes(value),
        },
        {
            title: "Destination",
            dataIndex: "destination",
            key: "destination",
            filterMode: "multiple",
            filterSearch: true,
            filters: destinationFilters,
            onFilter: (value, record) => record.destination.includes(value),
        },
        {
            title: "Flight Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
        },


    ]
}
export const showUpdateForm = () => {
    hideUpdatePassword();
    document.getElementById("update-form").style.display = "flex";
}
export const hideUpdateForm = () => {
    document.getElementById("update-form").style.display = "none";
}
export const showUpdatePassword = () => {
    hideUpdateForm();
    document.getElementById("update-password").style.display = "flex";
}
export const hideUpdatePassword = () => {
    document.getElementById("update-password").style.display = "none";
}
export const applyMembership = () => {
    alert("You have successfully applied for membership. Please wait for the approval.");
}