const addToCartButtons = document.getElementsByClassName("games_button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppinCart_message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let iron = 0;
let c3po = 0;
let r2d2 = 0;
let darth_vader = 0;

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].onclick = function () {
    cartMessage += 1;
    cartMessageValue.innerHTML = cartMessage;
    switch (addToCartButtons[i].dataset.product) {
      case "buzz":
        buzz += 1;
        break;

      case "iron":
        iron += 1;
        break;

      case "c3po":
        c3po += 1;
        break;

      case "r2d2":
        r2d2 += 1;
        break

      case "darth":
        darth_vader += 1;
        break
    }
    if (modalIsOpen === false) {
      shoppingModal.style.display = "flex";
      modalIsOpen = true;
      setTimeout(function () {
        shoppingModal.style.display = "none";
        modalIsOpen = false;
      }, 2000);
    }

  }
}
const checkoutButton = document.getElementById("js--checkoutbutton");
const checkoutWindow = document.getElementById("js--checkoutWindow");
const cartIcon = document.getElementById("js--cartIcon");
const arrowIcon = document.getElementById("js--arrowIcon");
const totalBuzz = document.getElementById("js--amount-buzz-total");
const totalIron = document.getElementById("js--amount-ironman-total");
const totalC3po = document.getElementById("js--amount-c3po-total");
const totalr2d2 = document.getElementById("js--amount-r2d2-total");
const totalDarthVader = document.getElementById("js--amount-darth-vader-total");
arrowIcon.style.display = "none";
let checkoutIsOpen = false;
const searchBar = document.getElementById("js--searchBar");

checkoutButton.onclick = function () {
  if (checkoutIsOpen === false) {
    document.querySelector("main").style.display = "none";
    checkoutWindow.style.display = "block";
    document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
    document.getElementById("js--amount-ironman").innerHTML = iron + "x";
    document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
    document.getElementById("js--amount-r2d2").innerHTML = r2d2 + "x";
    document.getElementById("js--amount-darth-vader").innerHTML = darth_vader + "x";
    totalBuzz.innerHTML = "€" + buzz * 49;
    totalIron.innerHTML = "€" + iron * 39;
    totalC3po.innerHTML = "€" + c3po * 49;
    totalr2d2.innerHTML = "€" + r2d2 * 69;
    totalDarthVader.innerHTML = "€" + darth_vader * 59;
    cartIcon.style.display = "none";
    arrowIcon.style.display = "block";
    checkoutIsOpen = true;
    searchBar.style.display = "none";
    document.getElementsByClassName("searchBar__glass")[0].style.display = "none";
    return;
  }
  document.querySelector("main").style.display = "block";
  checkoutWindow.style.display = "none";
  checkoutIsOpen = false;
  arrowIcon.style.display = "none";
  searchBar.style.display = "block";
  document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";
}

const games = document.getElementsByClassName("games_game")
searchBar.onkeyup = function (event) {
  let searchTerm = searchBar.value.toUpperCase().split(" ").join("");
  if (event.keyCode === 13) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].dataset.title.search(searchTerm) === -1) {
        games[i].style.opacity = 0.3;
      }
      else {
        games[i].style.opacity = 1;
      }
    }
  }
}