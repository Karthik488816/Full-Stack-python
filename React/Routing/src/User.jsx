/*import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {username}=useParams()
  return (
    <div>
      <span>
        Accessing dynamic params value : {username}
      </span>
    </div>
  )
}
export default User
*/



/*
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ useState for loading
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        // const res = await fetch("https://fakestoreapi.com/products/${id}");
        const res = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []); // ✅ runs only once

  if (loading) {
    return (
      <h1 style={{ color: "red", marginTop: "200px", marginLeft: "60px", fontSize: "50px" }}>
        Loading.......
      </h1>
    );
  }

  return (
    <div>
      {products.map((item) => (

        <ul key={item.id}>
          <li>
            <img src={item.image} alt={item.title} width="100" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={()=>{
              <Link to={`product/${item.id}`}></Link>
            }}></button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default User;
*/

import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) return alert("Enter a city name!");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
