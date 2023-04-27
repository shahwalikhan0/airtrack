import React from "react";

export function About() {

    // const isLogged = localStorage.getItem('isLogged');
    return (
        <>
        <main>
            <section className="service">
                <h1>Types of Services We Offer</h1>
                <p>Our top priority is the well-being of our Travelling enthusiasists!<br />Keeping in mind the ease for them .We have provided these suitable services! </p>
                <div className="row">
                    <div className="col1">
                        <h3>Membership and Discounts</h3>
                        <p>Our frequent travellers have the advantage to travel on a low budget via membership card. You can apply for membership below</p>
                        <a href="" className="button1">Apply!</a>
                    </div>
                    <div className="col1">
                        <h3>Secure Payments</h3>
                        <p>Now you can make payments online on our website via credit/debit card</p>
                        <a href="" className="button1">Book a Flight!</a>
                    </div>
                    <div className="col1">
                        <h3>Home Booking</h3>
                        <p>No need to go to agents just book youself a ticket online </p>
                        <a href="" className="button1">Book a Flight!</a>
                    </div>
                </div>
                <p>
                    A product by STTT group of companies <br />COME FLY WITH US!</p>
            </section>
            </main>
        </>
    )
};
export default About;
