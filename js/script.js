const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
// console.log(navigation);
menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};

const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
  navigation.classList.remove("open");
}
list.forEach((e) => e.addEventListener("click", activeLink));
// list.forEach(e =>
//   e.addEventListener('click', ()=> {
//     list.forEach(e => e.classList.remove('active'))
//     e.classList.add("active")
//     console.log(e)
//   })
// )
document.addEventListener("click", function (e) {
  if (e.target !== menuToggle && e.target !== navigation) {
    if (navigation.classList.contains("open")) {
      navigation.classList.remove("open");
      console.log("the");
    }
  }
});
