import React from "react";
import "./flight.css";

export const Flight = () => {
  const isLogged = localStorage.getItem("isLogged");

  if(isLogged === 'false' || isLogged === null){
    window.location.href = "/";
  }
  return (
    <>
      <main className="flight-main">
        <div className="flight-container-header">
          <h1 style={{width: '50%'}}>Airtrack - Flights</h1>
          <input class="flight-search-input form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button type="button" className="btn btn-success">Search</button>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#filterModal">Filters</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Destination</th>
              <th>Departure Airport</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Price</th>
              <th>Seats Remaining</th>
              <th>Book Seat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FL001</td>
              <td>New York</td>
              <td>JFK Airport</td>
              <td>10:00 AM</td>
              <td>12:00 PM</td>
              <td>$500</td>
              <td className="center">0</td>
              <td className="center"><button className="button" disabled>No seats available</button></td>
            </tr>
            <tr>
              <td>FL002</td>
              <td>Los Angeles</td>
              <td>LAX Airport</td>
              <td>11:00 AM</td>
              <td>2:00 PM</td>
              <td>$500</td>
              <td className="center">5</td>
              <td className="center">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#bookSeatModal">
                  Book Seat
                </button>
              </td>
            </tr>
            <tr>
              <td>FL003</td>
              <td>Chicago</td>
              <td>ORD Airport</td>
              <td>12:00 PM</td>
              <td>3:00 PM</td>
              <td>$500</td>
              <td className="center">20</td>
              <td className="center">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#bookSeatModal">
                  Book Seat
                </button>
              </td>
            </tr>
            <tr>
              <td>FL004</td>
              <td>Miami</td>
              <td>MIA Airport</td>
              <td>1:00 PM</td>
              <td>4:00 PM</td>
              <td>$500</td>
              <td className="center">15</td>
              <td className="center">
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#bookSeatModal">
                  Book Seat
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="modal fade" id="bookSeatModal" tabindex="-1" role="dialog" aria-labelledby="bookSeatModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"><b>Balance: </b> <span>$1200</span> </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h2>Flight#123 <h5>23 seats remaining</h5></h2>
                <div className="form-check">
                  <label>Please enter the number of seats you want to book: <input type="number" min="1" max="10" required />
                  </label>
                </div>
                <div className="form-check">
                  <label>Please enter your password to confirm the booking:</label>
                  <input type="password" id="password" required />
                </div>
                <div className="form-check">
                  <label>Discount Coupon:</label> <br />
                  <input type="text" placeholder="If available" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="filterModal" tabindex="-1" role="dialog" aria-labelledby="bookSeatModalTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"><b>Select Filters </b> </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-check">
                  <label>Featue available in version 2.0</label>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  )
}