import React from "react";
import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);

    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={25} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemperatures-max">{maxTemperature()}</span>
        <span className="ForecastTemperatures-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

export default ForecastDay;
