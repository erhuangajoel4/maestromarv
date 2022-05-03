import React from "react";

function Details1() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2 content-img"
            // data-aos="fade-left"
            // data-aos-delay="100"
          >
            <img src="images/laptopmodel.jpg" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            // data-aos="fade-right"
            // data-aos-delay="100"
          >
            <h1>Phones and PC's repair</h1>
            <hr noshade="true"/>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <button className="btn btn-primary">Make an appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details1;
