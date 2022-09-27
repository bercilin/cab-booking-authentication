const userName = document.getElementById("inputUsername");
const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const orgName = document.getElementById("inputOrgName");
const address = document.getElementById("inputLocation");
const email = document.getElementById("inputEmailAddress");
const phone = document.getElementById("inputPhone");
const birthday = document.getElementById("inputBirthday");

var filepath;
const upload = document.getElementById("getFile");


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


var update = "http://localhost:3000/user";
var xhr = new XMLHttpRequest();

function updateUser() {
  const details = {
    username: userName.value,
    firstName: firstName.value,
    mail: email.value,
    lastName: lastName.value,
    orgName: orgName.value,
    location: address.value,
    phone: phone.value,
    birthday: birthday.value,
    image: filepath,
  };
  const jsonString = JSON.stringify(details);
  xhr.open("PATCH", `${update}/${idd}`, false);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      location.replace(
        "http://localhost:5500/assets/pages/updatesuccess.html"
      );
    } else {
      alert("update is not successfull");
    }
  };
  xhr.send(jsonString.toString());
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





var loadFile = function(event) {
	var pic = document.getElementById('preview');
	pic.src = URL.createObjectURL(event.target.files[0]);
}




