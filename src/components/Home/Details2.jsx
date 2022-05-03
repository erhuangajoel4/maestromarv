import React from "react";

export default function Details2() {
  const changeImage = () => {
    const displayProduct = document.getElementById("product-display");

    const backgroundImg = [
      "../images/electronics.jpg",
      "../images/banner13.jpg",
      "../images/banner14.jpg",
    ];
    var i = Math.floor(Math.random() * 3);

    displayProduct.style.backgroundImage = "url('" + backgroundImg[i] + "')";
  };

  setInterval(changeImage, 3000);
  return (
    <section class="product-display" id="product-display">
      <div class="product-display-content">
        {/* <img src="images/repair.png" width="50px" alt="" />  */}
        <p /*data-aos="fade-down" data-aos-delay="100" */>
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </p>
        <h1 /* data-aos="fade-right" data-aos-delay="100" */>
          We repair all laptops, macbook and phones
        </h1>
        <button
          class="btn btn-primary"
          //   data-aos="fade-left"
          //   data-aos-delay="100"
        >
          Make an appointment
        </button>
      </div>
    </section>
  );
}
