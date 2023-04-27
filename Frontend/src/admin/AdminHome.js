import React from 'react'
import './index.css'

export const AdminHome = () => {
  return (
    <>
      <main className='flight-main admin-main'>
        <section class='service'>
          <h3>Shah Wali - Admin Dashboard</h3>
          <div class='row'>
            <h3>Flights</h3>
            <table>
              <thead>
                <tr>
                  <th>Flight Number</th>
                  <th>Destination</th>
                  <th>Departure Airport</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Price</th>
                  <th>Seats Remaining</th>{' '}
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
                  <td className='center'>0</td>
                </tr>
                <tr>
                  <td>FL002</td>
                  <td>Los Angeles</td>
                  <td>LAX Airport</td>
                  <td>11:00 AM</td>
                  <td>2:00 PM</td>
                  <td>$500</td>
                  <td className='center'>5</td>
                </tr>
                <tr>
                  <td>FL003</td>
                  <td>Chicago</td>
                  <td>ORD Airport</td>
                  <td>12:00 PM</td>
                  <td>3:00 PM</td>
                  <td>$500</td>
                  <td className='center'>20</td>
                </tr>
                <tr>
                  <td>FL004</td>
                  <td>Miami</td>
                  <td>MIA Airport</td>
                  <td>1:00 PM</td>
                  <td>4:00 PM</td>
                  <td>$500</td>
                  <td className='center'>15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='row'>
            <h3>Inventory</h3>
            <table>
              <thead>
                <tr>
                  <th>Inventory ID</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Admin ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Airplanes</td>
                  <td>12</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hostess</td>
                  <td>30</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Computers</td>
                  <td>10</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Airport Staff</td>
                  <td>50</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='row'>
            <h3>Passenger</h3>
            <table>
              <thead>
                <tr>
                  <th>Passenger ID</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Passport Number</th>
                  <th>Prime Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abdul Bari</td>
                  <td>Abdulbari@hotmail.com</td>
                  <td>789456</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abdul Basit</td>
                  <td>Abdulbasit@hotmail.com</td>
                  <td>789458</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abdul Rafay</td>
                  <td>Abdulrafay@hotmail.com</td>
                  <td>789476</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='row'>
            <h3>Baggage</h3>
            <table>
              <thead>
                <tr>
                  <th>Baggage ID</th>
                  <th>Passenger Name</th>
                  <th>Flight Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abdul Bari</td>
                  <td>FL003</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abdul Basit</td>
                  <td>FL004</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abdul Rafay</td>
                  <td>FL001</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='row'>
            <h3>Revenue</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abdul Bari</td>
                  <td>2003</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abdul Basit</td>
                  <td>104</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abdul Rafay</td>
                  <td>301</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class='row'>
            <h3>Discount Coupons</h3>
            <table>
              <thead>
                <tr>
                  <th>Coupon ID</th>
                  <th>User Activated</th>
                  <th>Coupon Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abdul Bari</td>
                  <td>123456</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>-</td>
                  <td>654432</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abdul Rafay</td>
                  <td>iloveu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}
