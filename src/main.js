

let hamburger = document.querySelector(".navbar-toggler");
let navMenu = document.querySelector(".collapse");

addEventListener("click",()=>{
  navMenu.classList.remove("show");
})

document.querySelectorAll(".hide").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("show");
}))


// END


function sendMail() {
    var details = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_aun6kzo","template_dxfknj6", details).then(function (res) {
        alert("Message sent" + res.status);
    })
}


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