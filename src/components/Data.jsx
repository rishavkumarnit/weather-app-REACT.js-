import React, { useState } from "react";

const Data = () => {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [city, setCity] = useState("");
  let lastEpoch = Date.now() - 1100;

  const fetchData = async () => {
    const currentEpoch = Date.now();
    if (currentEpoch - lastEpoch <= 1000) {
      alert("slow up buddy!!");
      return;
    }
    if (!city) {
      alert("add city name");
      return;
    }
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (response.status != 200) {
        throw new Error("Out of service");
      }
      const data = await response.json();
      setHumidity(data.main.humidity);
      setTemperature(data.main.temp);
      setWeather(data.weather[0].description);
    } catch (error) {
      setHumidity("invalid");
      setTemperature("invalid");
      setWeather("invalid");
      console.log("Error fetching weather data:", error.message);
    }
    lastEpoch = Date.now();
  };
  return (
    <>
      <div className="p-4 sm:p-12 mx-auto bg-blue-300 rounded-md h-[90%] w-[90%]">
        <div className="flex gap-2 flex-wrap sm:gap-14 justify-center mt-20">
          <div className="flex flex-col items-center justify-center sm:gap-8 gap-2">
            <span className="font-semibold">Weather</span>
            <span className="bg-blue-400 rounded-md h-20 w-44  p-4  text-center overflow-y-hidden">
              {weather}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center sm:gap-8 gap-2">
            <span className="font-semibold">Temperature(Celsius)</span>
            <span className="bg-blue-400 rounded-md h-20 w-44  p-4  text-center overflow-auto">
              {temperature}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center sm:gap-8 gap-2">
            <span className="font-semibold">Humidity(%)</span>
            <span className="bg-blue-400 rounded-md h-20 w-44  p-4  text-center overflow-auto">
              {humidity}
            </span>
          </div>
        </div>
        <div className="flex flex-col mt-4 sm:mt-18 justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-4">
            <div>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                className="h-8 w-28 rounded-sm px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-200"
              />
            </div>
            <div>
              <button
                className="rounded-sm bg-blue-500 shadow w-18 focus:ring-2 focus:outline-none active:scale-95 active:translate-z-1 mt-1 hover:cursor-pointer"
                onClick={fetchData}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
