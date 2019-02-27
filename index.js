window.onscroll = function() {moveTitle()};

var displayCheck = document.getElementById('divider').style.display
var header = document.getElementById('titlebar');

var sticky = header.offsetTop;
var stickyMobile = document.getElementById("Nav").offsetTop;

function moveTitle() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //  if (window.pageYOffset > sticky){
    //  document.getElementById('Nav').classList.add("stickyH");
  //  }else {
    //  document.getElementById('Nav').classList.remove("stickyH");
    //}

  }else {
    if (window.pageYOffset > sticky ){
      header.classList.add("stickyH");
      //window.alert("JS Functioning!");
    }else {
      header.classList.remove("stickyH");
    }
  }
}
