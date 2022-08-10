async function CheckIfUserExist() {
  const respon = await fetch("data.json"),
   data = await respon.json(),
   user = data.users.user
   console.log(user[0])
  const user_input =  document.getElementById("name").value
  if (user_input == "") alert("name must be filled")
  if (Object.values(user).indexOf(user_input) > -1) {
    console.log('user existed');
    return
  }console.log("user not existed")

}

// Open mobile navbar list
let mobileNavBtn = document.querySelector(".navbar-mobile_btn");
let mobileNavList = document.querySelector(".navbar-mobile__list");
mobileNavBtn.onclick = function(){
  mobileNavList.classList.toggle("open");
}




