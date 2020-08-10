let bars = document.querySelector('#menu-mobile i');
let navMobile = document.querySelector('#menu-mobile ul');

bars.onclick = function () {
  navMobile.classList[1] === "visible" ? navMobile.classList.remove('visible') :
  navMobile.classList.add('visible');
}