import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BoxElement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faPlus, faWind } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function GetWeather() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    loading: false,
    data: {},
    error: false,
  });

  const toDateFunction = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const WeekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${
      months[currentDate.getMonth()]
    }`;
    return date;
  };

  const fetchWeather = async () => {
    setWeather({ ...weather, loading: true });
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "f00c38e0279b7bc85480c3fe775d518c";
    await axios
      .get(url, {
        params: {
          q: "Da Nang",
          units: "metric",
          appid: api_key,
        },
      })
      .then((res) => {
        // console.log("res.data", res.data);
        setWeather({ data: res.data, loading: false, error: false });
      })
      .catch((error) => {
        setWeather({ ...weather, data: {}, error: true });
        // console.log("error", error);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="weather">
      {weather.loading && (
        <>
          <FontAwesomeIcon icon={faSpinner} size="1x" color="white" />{" "}
        </>
      )}

      {weather && weather.data && weather.data.main && (
        <div className="weatherInfor">
          <div className="des-temp">
            <FontAwesomeIcon icon={faPlus} size="1x" color="white" />{" "}
            {Math.round(weather.data.main.temp)}°C
            <img
              className=""
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
              height="50px"
            />
          </div>
          <div className="des-wind-hum">
            <p>
              <FontAwesomeIcon icon={faDroplet} size="1x" color="white" />{" "}
              {Math.round(weather.data.main.humidity)}%
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faWind} size="1x" color="white" />{" "}
              {weather.data.wind.speed}m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetWeather;
