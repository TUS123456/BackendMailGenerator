const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 300;

// Middleware to parse JSON
app.use(bodyParser.json());

// In-memory storage for click data
const clickData = [];

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: "-----------------------",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email@gmail.com",
  },
});

// Endpoint to receive and store user click data
app.post("/api/click", (req, res) => {
  const { userId, timestamp, elementId, email } = req.body;

  if (!userId || !timestamp || !elementId || !email) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  // Store the click data
  clickData.push({
    userId,
    timestamp,
    elementId,
    email,
  });

  res.status(200).json({ success: true });
});

// Endpoint to send emails to users
app.post("/api/send-emails", async (req, res) => {
  try {
    // Iterate through clickData and send emails
    for (const click of clickData) {
      const mailOptions = {
        from: "your-email@gmail.com",
        to: click.email,
        subject: "Thanks for clicking!",
        text: `Dear ${click.userId},\n\nThanks for clicking on ${click.elementId} at ${click.timestamp}.\n\nBest regards,\nYour App`,
        attachments: [
          {
            filename: "---------------", // Change the filename as needed
            path: "----------------------", // Provide the path to your picture file
          },
        ],
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
