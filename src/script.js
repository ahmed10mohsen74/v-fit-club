
var movementStrength = 25;

const hero = document.getElementById("section-hero");

var modal = document.getElementById("offerModal");

var closeButton = document.querySelector(".close-button");
let hamburger = document.querySelector(".nav-hamburger");
let ul = document.querySelector("body.header ul");
closeButton.onclick = function () {
  modal.style.display = "none";
};

hero.addEventListener("mousemove", (e) => {
  const div = document.createElement("div");
  div.classList.add("hero-section-mouseClick");
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
  const box = document.getElementById("section-hero");
  box.appendChild(div);
  setTimeout(() => {
    box.removeChild(div);
    div.remove();
  }, 200);
});

hamburger.addEventListener("click" , () => {
    console.log("clicked");
    
})

// if (navigator.geolocation)
// {
//   navigator.geolocation.getCurrentPosition(function (position)
//   {
//     const lat = position.coords.latitude;
//     const lng = position.coords.longitude;
//     const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=ar&z=15&output=embed`;
//     document.getElementById("map-frame").src = mapUrl;
//   }, function (error)
//   {
//     alert("تعذر تحديد الموقع: " + error.message);
//   });
// } else
// {
//   alert("المتصفح لا يدعم تحديد الموقع الجغرافي");
// }
