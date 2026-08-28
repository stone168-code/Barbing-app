const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Barbing App Backend is working! 💈");
});

// Booking route
app.post("/booking", (req, res) => {
    const {
        name,
        phone,
        barber,
        service,
        date,
        time
    } = req.body;

    // Check required details
    if (!name || !phone || !barber || !service || !date || !time) {
        return res.status(400).json({
            message: "Please provide all booking details."
        });
    }

    // Show booking in Termux
    console.log("New Booking:");
    console.log({
        name,
        phone,
        barber,
        service,
        date,
        time
    });

    // Send confirmation
    res.json({
        message: "Booking received successfully! 🎉",
        booking: {
            name,
            phone,
            barber,
            service,
            date,
            time
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Barbing App Backend is working on port ${PORT}`);
});
