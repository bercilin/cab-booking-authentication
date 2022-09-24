
let hamburger = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".collapse");

addEventListener("click",()=>{
  navMenu.classList.remove("show");
})

document.querySelectorAll(".hide").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show");
}))

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


var myLatLng = { lat: 13.027031208396691, lng: 77.60751218874147 };
var mapOptions = {
    center: myLatLng,
    zoom: 24,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);


// lat: 13.027031208396691, lng: 77.60751218874147


