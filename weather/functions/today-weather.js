const axios = require('axios');

async function todayWeather() {
    const url = 'https://ipapi.co/json/';

    const response = await axios.get(url);
    return response.data;
}

module.exports = todayWeather;