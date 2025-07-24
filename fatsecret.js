const axios = require('axios');
const qs = require("querystring");

let accessToken = null;
let tokenExpiry = null;

async function authenticate() {
  const now = Date.now();
  if (accessToken && tokenExpiry && now < tokenExpiry) return accessToken;


  const { FATSECRET_CLIENT_ID, FATSECRET_CLIENT_SECRET } = process.env;

  const authHeader = Buffer.from(`${FATSECRET_CLIENT_ID}:${FATSECRET_CLIENT_SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      "https://oauth.fatsecret.com/connect/token", 
      qs.stringify({ grant_type: "client_credentials", scope: "basic" }),
      { headers : { "Content-Type": "application/x-www-form-urlencoded", "Authorization": `Basic ${authHeader}` } }
    )

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in * 1000 - 60000);
    return accessToken;
  } catch (error) {
    console.error("OAuth failed:", error.response?.data || error.message);
    throw new Error("Authentication failed");
  }
}

async function searchFoods(query) {
  const token = await authenticate();
  const response = await axios.get("https://platform.fatsecret.com/rest/server.api", {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      method: "foods.search",
      search_expression: query,
      format: "json"
    }
  });
  return response.data;
}

async function getFoodDetails(foodId) {
  const token = await authenticate();
  const response = await axios.get("https://platform.fatsecret.com/rest/server.api", {
    headers: { Authorization: `Bearer ${token}` },
    params: {
      method: "food.get",
      food_id: foodId,
      format: "json"
    }
  });
  return response.data;
}

module.exports = {
  searchFoods,
  getFoodDetails
};