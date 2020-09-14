/* eslint-disable no-undef */
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("border-active").style.width = "100%";
  } else {
    document.getElementById("border-active").style.width = "0%";
  }

  if (
    document.body.scrollTop > 735 ||
    document.documentElement.scrollTop > 735
  ) {
    $("#gotop a").last().addClass("btn-active");
  } else {
    $("#gotop a").last().removeClass("btn-active");
  }
}
