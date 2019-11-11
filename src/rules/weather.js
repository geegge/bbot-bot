import * as bot from "bbot";
import fetch from "node-fetch";

const openWeatherApiKey = process.env.OPENWEATHER_API_KEY || "";
const defaultLocationCity = process.env.DEFAULT_LOCATION_CITY || "";
const openWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocationCity},de&appid=${openWeatherApiKey}`;

const getWeatherData = async () => {
  const response = await fetch(openWeatherEndpoint);
  return await response.json();
};

export const weather = () => {
  bot.global.text(
    {
      contains: ["wetter"]
    },
    b => {
      const myWeather = getWeatherData();
      myWeather.then(data => {
        b.respond(
          `Das wetter in ${defaultLocationCity} ist heute: 
          *${data.weather[0].description}* bei *${Math.round(
            Number(data.main.temp) - 273.15
          )}°* Celsius.`
        );
      });
    },
    {
      id: "weather"
    }
  );
};
