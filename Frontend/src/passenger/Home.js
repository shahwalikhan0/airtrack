import React from "react";

export const Home = () => {

    return (
        <>
        <main>
            <section className="service">
        <h1>Hop On Now</h1>
        <p>We warmly welcome you on board . Lets begin our journey to greatness</p>
        <div className="row">
            <div className="col1">
            <h3>Profile</h3>
                <p>See your profile data and apply for prime membership</p>
                <a className="button1" href="/user/profile">Profile!</a>
            </div>
            <div className="col1">
            <h3>Booking</h3>
                <p>Book yourself a trip to your favorite destination at affordable prices and discounts.</p>
                <a className="button1" href="/user/booking">Book Now!</a>
            </div>
            <div className="col1">
            <h3>Flights</h3>
                <p>Check out flights of your favourite destinations</p>
                <a className="button1" href="/user/flight">Show Flights</a>
            </div>
        </div>
    </section>
    </main>
        </>
    )
}