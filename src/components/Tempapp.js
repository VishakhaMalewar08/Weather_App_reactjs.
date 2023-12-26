import React, { useEffect, useState } from "react";
import "./css/Style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8171f5d90d8d024a61f355a19b7c4948`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resJson = await response.json();
        setCity(resJson.main);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setCity(null);
      }
    };
    fetchApi();
  }, [search]);
  
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div >
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min_temp: {city.temp_min}°C <br></br>
                Max_temp: {city.temp_max}°C
              </h3>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
