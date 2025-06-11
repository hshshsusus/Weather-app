import React, { useEffect, useState } from "react";
function Main({ info, data, comingDays }) {
    console.log("aqi from main", info)
    // console.log("From main", info);
    const dtTimestamp = comingDays.list?.[0].dt;
    const properData = new Date(dtTimestamp * 1000);
    const pDate = properData.toLocaleDateString();
    const pTime = properData.toLocaleTimeString();

    const dtTimestamp1 = comingDays.list?.[1].dt;
    const properData1 = new Date(dtTimestamp1 * 1000);
    const pDate1 = properData1.toLocaleDateString();
    const pTime1 = properData1.toLocaleTimeString();

    const dtTimestamp2 = comingDays.list?.[2].dt;
    const properData2 = new Date(dtTimestamp2 * 1000);
    const pDate2 = properData2.toLocaleDateString();
    const pTime2 = properData2.toLocaleTimeString();

    const dtTimestamp3 = comingDays.list?.[3].dt;
    const properData3 = new Date(dtTimestamp3 * 1000);
    const pDate3 = properData3.toLocaleDateString();
    const pTime3 = properData3.toLocaleTimeString();

    const dayTimestamp = comingDays.list?.[0].dt_txt;
    const properDayname = new Date(dayTimestamp);
    const pDayname = properDayname.toLocaleDateString("en-US", { weekday: 'long' })

    const dtTimestamp4 = comingDays.list?.[4].dt;
    const properData4 = new Date(dtTimestamp4 * 1000);
    const pDate4 = properData4.toLocaleDateString();
    const pTime4 = properData4.toLocaleTimeString();

    const dtTimestamp5 = comingDays.list?.[5].dt;
    const properData5 = new Date(dtTimestamp5 * 1000);
    const pDate5 = properData5.toLocaleDateString();
    const pTime5 = properData5.toLocaleTimeString();

    const dayTimestamp4 = comingDays.list?.[4].dt_txt;
    const properDayname4 = new Date(dayTimestamp4);
    const pDayname4 = properDayname4.toLocaleDateString("en-US", { weekday: 'long' })

    const dtTimestamp12 = comingDays.list?.[12].dt;
    const properData12 = new Date(dtTimestamp12 * 1000);
    const pDate12 = properData12.toLocaleDateString();

    const dayTimestamp12 = comingDays.list?.[12].dt_txt;
    const properDayname12 = new Date(dayTimestamp12);
    const pDayname12 = properDayname12.toLocaleDateString("en-US", { weekday: 'long' })

    const dtTimestamp20 = comingDays.list?.[20].dt;
    const properData20 = new Date(dtTimestamp20 * 1000);
    const pDate20 = properData20.toLocaleDateString();

    const dayTimestamp20 = comingDays.list?.[20].dt_txt;
    const properDayname20 = new Date(dayTimestamp20);
    const pDayname20 = properDayname20.toLocaleDateString("en-US", { weekday: 'long' })

    const dtTimestamp28 = comingDays.list?.[28].dt;
    const properData28 = new Date(dtTimestamp28 * 1000);
    const pDate28 = properData28.toLocaleDateString();

    const dayTimestamp28 = comingDays.list?.[0].dt_txt;
    const properDayname28 = new Date(dayTimestamp28);
    const pDayname28 = properDayname28.toLocaleDateString("en-US", { weekday: 'long' })
    // console.log(pDayname);

    const timeStamp = info.dt;
    const date = new Date(timeStamp * 1000);
    const formattedDate = date.toLocaleDateString()
    const formattedTime = date.toLocaleTimeString()

    const sunriseTimestamp = info.sys?.sunrise;
    const sunrise = new Date(sunriseTimestamp * 1000)
    const sunriseTime = sunrise.toLocaleTimeString();

    const sunsetTimestamp = info.sys?.sunset;
    const sunset = new Date(sunriseTimestamp * 1000);
    const sunsetTime = sunset.toLocaleTimeString();


    return (
        <>
            <div className="main-container">
                <div className="left">
                    <div className="box left-top-box">
                        <div className="city-temp">
                            <h3 className="m-0">{info.name || "City name"}</h3>
                            <div className="temp-desc d-flex">
                                <h2 className="m-0 temp">{info.main?.temp}&deg;C</h2>
                                <p className="m-0">flees-like :<span className="m-0 f-temp">{info.main?.feels_like || "0.0"}&deg;C</span></p>
                            </div>
                            <p className="m-0 desc">{info.weather?.[0].description || "Sky desc"}</p>
                        </div>
                        <div className="date-time">
                            <div className="date">
                                <img src="../assets/calendar.png" alt="" width="28px" className="m-0" />
                                <p className="m-0">{formattedDate || "00-00-0000"}</p>
                            </div>
                            <div className="time">
                                <img src="../assets/time.png" alt="" width="28px" />
                                <p className="m-0">{formattedTime || "00-00"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="box left-bottom-box">
                        <h5>Coming-five-days</h5>
                        <div className="day-desc">
                            <div className="cloud-temp">
                                <img src="../assets/cloud.png" alt="" width="35px" />
                                <p className="m-0">{comingDays.list?.[0].main.temp}&deg;C</p>
                            </div>
                            <span>{pDayname || "Saturday"}</span>
                            <span>{pDate || "00-00-0000"}</span>
                        </div>
                        <div className="day-desc">
                            <div className="cloud-temp">
                                <img src="../assets/cloud.png" alt="" width="35px" />
                                <p className="m-0">{comingDays.list?.[4].main.temp}&deg;C</p>
                            </div>
                            <span>{pDayname4 || "Saturday"}</span>
                            <span>{pDate4 || "00-00-0000</span"}</span>
                        </div>
                        <div className="day-desc">
                            <div className="cloud-temp">
                                <img src="../assets/cloud.png" alt="" width="35px" />
                                <p className="m-0">{comingDays.list?.[12].main.temp}&deg;C</p>
                            </div>
                            <span>{pDayname12 || "Saturday"}</span>
                            <span>{pDate12 || "00-00-0000"}</span>
                        </div>
                        <div className="day-desc">
                            <div className="cloud-temp">
                                <img src="../assets/cloud.png" alt="" width="35px" />
                                <p className="m-0">{comingDays.list?.[20].main.temp}&deg;C</p>
                            </div>
                            <span>{pDayname20 || "Saturday"}</span>
                            <span>{pDate20 || "00-00-0000"}</span>
                        </div>
                        <div className="day-desc">
                            <div className="cloud-temp">
                                <img src="../assets/cloud.png" alt="" width="35px" />
                                <p className="m-0">{comingDays.list?.[28].main.temp}&deg;C</p>
                            </div>
                            <span>{pDayname28 || "Saturday"}</span>
                            <span>{pDate28 || "00-00-0000"}</span>
                        </div>

                    </div>
                </div>
                <div className="right">
                    <div className="top-row">
                        <div className="pressure">
                            <img src="assets/wind1.png" alt="" width="30px" />
                            <div>
                                <p className="m-0">Pressure</p>
                                <h5 className="m-0">{info.main?.pressure || "0"}hpa</h5>
                            </div>
                        </div>
                        <div className="pressure">
                            <img src="assets/wind1.png" alt="" width="30px" />
                            <div>
                                <p className="m-0">Pressure</p>
                                <h5 className="m-0">{info.main?.pressure || "0"}hpa</h5>
                            </div>
                        </div>
                        <div className="pressure">
                            <img src="assets/wind1.png" alt="" width="30px" />
                            <div>
                                <p className="m-0">Pressure</p>
                                <h5 className="m-0">{info.main?.pressure || "0"}hpa</h5>
                            </div>
                        </div>
                        <div className="pressure">
                            <img src="assets/wind1.png" alt="" width="30px" />
                            <div>
                                <p className="m-0">Pressure</p>
                                <h5 className="m-0">{info.main?.pressure || "0"}hpa</h5>
                            </div>
                        </div>
                    </div>
                    <div className="middle-row">
                        <div className="middle-left-box box1">
                            <h5>Air-quality-index (AQI)</h5>
                            <div className="aqi-informatiom">
                                <img src="../assets/wind.png" alt="" width="35px" />
                                <div className="box2">
                                    <p className="m-0">PM25</p>
                                    <h5 className="m-0">{data.list?.[0].components.pm2_5 || "0.0"}</h5>
                                </div>
                                <div className="box2">
                                    <p className="m-0">SO2</p>
                                    <h5 className="m-0">{data.list?.[0].components.so2 || "0.0"}</h5>
                                </div>
                                <div className="box2">
                                    <p className="m-0">NO2</p>
                                    <h5 className="m-0">{data.list?.[0].components.no2 || "0.0"}</h5>
                                </div>
                                <div className="box2">
                                    <p className="m-0">O3</p>
                                    <h5 className="m-0">{data.list?.[0].components.o3 || "0.0"}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="middle-right-box box1">
                            <h5 className="m-0">Sunrise-Sunset</h5>
                            <div className="sunrise-sunset d-flex">
                                <div className="sunrise">
                                    <img src="../assets/sun1.png" alt="" width="40px" />
                                    <div>
                                        <p className="m-0">Sunrise</p>
                                        <h5 className="m-0">{sunriseTime || "00-00 AM"}</h5>
                                    </div>
                                </div>
                                <div className="sunset">
                                    <img src="../assets/moon.png" alt="" width="30px" />
                                    <div>
                                        <p className="m-0">Sunset</p>
                                        <h5 className="m-0">{sunsetTime || "00.00PM"}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-row">
                        <div className="hour">

                            <h5 className="m-0">Today</h5>
                            <div className="hour-info">
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime || "0.0 AM"}</h6>
                                    <img src="../assets/clouds.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[0].main.temp}&deg;C</h6>
                                </div>
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime1 || "0.0 AM"}</h6>
                                    <img src="../assets/cloud1.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[1].main.temp}&deg;C</h6>
                                </div>
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime2 || "0.0 AM"}</h6>
                                    <img src="../assets/sun.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[2].main.temp}&deg;C</h6>
                                </div>
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime3 || "0.0 AM"}</h6>
                                    <img src="../assets/clouds.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[3].main.temp}&deg;C</h6>
                                </div>
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime4 || "0.0 AM"}</h6>
                                    <img src="../assets/clouds.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[4].main.temp}&deg;C</h6>
                                </div>
                                <div className="bottom-row-box">
                                    <h6 className="m-0">{pTime5 || "0.0 AM"}</h6>
                                    <img src="../assets/clouds.png" alt="" width="35px" />
                                    <h6 className="m-0">{comingDays.list?.[5].main.temp}&deg;C</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;