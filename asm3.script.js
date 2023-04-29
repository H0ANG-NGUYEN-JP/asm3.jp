// nhap email

function submit() {
  const emailValue = document.getElementById("email").value.toLocaleUpperCase();
  const missEmail = document.getElementById("missEmail");
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const check = emailValue.match(checkEmail);
  let sectioncontent = document.querySelector("#personal-info .info");
  let submitcontrol = document.querySelector(".submit-email");
  // lay lai info
  if (check) {
    sectioncontent.style.display = "block";
    submitcontrol.style.display = "none";
  } else {
    missEmail.innerHTML = " vui long nhap dung dinh dang Email";
  }
}

// chuc nang an thong tin

//di chuot vao
function handleOnMouseOut(element) {
  element.children[2].style.display = "none";
  //console.log(element.children[2]);
}
//di chuot ra
function handleOnMouseOver(element) {
  element.children[2].style.display = "inline-block";
  //console.log("kiem tra vao");
}

//setting nut view more
const sectionContent = document.querySelectorAll(".section-content");
const viewMore = document.querySelectorAll(".view-more");

for (let index = 0; index < viewMore.length; index++) {
  viewMore[index].addEventListener("click", function () {
    if (sectionContent[index].classList.contains("hidden")) {
      viewMore[index].innerHTML = "less more";
      sectionContent[index].classList.remove("hidden");
    } else {
      viewMore[index].innerHTML = "view more";
      sectionContent[index].classList.add("hidden");
    }
  });
}
