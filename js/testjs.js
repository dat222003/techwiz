import * as data from '../data/data.json' assert {type:"json"};

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

  let div = document.getElementById('here');
  div.innerHTML = "da tim thay";
  console.log(data.default.users.user[0]);