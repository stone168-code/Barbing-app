// Barbing App JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Booking form
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const barber = document.getElementById("barber").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;

            if (!name || !barber || !date || !time) {
                bookingResult.innerHTML =
                    "Please fill in all the required fields.";
                return;
            }

            bookingResult.innerHTML =
                "✅ Booking successful!<br><br>" +
                "Customer: " + name + "<br>" +
                "Barber: " + barber + "<br>" +
                "Date: " + date + "<br>" +
                "Time: " + time;
        });
    }

});
