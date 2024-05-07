// Function to display the cookie consent popup if not already accepted
function checkCookieConsent() {
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-popup").style.display = "block";
    }
}

// Function to accept cookies and hide the popup
function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-popup").style.display = "none";
}

// Initialize cookie consent check on page load
document.addEventListener("DOMContentLoaded", checkCookieConsent);
