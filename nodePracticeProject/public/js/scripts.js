// public/js/scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;

        if (!name || !email || !age) {
            alert("All fields are required!");
            event.preventDefault();
        }
    });
});
