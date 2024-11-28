// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitBtn = document.getElementById("submit-button");
const body = document.getElementById("contact-page");

function submit() {
    const newMessage = document.createElement("p");
    newMessage.innerHTML = "Thank you for your message!";
    newMessage.style.fontSize = "24px";
    body.replaceChildren(newMessage);
}

submitBtn.addEventListener("click",submit);