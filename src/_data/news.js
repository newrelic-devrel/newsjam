const axios = require("axios");
require('dotenv').config()

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}&pageSize=6`);
      return response.data;
    } catch (error) {
      console.error(error);
    }

  };