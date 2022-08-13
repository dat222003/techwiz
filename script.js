
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
      await loadDosage(user_input)
      await loadAppoint(user_input)
      setUserData();
      document.querySelector(".get-username").style.display = "none";
      return;
    }
    setCookie("name", user_input, 1)
    setUserData();
  }
  document.querySelector(".get-username").style.display = "none";
}

async function loadDosage(name) {
  var json_data = await GetData();
  var dosage = json_data.users.dosage;
  for (let i = 0; i < dosage.length; i++) {
    var element = dosage[i];
    const keys = Object.keys(element),
          values = Object.values(element),
          numOfKeys = Object.keys(keys).length;
    if (Object.values(element).indexOf(name) > -1) {
      for (let j = 0; j < numOfKeys; j++) {
        setCookie(keys[j], values[j], 1); //expire in 1 day
      }
    }
  }
}

async function loadAppoint(name) {
  var json_data = await GetData();
  var appoint = json_data.users.appoint;
  for (let i = 0; i < appoint.length; i++) {
    var element = appoint[i];
    const keys = Object.keys(element),
          values = Object.values(element),
          numOfKeys = Object.keys(keys).length;
    if (Object.values(element).indexOf(name) > -1) {
      for (let j = 0; j < numOfKeys; j++) {
        setCookie(keys[j], values[j], 1); //expire in 1 day
      }
    }
  }
}

// Close get username
let closeBtn = document.querySelector(".close-username__btn");
closeBtn.onclick = function () {
  document.querySelector(".get-username").style.display = "none";
}

// // Open mobile navbar list
function setUserData() {

  //load to navbar
    document.getElementById("username").innerText = "Welcome  " + getCookie("name");
    document.getElementById("username_resp").innerText = "Welcome  " + getCookie("name");

  // set data to form
  if (document.getElementById("userDataformVitalHealth") != null) {
    document.getElementById("name").value = getCookie("name"); 
    document.getElementById("height").value = getCookie("height");
    document.getElementById("weight").value = getCookie("weight");
    document.getElementById("bloodtype").value = getCookie("bloodtype");
    document.getElementById("age").value = getCookie("age");
    document.getElementById("bloodsugar").value = getCookie("bloodsugar");
    document.getElementById("bloodpressure").value = getCookie("bloodpressure");
  }

  if (document.getElementById("userDataformAppointment") != null) {
    document.getElementById("name").value = getCookie("full_name"); 
    document.getElementById("email").value = getCookie("email"); 
    document.getElementById("date").value = getCookie("date"); 
    document.getElementById("time").value = getCookie("time"); 
    document.getElementById("address").value = getCookie("address"); 
    document.getElementById("mobile").value = getCookie("mobile"); 
  }

  // set data to view
  if (document.getElementById("userDataView") != null) {
    //user's info
    document.getElementById("name").innerHTML = getCookie("name");
    document.getElementById("height").innerHTML = getCookie("height");
    document.getElementById("weight").innerHTML = getCookie("weight");
    document.getElementById("bloodtype").innerHTML = getCookie("bloodtype");
    document.getElementById("age").innerHTML = getCookie("age");
    document.getElementById("bloodsugar").innerHTML = getCookie("bloodsugar");
    document.getElementById("bloodpressure").innerHTML = getCookie("bloodpressure");
    //dosage
    document.getElementById("medicine_name").innerHTML = getCookie("medicine_name");
    document.getElementById("dose").innerHTML = getCookie("dose");
    document.getElementById("quantity").innerHTML = getCookie("quantity");
    document.getElementById("time_to_drink").innerHTML = getCookie("time_to_drink");
    document.getElementById("note").innerHTML = getCookie("note");
    //appoint
    document.getElementById("full_name").innerHTML = getCookie("full_name");
    document.getElementById("email").innerHTML = getCookie("email");
    document.getElementById("date").innerHTML = getCookie("date");
    document.getElementById("time").innerHTML = getCookie("time");
    document.getElementById("address").innerHTML = getCookie("address");
    document.getElementById("mobile").innerHTML = getCookie("mobile");

  }



}

window.onload = async function () {
  if (document.cookie != "") {
    document.querySelector(".get-username").style.display = "none";
    setUserData();
    return
  }
  document.querySelector(".get-username").style.display = "flex";
}



// Open mobile navbar list
let mobileNavBtn = document.querySelector(".navbar-mobile_btn");
let mobileNavList = document.querySelector(".navbar-mobile__list");
mobileNavBtn.onclick = function () {
  mobileNavList.classList.toggle("open");
}

// Get username value
$("input").on("keydown", function search(e) {
  if (e.keyCode == 13) {
    CheckIfUserExist();
  }
});

function form_btn_active() {
  var btn_reset = document.getElementById("btn__reset");
  var btn_submit = document.getElementById("btn__submit");

  if (btn_reset.className = "form__butn active") {

  }
  btn_reset.classList.toggle("active");
  btn_submit.classList.toggle("active");

  console.log(btn_reset.className);
}





