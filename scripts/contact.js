// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    contactPage.innerHTML = "<p class='large-text centered'>Thank you for your message</p>"; // I used the class large text to make the font size 24px since its already declared in CSS, and used class centered, to align the text in the center.
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// I used the class large text to make the font size 24px since its already declared in CSS, and used class centered, to align the text in the center. 