// async function CheckIfUserExist() {
//   var respon = await fetch("data/data.json"),
//    data = await respon.json(),
//    user = data.users.user
//   var user_input =  document.getElementById("name").value
//   if (user_input == "") alert("name must be filled")
//   for (let index = 0; index < user.length; index++) {
//     var element = user[index];
//     if (Object.values(element).indexOf(user_input) > -1) {
//           console.log("existed")
//           return true
//     }
//   }
//   console.log("not exist")
//   return false

// }

var user

async function GetData() {
  let respon = await fetch("data/data.json")
  let data = await respon.json()
  return data
}

async function CheckIfUserExist() {
  var json_data = await GetData()
  user = json_data.users.user
  var user_input = document.getElementById("username-input").value
  if (user_input == "") alert("name must be filled")
  for (let index = 0; index < user.length; index++) {
    var element = user[index];
    if (Object.values(element).indexOf(user_input) > -1) {
      document.getElementById("username").innerText = "  " +  element.name
      document.getElementById("username_resp").innerText = "  " +  element.name
      document.querySelector(".get-username").style.display = "none";
      return
    }
  }
  document.getElementById("username").innerText = "  " +  user_input
  document.getElementById("username_resp").innerText = "  " +  user_input
  document.querySelector(".get-username").style.display = "none";
}

// // Open mobile navbar list
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
$("input").on("keydown",function search(e) {
  if(e.keyCode == 13) {
    CheckIfUserExist();
  }
});









