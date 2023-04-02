import React from 'react'
import './index.css'

export const Management = () => {
  return (
    <>
      <main className='flight-main admin-main'>
        <section class='service'>
          <h3>Admin Management</h3>
          <div class='row'>
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
                  <button type="button" className="btn btn-success">
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
                    <button type="button" className="btn btn-danger" data-toggle="modal" disabled>
                        Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Inventory</td>
                  <td className='center'>
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target="#bookSeatModal">
                        Add
                    </button>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bookSeatModal">
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
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target="#bookSeatModal">
                        Add
                    </button>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#bookSeatModal">
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
