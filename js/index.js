let menu = document.querySelector(".burger-icon");

menu.onclick = function () {
  menu.classList.toggle(move);
};

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Email JS

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendMail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

function sendMail(name, email, msg) {
  emailjs.send("service_ph7qkrt", "template_99pef3d", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh no...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function emailReq() {
  swal({
    title: "Oh no...",
    text: "Invalid email!",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply within 24hours",
    icon: "success",
  });
}

//Header Background

let header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  header.classList.toggle("header-active", window.scrollY > 0);
});
