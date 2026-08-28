document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");

    if (!bookingForm) {
        console.log("Booking form not found.");
        return;
    }

    bookingForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();
        const barber = document.getElementById("barber")?.value;
        const service = document.getElementById("service")?.value;
        const date = document.getElementById("date")?.value;
        const time = document.getElementById("time")?.value;

        if (!name || !phone || !barber || !service || !date || !time) {
            bookingResult.innerHTML =
                "Please fill in all the required details.";
            return;
        }

        bookingResult.innerHTML = "Sending your booking...";

        try {
            const response = await fetch("http://localhost:3000/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    phone,
                    barber,
                    service,
                    date,
                    time
                })
            });

            const data = await response.json();

            if (response.ok) {
                bookingResult.innerHTML =
                    "✅ Booking received successfully!";
                bookingForm.reset();
            } else {
                bookingResult.innerHTML =
                    data.message || "Booking failed.";
            }

        } catch (error) {
            console.error(error);
            bookingResult.innerHTML =
                "❌ Cannot connect to the backend.";
        }
    });
});
