window.onscroll = function() {moveTitle()};


var header = document.getElementById('titlebar');

var sticky = header.offsetTop;

function moveTitle() {
  if (window.pageYOffset > sticky){
    header.classList.add("stickyH");
    //window.alert("JS Functioning!");
  }else {
    header.classList.remove("stickyH");
  }
}
