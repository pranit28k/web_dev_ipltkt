
// TOAST NOTIFICATION
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(showToast.timer);

    showToast.timer = window.setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// MATCH BOOK BUTTONS
document.querySelectorAll(".match-book-link").forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Taking you to the booking form.");
    });

});


// ACTIVITY 7: SELECTOR FORMS AND LIVE INTERACTION

// 1. Select form controls
const match = document.getElementById("match");
const stand = document.getElementById("stand");
const quantity = document.getElementById("quantity");

// 2. Select summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryPrice = document.getElementById("summaryPrice");
const totalAmount = document.getElementById("totalAmount");

// 3. Ticket prices
const prices = {
    "CSK vs MI": {
        General: 800,
        Premium: 1500,
        VIP: 3000
    },

    "RCB vs KKR": {
        General: 1000,
        Premium: 2000,
        VIP: 4000
    },

    "MI vs KKR": {
        General: 800,
        Premium: 1800,
        VIP: 3500
    }
};


// 4. Update booking summary
function updateSummary() {

    const selectedMatch = match.value;
    const selectedStand = stand.value;

    const ticketQuantity = Math.max(
        0,
        Number(quantity.value) || 0
    );

    let price = 0;

    if (selectedMatch && selectedStand) {
        price = prices[selectedMatch]?.[selectedStand] || 0;
    }

    const total = price * ticketQuantity;

    summaryMatch.textContent =
        selectedMatch || "Not Selected";

    summaryStand.textContent =
        selectedStand || "Not Selected";

    summaryPrice.textContent = price;

    summaryQuantity.textContent = ticketQuantity;

    totalAmount.textContent = total;

    showToast("Booking summary updated!");
}


// 5. Add event listeners
match.addEventListener("change", updateSummary);

stand.addEventListener("change", updateSummary);

quantity.addEventListener("input", updateSummary);


// 6. Form submission
document.getElementById("ticketForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        updateSummary();

        alert("Booking details submitted successfully!");

    }
);
