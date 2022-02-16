import {load_header, load_footer, load_empty_tab_content} from "./front_page.js";
import {load_home} from "./home.js";
import { load_menu } from "./menu.js";
import { load_contact } from "./contact.js";

const content = document.querySelector("div#content");

const headerDiv = load_header(document);
content.appendChild(headerDiv);

const tabContentDiv = load_empty_tab_content(document);
content.appendChild(tabContentDiv);

const footerDiv = load_footer(document);
content.appendChild(footerDiv);

const homeTab = document.querySelector(".tab button.home");
homeTab.addEventListener("click", function(e) {
    clearContent();
    homeTab.classList.add("active");
    const homeDiv = load_home(document);
    tabContentDiv.appendChild(homeDiv);
})

const menuTab = document.querySelector(".tab button.menu");
menuTab.addEventListener("click", function(e) {
    clearContent();
    menuTab.classList.add("active");
    const menuDiv = load_menu(document);
    tabContentDiv.appendChild(menuDiv);
})

const contactTab = document.querySelector(".tab button.contact");
contactTab.addEventListener("click", function(e) {
    clearContent();
    contactTab.classList.add("active");
    const contactDiv = load_contact(document);
    tabContentDiv.appendChild(contactDiv);
})

function clearContent() {
    const tabContentDivs = document.querySelectorAll(".tab_content")
    tabContentDivs.forEach(cont => {
        cont.remove();
    })
    const tabLinks = document.querySelectorAll(".tab_link");
    tabLinks.forEach(tab => {
        tab.classList.remove("active");
    })
}

homeTab.click();




