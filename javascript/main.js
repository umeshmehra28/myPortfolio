// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("light-mode");}

const toggle = document.getElementById("lightmode");

const link = document.getElementsByClassName("profile__social-link");

const text1 = document.getElementsByClassName("profile-profession");

const text2 = document.getElementsByClassName("profile__info-description");

const button = document.getElementsByClassName("button");

const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
      
    text1.style.color = "hsl(207, 12%, 45%)";

    for (var c = 0; c < link.length; c++) {
      text2[c].style.color = "hsl(207, 12%, 45%)";
    }

    for (var e = 0; e < button.length; e++) {
      button[e].style.backgroundColor = "hsl(207, 8%, 92%)";
      button[e].style.color = "hsl(207, 12%, 15%)";
      button[e].style.transition = "2s";
    }
  } else {
    body.style.background = "black";
    body.style.color = "yellowgreen";
    body.style.transition = "2s";

    text1.style.color = "hsl(207, 12%, 75%)";

    for (var d = 0; d < link.length; d++) {
      text2[d].style.color = "hsl(207, 12%, 75%)";
    }

    for (var f = 0; f < button.length; f++) {
      button[f].style.backgroundColor = "hsl(207, 24%, 12%)";
      button[f].style.color = "hsl(207, 12%, 95%)";
      button[f].style.transition = "2s";
    }
  }
});

function myLang(evt, lang) {
  let tabContent = document.getElementsByClassName("display");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("tabLinks");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", " ");
  }

  document.getElementById(lang).style.display = "block";
  evt.currentTarget.className += "active";
}

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

//send email

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "umesh2eight@gmail.com",
    Password: "95C0761653CC65EC390AE713D10E0F71D437",
    To: "umesh2eight@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name:" +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone: " +
      document.getElementById("phone").value +
      "<br> Message:" +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
