let buttonMenu = document.getElementById("button_menu");
let menu = document.getElementById("menu-options");

buttonMenu.addEventListener("click", function () {
  menu.classList.toggle("closed");

  if (menu.classList.contains("closed")) {
    buttonMenu.setAttribute("aria-expanded", false);
    menu.setAttribute("aria-hidden", true);
  } else {
    buttonMenu.setAttribute("aria-expanded", true);
    menu.setAttribute("aria-hidden", false);
    document.getElementById("btn-popup").focus();
  }
});

let buttonPopup = document.getElementById("btn-popup");
let popup = document.getElementById("popup");

buttonPopup.addEventListener("click", function () {
  /*add or remove attribute open for display or hidden the popup*/
  popup.toggleAttribute("open");

  /* if popup is open */
  if (popup.hasAttribute("open")) {
    trapFocus();
    /*FEEDBACK: use aria-hidden*/
    popup.setAttribute("aria-hidden", false);
    document.getElementById("test-field").focus();
  } else {
    /*if popup is closed then remove trap and focus buttonPopup */
    removeTrap();
    buttonPopup.focus();
  }
});

function trapFocus() {
  /* add event keydown to screen */
  document.addEventListener("keydown", handleKey);
}

//FEEDBACK: it's better for this function to be in global scope, otherwise it cannot removed 
function handleKey(e) {
  /*save all elements which can win focus inside popup */
  const focusable = popup.querySelectorAll("input, button");

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  //FEEDBACK it's better remove the next sentence because it mays cause problems
//   first.focus();

  /*if the screen detects the key tab */
  if (e.key == "Tab") {
    /*if shiftKey was pressed and element with focus is first */
    if (e.shiftKey && document.activeElement == first) {
      e.preventDefault();
      /*win focus next element */
      last.focus();
    } else if (!e.shiftKey && document.activeElement == last) {
      e.preventDefault();
      //win focus previous element
      first.focus();
    }
  }

  /*If the screen detects the key Esc */
  if (e.key == "Escape") {
    /*hidden popup */
    popup.removeAttribute("open");
    buttonPopup.focus();
    /*remove event in screen */
    document.removeEventListener("keydown", handleKey);

    /*FEEDBACK: use aria-hidden*/
    popup.setAttribute("aria-hidden", true);
  }
}

function removeTrap() {
  document.removeEventListener("click", handleKey);
}

let buttonModeDark = document.getElementById("modeDarkButton");
let paragraphModeDark = document.getElementById("messageOfModeDark");
let isDarkMode = false;

buttonModeDark.addEventListener("click", function () {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    buttonModeDark.setAttribute("aria-pressed", true);
    paragraphModeDark.textContent = "Mode dark is activated";
  } else {
    buttonModeDark.setAttribute("aria-pressed", false);
    paragraphModeDark.textContent = "Mode dark is desactivated";
  }
});
