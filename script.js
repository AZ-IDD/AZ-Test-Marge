document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const results = document.getElementById("results");
    results.innerHTML =
        "<p><strong>Full Name:</strong> " + fullName + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Phone:</strong> " + phone + "</p>";
    results.classList.remove("hidden");
});
