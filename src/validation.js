const userName = document.getElementById("username");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const remove = document.getElementById("registermessage");
const errorbox = document.getElementById("errorbox");
var filepath;
const upload = document.getElementById("getFile");
const apiUrl = "http://localhost:3000/user";
const apiUrladmin = "http://localhost:3000/admin";
const xhr = new XMLHttpRequest();

if ((localStorage.getItem('user'))==null|| undefined) {
  console.log("Dosent work");
}else{
  console.log("Working");
  var logdetails = JSON.parse(localStorage.getItem('user'));
  var images =logdetails[0].image
  var idd =logdetails[0].id
  console.log(images);
  console.log(idd);
  document.getElementById('userimage').src=images;
}


function logout() {
  localStorage.clear();
}

function fun() {
  var uname = document.forms["loginform"]["uname"].value;
  var upass = document.forms["loginform"]["upass"].value;

  if (uname == null || uname == "") {
    errorbox.innerHTML = "* enter the user name *";
    return false;
  }
  if (upass == null || upass == "") {
    errorbox.innerHTML = "* Enter the password *";
    return false;
  }
  if (uname != "" && upass != "") {
    login();
  }
}

function fun1() {
  var uname1 = document.forms["registerform"]["uname1"].value;
  var mail = document.forms["registerform"]["mail"].value;
  var upass1 = document.forms["registerform"]["upass1"].value;
  var upass2 = document.forms["registerform"]["upass2"].value;

  if (uname1 == null || uname1 == "") {
    errorbox.innerHTML = "* enter the user name *";
    return false;
  }
  if (mail == null || mail == "") {
    errorbox.innerHTML = "* enter the mail id *";
    return false;
  }
  if (upass1 == null || upass1 == "") {
    errorbox.innerHTML = "* Enter the password *";
    return false;
  }
  if (upass2 == null || upass2 == "") {
    errorbox.innerHTML = "* Enter the password *";
    return false;
  }
  if (upass1 != upass2) {
    errorbox.innerHTML = "* Password dosent match *";
    return false;
  }
  if (uname1 != "" && upass1 != "") {
    register();
  }
}

function register() {
  xhr.open("GET", apiUrl + "?username=" + userName.value, false);
  xhr.onreadystatechange = () => {
    console.log(xhr.responseText);
    const userCount = JSON.parse(xhr.responseText);

    if (userCount.length == 1) {
      alert("User name exists");
    } else {
      post();
    }
  };
  xhr.send();

  function post() {
    const details = {
      username: userName.value,
      mail: email.value,
      password: password.value,
      image: filepath,
    };
    const jsonString = JSON.stringify(details);
    xhr.open("POST", apiUrl, false);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 201) {
        location.replace(
          "http://localhost:5500/assets/pages/registersuccess.html"
        );
      } else {
        alert("Registration is not successfull");
      }
    };
    xhr.send(jsonString.toString());
  }
}

function login() {
  const loginName = document.getElementById("loginname");
  const loginPassword = document.getElementById("loginpassword");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    apiUrl +
      "?username=" +
      loginName.value +
      "&&password=" +
      loginPassword.value,
    false
  );
  xhr.onreadystatechange = () => {
    console.log(xhr.responseText);
    const count = JSON.parse(xhr.responseText);

    if (count.length == 1) {
      alert("Login Successfull");
      location.replace("http://localhost:5500/home.html");
      localStorage.clear()
      localStorage.setItem("user",xhr.responseText)
    } else {
      alert("Login not Successfull");
    }
  };
  xhr.send();
}

function adminlogin() {
  const loginName = document.getElementById("loginname");
  const loginPassword = document.getElementById("loginpassword");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    apiUrladmin +
      "?username=" +
      loginName.value +
      "&&password=" +
      loginPassword.value,
    false
  );
  xhr.onreadystatechange = () => {
    console.log(xhr.responseText);
    const count = JSON.parse(xhr.responseText);

    if (count.length == 1) {
      alert("Login Successfull");
      location.replace("http://localhost:5500/assets/pages/adminpanel.html");
    } else {
      alert("Login not Successfull");
    }
  };
  xhr.send();
}

function onSignIn(userProfile) {
  console.log("Hellooo");
  const profile = googleUser.getBasicProfile();
  console.log(profile);
  const userName = profile.getName();
  console.log(userName);
  const email = profile.getEmail();
  console.log(email);
  const id_token = userProfile.getAuthResponse().id_token;
  console.log(id_token);

  const details = {
    username: userName.value,
    mail: email.value,
  };
  const jsonString = JSON.stringify(details);
  xhr.open("POST", apiUrl, false);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 201) {
      // regSuccess();
      alert("Registration is successfull");
    } else {
      alert("Registration is not successfull");
    }
  };
  xhr.send(jsonString.toString());
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signe out");
  });
}

const input = document.querySelector('input[type="file"]');
function image() {
  input.addEventListener(
    "change",
    function (e) {
      const reader = new FileReader();
      reader.onload = function () {
        const img = new Image();
        filepath = reader.result;
        console.log(filepath);
      };
      reader.readAsDataURL(input.files[0]);
    },
    false
  );
}

image();
