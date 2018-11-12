var open_menu_btn = document.querySelector(".main-nav__toggle");
var main_nav = document.querySelector(".main-nav");
var add_to_cart = document.querySelectorAll(".catalog-item__buy");
var modal = document.querySelector(".modal-basket");
var overlay = document.querySelector(".overlay");

window.onload = function() {
  main_nav.classList.remove("main-nav--no-js");
  main_nav.classList.remove("main-nav--opened");
  open_menu_btn.classList.remove("main-nav__toggle--opened");
}

open_menu_btn.addEventListener("click", function() {
  if (open_menu_btn.classList.contains("main-nav__toggle--opened")) {
    open_menu_btn.classList.remove("main-nav__toggle--opened");
    main_nav.classList.remove("main-nav--opened");
  }
  else {
    open_menu_btn.classList.add("main-nav__toggle--opened");
    main_nav.classList.add("main-nav--opened");
  }
})

for (var i = 0; i < add_to_cart.length; i++) {
  add_to_cart[i].addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.add("modal-basket--show");
    overlay.classList.add("overlay--show");
  })
}

if (overlay) {
  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal-basket--show");
  })
}

window.onresize = function() {
  var width = window.innerWidth;
  if (width > 767 && main_nav.classList.contains("main-nav--opened")) {
    main_nav.classList.remove("main-nav--opened");
    open_menu_btn.classList.remove("main-nav__toggle--opened");
  }
}

function initMap() {
  var map = new google.maps.Map(document.querySelector(".contacts__map"), {
    zoom: 16,
    center: {
      lat: 59.936295,
      lng: 30.321599
    }
  });
  var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
  var marker = new google.maps.Marker({
    position: {
      lat: 59.936295,
      lng: 30.321599
    },
    map: map,
    icon: {
        url: isIE11 ? "img/icon-map-pin.png" : "img/icon-map-pin.svg",
        scaledSize: new google.maps.Size(67, 100)
    }
  });
}
