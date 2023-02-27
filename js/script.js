let ChevronLeft = document.getElementById("chev-left");
let ChevronRight = document.getElementById("chev-right");
let topRightEnD = document.getElementById("topRightEnd");
  topRightEnD.classList.remove("active");

ChevronLeft.addEventListener("click", ChevRonLeft);
function ChevRonLeft() {
  topRightEnD.classList.add("active");
}

ChevronRight.addEventListener("click", ChevRoRight);
function ChevRoRight() {
  topRightEnD.classList.remove("active");

}
