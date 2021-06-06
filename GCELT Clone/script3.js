const toggle = document.querySelector(".TOGGLE");
const menu = document.querySelector(".MENU");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("ACTIVE")) {
        menu.classList.remove("ACTIVE");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i> ";
    } 
    else {
        menu.classList.add("ACTIVE");

        // adds the close icon
        toggle.querySelector.apply("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);




const items = document.querySelectorAll(".ITEM");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("SUBMENU-ACTIVE")) {
        this.classList.remove("SUBMENU-ACTIVE");
    } 
    else if (menu.querySelector(".SUBMENU-ACTIVE")) {
        menu.querySelector(".SUBMENU-ACTIVE").classList.remove("SUBMENU-ACTIVE");
        this.classList.add("SUBMENU-ACTIVE");
    }
    else {
        this.classList.add("SUBMENU-ACTIVE");
    }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".SUBMENU")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}