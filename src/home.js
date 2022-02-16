import './style.css';

export function load_home(document) {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    homeDiv.classList.add("tab_content");

    const image = document.createElement("img");
    const textDiv = document.createElement("div");
    textDiv.classList.add("home_text");
    textDiv.textContent = "Welcome to Bubble Island! " + 
        "Buy 1 get 1 free any bubble tea from now until the end of the month!";

    homeDiv.appendChild(image);
    homeDiv.appendChild(textDiv);

    return homeDiv;
}