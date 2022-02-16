import './style.css';

export function load_menu(document) {
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    menuDiv.classList.add("tab_content");

    const title = document.createElement("h1");
    title.textContent = "Bubble Tea";

    menuDiv.appendChild(title);

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items")

    const itemName = document.createElement("div");
    itemName.setAttribute('style', 'white-space: pre;');
    itemName.textContent = "Cinnamon Apple Tea \r\n";
    itemName.textContent += "Honeydew Mocha Tea \r\n";
    itemName.textContent += "Orange Tea \r\n";
    itemName.textContent += "Chocolate Tea \r\n";

    const itemPrice = document.createElement("div");
    itemPrice.setAttribute('style', 'white-space: pre;');
    itemPrice.textContent = "$3.29 \r\n";
    itemPrice.textContent += "$3.29 \r\n";
    itemPrice.textContent += "$3.29 \r\n";
    itemPrice.textContent += "$3.29 \r\n";

    itemsDiv.appendChild(itemName);
    itemsDiv.appendChild(itemPrice);

    menuDiv.appendChild(itemsDiv);

    return menuDiv;
}