import React from 'react'
import './index.css'

export const Management = () => {
  return (
    <>
      <main className='flight-main admin-main'>
        <section className='service'>
          <h3>Admin Management</h3>
          <div className='row'>
            <h3>Actions:</h3>
            <table>
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th className='center'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Passenger</td>
                  <td className='center'>
                    <button type="button"
                      className="btn btn-success"
                      data-toggle="modal"
                      data-target="#grantMembershipModal">
                      Grant Membership
                    </button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#removeItem">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Flight</td>
                  <td className='center'>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addFlight">
                      Add
                    </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateFlight">
                      Update
                    </button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#removeItem">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Inventory</td>
                  <td className='center'>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addInventoryModal">
                      Add
                    </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateInventoryModal">
                      Update
                    </button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#removeItem">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td className='center'>
                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addDiscountModal">
                      Add
                    </button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateDiscountModal">
                      Update
                    </button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#removeItem">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </main>
      <div
        className="modal fade"
        id="updateDiscountModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="updateDiscountModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateDiscountModalTitle">Update Discount</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Discount ID:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter discount ID"
                  id="updateDiscountID"
                />
              </div>
              <div className="form-group">
                <label>Discount Code:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter discount code"
                  id="updateDiscountCode"
                />
              </div>
              <div className="form-group">
                <label>Discount Percent:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter discount percent"
                  id="updateDiscountPercent"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addInventoryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addInventoryTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addInventoryTitle">Add Inventory Item</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Item Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter item name"
                  id="inventoryItemName"
                />
              </div>
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter quantity"
                  id="inventoryQuantity"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addDiscountModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addDiscountModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addDiscountModalTitle">Add Discount</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Discount Code:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter discount code"
                  id="discountCode"
                />
              </div>
              <div className="form-group">
                <label>Discount Percent:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter discount percent"
                  id="discountPercent"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="updateInventoryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="updateInventoryTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateInventoryTitle">Update Inventory Item</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Item ID:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter item ID"
                  id="updateItemId"
                />
              </div>
              <div className="form-group">
                <label>Item Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter item name"
                  id="updateItemName"
                />
              </div>
              <div className="form-group">
                <label>Quantity:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter quantity"
                  id="updateQuantity"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="removeItem" tabindex="-1" role="dialog" aria-labelledby="bookSeatModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><b>Remove (itemType) </b> </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-check">
                <label>Please enter id: <input required />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="grantMembershipModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="grantMembershipTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="grantMembershipTitle">Grant Membership</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Enter User ID:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-success">
                Grant
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="addFlight" tabindex="-1" role="dialog" aria-labelledby="bookSeatModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><b>Add Flight </b> </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-check">
                <label>Arrival Time: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Departure Time: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Destination: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Departure: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Num of Seats: <input required />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="updateFlight" tabindex="-1" role="dialog" aria-labelledby="bookSeatModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"><b>Add Flight </b> </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-check">
                <label>Flight id: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Arrival Time: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Departure Time: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Destination: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Departure: <input required />
                </label>
              </div>
              <div className="form-check">
                <label>Num of Seats: <input required />
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
