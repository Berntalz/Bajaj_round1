const express = require("express");
const app = express();

app.use(express.json());

app
    .route("/bfhl")
    .get((req, res) => {
        res.status(200).json({ operation_code: 1 });
    })
    .post((req, res) => {
        app.post("/bfhl", (req, res) => {
            try {
                const data = req.body.data || [];
                const numbers = [];
                const alphabets = [];
                let highest_alphabet = "";

                for (const item of data) {
                    if (!isNaN(item) && item.trim() !== "") {
                        numbers.push(Number(item)); // Ensure the item is converted to a number
                    } else if (item.length === 1 && isNaN(item)) {
                        alphabets.push(item);
                        if (
                            !highest_alphabet ||
                            item.toUpperCase() > highest_alphabet.toUpperCase()
                        ) {
                            highest_alphabet = item;
                        }
                    }
                }

                res.json({
                    is_success: true,
                    user_id: "aman_01",
                    email: "aman.deep2021@vitstudent.ac.in",
                    roll_number: "21BIT0225",
                    numbers: numbers,
                    alphabets: alphabets,
                    highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
                });
            } catch (error) {
                console.error("Error processing request:", error);
                res.status(500).json({ is_success: false, message: "Error processing request" });
            }
        });

    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
