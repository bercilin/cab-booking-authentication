
//NAVBAR TOGGLE BUTTON

let navMenu = document.querySelector(".collapse");

addEventListener("click",()=>{
  navMenu.classList.remove("show");
})

document.querySelectorAll(".hide").forEach(n => n.addEventListener("click", () => {
  navMenu.classList.remove("show");
}))


//END OF NAVBAR TOGGLE BUTTON



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



let car = document.getElementById("car");


fetch("http://localhost:3000/rental")
  .then(res => res.json())
  .then(json => {
    car.innerHTML = json.map(data => {
      let { id, name, desc, img, price } = data;
      return `
      <div id=car-id-${id} class="col-sm-4 struct mb-5">
    <div class="card" id="item1">
      <img src=${img}
          alt="" class="card-img-top">

     </div>
    <div class="card-body">
      <h5 class="card-title text-center text-warning">${name}</h5>
      <p>${desc}</p>
      <div class="price-quantity">
    <div class="quantity">Price per day</div>
      <div class="buttons">
          
          <div id=${id} class="quantity">&#x20B9; ${price}</div>
          
      </div>
    </div>
    <div class="text-center mt-4">
      <button onclick="increment(${id})" class="btn btn-success">Book now</button>
    </div>
  </div>
    </div>
    
  `;
    })
    .join("");
  })








