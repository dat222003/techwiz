async function CheckIfUserExist() {
  const respon = await fetch("data/data.json"),
   data = await respon.json(),
   user = data.users.user
  const user_input =  document.getElementById("name").value
  if (user_input == "") alert("name must be filled")
  for (let index = 0; index < user.length; index++) {
    const element = user[index];
    if (Object.values(element).indexOf(user_input) > -1) {
          console.log("existed")
          return true
        }
  }
  console.log("not exist")
  return false
  
}

// Open mobile navbar list
let mobileNavBtn = document.querySelector(".navbar-mobile_btn");
let mobileNavList = document.querySelector(".navbar-mobile__list");
mobileNavBtn.onclick = function(){
  mobileNavList.classList.toggle("open"); 
}









