import React from "react";

export const Booking = () => {
  const isLogged = localStorage.getItem("isLogged");

  if(isLogged === 'false' || isLogged === null){
    window.location.href = "/";
  }

    return (
        <>
        <body>
    <main className="flight-main">
    <header>
      <h1>Airtrack - Bookings</h1>
    </header>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Destination</th>
            <th>Seats Booked</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>123</td>
            <td>10:00 AM</td>
            <td>12:00 PM</td>
            <td>New York</td>
            <td>2</td>
          </tr>
          <tr>
            <td>456</td>
            <td>2:00 PM</td>
            <td>4:00 PM</td>
            <td>Los Angeles</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </main>
  </body>
        </>
    )
}