const myNav = document.getElementById('navigation')

window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
    myNav.style.boxShadow = "inset 0 0 0 1000px rgba(0, 0, 0, 1)"
  } else {
    myNav.style.boxShadow = "inset 0 0 0 1000px rgba(0, 0, 0, 0.5)"
  }
}

const changeImage = () => {
  const displayProduct = document.getElementById("product-display")

  const backgroundImg = ["../images/electronics.jpg",
    "../images/banner13.jpg",
    "../images/banner14.jpg",
  ]
  var i = Math.floor((Math.random() * 3));

  displayProduct.style.backgroundImage = "url('" + backgroundImg[i] + "')";
}

setInterval(changeImage, 3000)


// const checkVisibility = () => {
//   if(document.visibilityState === "hidden"){
//     console.log('User left the page')
//   } else {
//     console.log("User is on screen")
//   }
// }

// setInterval(checkVisibility, 1000)