import React from "react";

export function Contact() {
    return (
        <>
            <main>
                <div className="button-box">
                    <h4>Contact Us</h4>
                </div>
                <i className="fa fa-home"></i>
                <p style={{ textAlign: 'center' }}>We are fully commited towards our loyal customers and are glad to look into your positive feedback or upsets </p>
                <section style={{ marginLeft: '50px' }}>
                    <div className="row">
                        <div className="contact-col">
                            <div>
                                <i className="fa fa-home"></i>
                                <strong>
                                    <h2><b>Head Quarter:</b></h2>
                                    <h5>Lahore,Punjab,PK</h5>
                                    <h5>+92 0332-4432683</h5>
                                </strong>
                            </div>
                            <div>
                                <i className="fa fa-home"></i>
                                <strong>
                                    <h2><b>Reach us through email</b></h2>
                                    <h5>tassadaqq.abid@airtrack.com</h5>
                                    <h5>shah.wali@airtrack.com</h5>
                                </strong>
                            </div>
                            <p>24/7 Service available</p>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
}