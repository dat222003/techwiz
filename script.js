
function setCookie(key, value, days_till_expire) {
  const d = new Date();
  d.setTime(d.getTime() + (days_till_expire * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

function getCookie(p) {
  let name = p + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let arr = decodedCookie.split(';');
  for (let i = 0; i < arr.length; i++) {
    let component = arr[i];
    while (component.charAt(0) == ' ') {
      component = component.substring(1);
    }
    if (component.indexOf(name) == 0) {
      return component.substring(name.length, component.length);
    }
  }
  return "";
}


async function GetData() {
  let respon = await fetch("data/data.json")
  let data = await respon.json()
  return data
}

async function CheckIfUserExist() {
  //if user existed load user's datas to cookie
  var json_data = await GetData();
  var user = json_data.users.user;
  var user_input = document.getElementById("username-input").value;
  if (user_input == "") {
    document.getElementById("username").innerText = "Welcome   unknown";
    document.getElementById("username_resp").innerText = "Welcome   unknown";
    document.querySelector(".get-username").style.display = "none";
    return;
  }
  for (let i = 0; i < user.length; i++) {
    var element = user[i];
    const keys = Object.keys(element),
      values = Object.values(element),
      numOfKeys = Object.keys(keys).length;
    if (Object.values(element).indexOf(user_input) > -1) {
      for (let j = 0; j < numOfKeys; j++) {
        setCookie(keys[j], values[j], 1); //expire in 1 day
      }
      setUserData();
      document.querySelector(".get-username").style.display = "none";
      return;
    }
    setCookie("name", user_input, 1)
    setUserData();
  }
  document.querySelector(".get-username").style.display = "none";
}

function setUserData() {
  if (document.getElementById("name")) {
    document.getElementById("name").value = "Welcome  " + getCookie("name");
  }
  if (document.getElementById("username")) {
    document.getElementById("username").innerText = "Welcome  " + getCookie("name");
  }
  if (document.getElementById("username_resp")) {
    document.getElementById("username_resp").innerText = "Welcome  " + getCookie("name");
  }
  if (document.getElementById("height")) {
    document.getElementById("height").value = getCookie("height");
  }
  if (document.getElementById("weight")) {
    document.getElementById("weight").value = getCookie("weight");
  }
  if (document.getElementById("bloodtype")) {
    document.getElementById("bloodtype").value = getCookie("bloodtype");
  }
  if (document.getElementById("bloodpressure")) {
    document.getElementById("bloodpressure").value = getCookie("bloodpressure");
  }
  if (document.getElementById("bloodsugar")) {
    document.getElementById("bloodsugar").value = getCookie("bloodsugar");
  }
  if (document.getElementById("age")) {
    document.getElementById("age").value = getCookie("age");
  }

}

window.onload = function () {
  if (document.cookie != "") {
    document.querySelector(".get-username").style.display = "none";
    setUserData();
    console.log(document.cookie)
  }
}



// Open mobile navbar list
let mobileNavBtn = document.querySelector(".navbar-mobile_btn");
let mobileNavList = document.querySelector(".navbar-mobile__list");
mobileNavBtn.onclick = function () {
  mobileNavList.classList.toggle("open");
}

// Close get username
let closeBtn = document.querySelector(".close-username__btn");
closeBtn.onclick = function () {
  document.querySelector(".get-username").style.display = "none";
}

// Get username value
$("input").on("keydown", function search(e) {
  if (e.keyCode == 13) {
    CheckIfUserExist();
  }
});

//Odometer about us
// setTimeout(function () {
//   odometer1.innerHTML = 2500;
// }, 100);

// setTimeout(function () {
//   odometer2.innerHTML = 500;
// }, 100);

// setTimeout(function () {
//   odometer3.innerHTML = 7500;
// }, 100);









