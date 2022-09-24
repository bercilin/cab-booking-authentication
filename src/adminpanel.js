//NAVBAR TOGGLE BUTTON

let hamburger = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".collapse");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  navMenu.classList.remove("show");
}))







let car = document.getElementById("car");

function userProfile() {
  fetch("http://localhost:3000/user")
    .then((res) => res.json())
    .then((json) => {
      car.innerHTML = json
        .map((data) => {
          let { username, id, mail, image, } = data;
          return `
          <div id=car-id-${id} class="col-lg-4">
          <div class="text-center card-box bg-dark">
              <div class="member-card pt-2 pb-2">
                  <div class="thumb-lg member-thumb mx-auto"><img src=${image} class="rounded-circle img-thumbnail" alt="profile-image"></div>
                  <div class="text-bold mt-3">
                      <h4 class ="text-light">${username}</h4>
                      <p class="text-muted">Mail <span>| </span><span class="text-pink">${mail}</span></p>
                  </div>
                  <ul class="social-links list-inline">
                      <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                      <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                      <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Instagram"><i class="fa fa-instagram"></i></a></li>
                  </ul>
                  <a href="mailto:${mail}"><button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button></a>
                  <button type="button" onclick="removeItem(${id})" class="btn btn-danger mt-3 btn-rounded waves-effect w-md waves-light">Delete Account</button>
                  <div class="mt-4">
                      <div class="row">
                          <div class="col-4">
                              <div class="mt-3">
                                  <h4 class ="text-light">2563</h4>
                                  <p class="mb-0 text-muted">Total rides</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="mt-3">
                                  <h4 class ="text-light">6952</h4>
                                  <p class="mb-0 text-muted">Total credits</p>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="mt-3">
                                  <h4 class ="text-light">1125</h4>
                                  <p class="mb-0 text-muted">Cancelled rides</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
        })
        .join("");
    });
}

userProfile();

var del = "http://localhost:3000/user";
var xhr = new XMLHttpRequest();

let removeItem = (id) => {


  let text = "Are you sure to delete this account";
  if (confirm(text) == true) {
    xhr.open("DELETE", `${del}/${id}`, true);
    xhr.onload = function () {
      var users = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(users);
      } else {
        console.log(users);
      }
    };
    xhr.send(null);
  } else {
    console.log("Cancelled");
  }


};
