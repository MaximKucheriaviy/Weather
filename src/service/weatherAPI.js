import axios from "axios";
const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "London", days: "3", dt: "2023-04-16" },
  headers: {
    "X-RapidAPI-Key": "948ace52dfmshdfe5b745718ea6bp11c7ecjsnd661a3957043",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

class WeatherAPI {
  headers = {};
  constructor() {
    this.headers = {
      "X-RapidAPI-Key": "948ace52dfmshdfe5b745718ea6bp11c7ecjsnd661a3957043",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    };
  }
  getCurrentWeather = async (query) => {
    try {
      const result = await axios.get(options.url, {
        headers: this.headers,
        params: {
          q: query,
        },
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
}

export const weatherAPI = new WeatherAPI();
