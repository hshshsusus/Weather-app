import React, { useEffect, useState } from "react";
import Main from "../Main/Main";
// import axios from "axios";
// import cities from "cities.json";
import { cities } from "../../cities";

function Header() {
    console.log(cities);
    console.log("from citie",cities);
    const [cityName, setCityName] = useState("");
    const [information, setInformation] = useState({});
    const [aqiData, setaqiData] = useState({});
    const [comingDaysData, setComingDaysData] = useState({});
    // console.log("aqi",aqiData)
    function handleCityName(event) {
        setCityName(event.target.value);
        // console.log("cityname", cityName);
    }

    // console.log("cityname", cityName);
    async function fetchAQTData(lat, lon) {
        // console.log("From fetch", lat,lon);
        const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=69e06dc231ce81bbd4664da93610da6e`);
        const response = await res?.json();
        setaqiData(response);
    }

    async function comingDaysWeatherDetails(lat, lon) {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=69e06dc231ce81bbd4664da93610da6e&units=metric`);
        const response = await res.json();
        setComingDaysData(response)
    }
    async function getDetails() {
        // if(!cityName.trim()){
        //     alert("enter city name")
        //     return;
        // }
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=69e06dc231ce81bbd4664da93610da6e&units=metric`);
        const response = await res?.json();
        setInformation(response);
        const latitude = response.coord.lat;
        const longitude = response.coord.lon;
        fetchAQTData(latitude, longitude);
        comingDaysWeatherDetails(latitude, longitude);
    }



    return (
        <>
            <div className="header">
                <div className="searchbar">
                    <input type="text" placeholder="search by city..." onChange={handleCityName} />
                    <img src="../assets/search.png" alt="" width="20px" onClick={getDetails} />
                </div>
            </div>
            <Main info={information} data={aqiData} comingDays={comingDaysData}/>
        </>
    )
}
export default Header;