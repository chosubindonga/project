function w3_open(){
    document.getElementById("mySidebar").style.display = "block";
}
function w3_close(){
    document.getElementById("mySidebar").style.display = "none";
}

function login(){
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    if(id==="admin"){
        if(pw=="1234"){
            document.getElementById("login").innerHTML="<h2>" + "Welcome, <br>" + id + 
               "!</h2>";
            document.getElementById("user").innerHTML=id

        } else {
            alert("비밀번호를 확인하세요.");
        }
    }else{
        alert("회원가입이 필요합니다.");
    }
}

var slideIndex = 1;
showSlides(slideIndex);

// 다음, 이전 제어
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 사진 제어
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
}

function popup(){
    window.open("./popup.html","event","width=300, height=450, scrollbars=yes")
}

function zoomIn(event) {
    event.target.style.width = "170px";
    event.target.style.height = "170px";
    event.target.style.transition = "all 0.5s";
}

function zoomOut(event) {
    event.target.style.width = "150px";
    event.target.style.height = "150px";
    event.target.style.transition = "all 0.5s";
}