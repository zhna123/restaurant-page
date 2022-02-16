import './style.css';

export function load_header(document) {

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo")

    const img = document.createElement("img");
    logoDiv.appendChild(img);
    const title = document.createElement("div");
    title.textContent = "BUBBLE ISLAND";
    title.classList.add("title");
    logoDiv.appendChild(title);

    headerDiv.appendChild(logoDiv);

    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");

    const btnHome = document.createElement("button");
    btnHome.textContent = "HOME"
    const btnMenu = document.createElement("button");
    btnMenu.textContent = "MENU";
    const btnContact = document.createElement("button");
    btnContact.textContent = "CONTACT";
    btnHome.classList.add("tab_link");
    btnMenu.classList.add("tab_link");
    btnContact.classList.add("tab_link");
    btnHome.classList.add("home");
    btnMenu.classList.add("menu");
    btnContact.classList.add("contact");

    tabDiv.appendChild(btnHome);
    tabDiv.appendChild(btnMenu);
    tabDiv.appendChild(btnContact);

    headerDiv.appendChild(tabDiv);

    return headerDiv;

}

export function load_footer(document) {
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.textContent = "Images from Vecteezy.com"
    return footerDiv;  
}

export function load_empty_tab_content(document) {
    const tabContentDiv = document.createElement("div");
    tabContentDiv.classList.add("tab_content_empty");
    return tabContentDiv;  
}