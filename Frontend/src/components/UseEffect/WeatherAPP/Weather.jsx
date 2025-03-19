// import { useState } from "react";
// import axios from "axios";

// const Weather = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const API_KEY = "0417259f0a31410983f52232252602";

//   const fetchWeather = async () => {
//     if (!city) return;
//     try {
//       const response = await axios.get(
//         `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
//       );
//       console.log(response)
//       setWeather(response.data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       alert("City not found or API key issue!");
//       setWeather(null);
  //   }
  // };

  // return (
  //   <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-5">
  //     <h1 className="text-3xl font-bold mb-4">Weather App</h1>

  //     <div className="flex space-x-2">
  //       <input
  //         type="text"
  //         className="p-2 border border-gray-300 rounded"
  //         placeholder="Enter city name..."
  //         value={city}
  //         onChange={(e) => setCity(e.target.value)}
  // //       />
  //       <button
  //         className="bg-blue-500 text-white px-4 py-2 rounded"
  //         onClick={fetchWeather}
  //       >
  //         Get Weather
  //       </button>
  //     </div>

  //     {weather && weather.current && (
  //       <div className="mt-5 bg-white p-4 rounded shadow-md">
  //         <h2 className="text-xl font-semibold">{weather.location.name}</h2>
  //         <h2 className="text-xl font-semibold">{weather.location.region}</h2>
  //         <p>Temperature: {weather.current.temp_c}°C</p>
  //         <p>Humidity: {weather.current.humidity}%</p>
  //         <p>Wind Speed: {weather.current.wind_kph} km/h</p>
//           <p>Condition: {weather.current.condition.text}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

import { useState } from "react";
import axios from "axios";

const Weather = ()=> {
  const[city, setCity] = useState("");
  const[weather, setWeather] = useState("null");
  const API_KEY = "0417259f0a31410983f52232252602";

  const fetchWeather = async ()=> {
    if(!city) return;
    try{
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      console.log(response)
      setWeather(response.data);
    } catch(error){
      console.error("Error fecthing weather data:", error);
      alert("city not found or API Key issue:");
      setWeather(null);
    }
  };
  

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-5">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>

      <div className="flex space-x-2">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={fetchWeather}
        >
          Get Weather
        </button>
      </div>

       {weather && weather.current && (
        <div className="mt-5 bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold">{weather.location.name}</h2>
          <h2 className="text-xl font-semibold">{weather.location.region}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind Speed: {weather.current.wind_kph} km/h</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );      
        
};

 export default Weather;


 