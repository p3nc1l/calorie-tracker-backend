const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fatsecret = require("./fatsecret");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Calorie Tracker Backend is running!");
});

app.get("/api/search-foods", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required." });
  }
  try {
    const data = await fatsecret.searchFoods(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching for foods." });
  }
});

app.get("/api/food-details/", async (req, res) => {
  const foodId = req.query.id;
  if (!foodId) {
    return res.status(400).json({ error: "Query parameter 'id' is required." });
  }
  try {
    const data = await fatsecret.getFoodDetails(foodId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching food details." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});