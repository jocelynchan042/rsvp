// // backend/server.js
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const RSVP = require("./models/RSVP");

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // POST RSVP
// app.post("/api/rsvp", async (req, res) => {
//   const { name, email, attending } = req.body;
//   try {
//     const newRSVP = new RSVP({ name, email, attending });
//     await newRSVP.save();
//     res.status(200).json({ message: "RSVP saved!" });
//   } catch (err) {
//     res.status(500).json({ message: "Error saving RSVP", error: err });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


///////////////////////////////////////////////////////////////////////////////////////
// view all RSVP --> Admin!
// GET all RSVPs
// app.get("/api/rsvp", async (req, res) => {
//     try {
//       const allRSVPs = await RSVP.find();
//       res.json(allRSVPs);
//     } catch (err) {
//       res.status(500).json({ message: "Error fetching RSVPs" });
//     }
//   });

//create html page for that 