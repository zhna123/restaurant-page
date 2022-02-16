import './style.css';

export function load_contact(document) {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    contactDiv.classList.add("tab_content");

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("item");
    const phone = document.createElement("p");
    phone.textContent = "Phone";
    const number = document.createElement("p");
    number.textContent = "456-779-8000";
    phoneDiv.appendChild(phone);
    phoneDiv.appendChild(number);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("item");
    const email = document.createElement("p");
    email.textContent = "Email";
    const emailAddr = document.createElement("p");
    emailAddr.textContent = "ccbubble@email.com";
    emailDiv.appendChild(email);
    emailDiv.appendChild(emailAddr);

    const physicalAddrDiv = document.createElement("div");
    physicalAddrDiv.classList.add("item");
    const addr = document.createElement("p");
    addr.textContent = "Address";
    const physicalAddr = document.createElement("p");
    physicalAddr.textContent = "3000 riverside, ABD, 30001";
    physicalAddrDiv.appendChild(addr);
    physicalAddrDiv.appendChild(physicalAddr);

    contactDiv.appendChild(phoneDiv);
    contactDiv.appendChild(emailDiv);
    contactDiv.appendChild(physicalAddrDiv);

    return contactDiv;
}