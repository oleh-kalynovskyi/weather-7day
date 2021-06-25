import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Days extends Component {

    render() {
        const { Data } = this.props
        return (
            <div className="days-wrapper">
            
            <Tabs>
                <TabList>
                    { Data && Data.map( (el, i) => {
                        const dateMo = new Date(el.dt * 1000).toLocaleDateString();
                        const date = new Date(el.dt * 1000);
                        const weekDay = new Array(7);
                            weekDay[0] = "Sunday";
                            weekDay[1] = "Monday";
                            weekDay[2] = "Tuesday";
                            weekDay[3] = "Wednesday";
                            weekDay[4] = "Thursday";
                            weekDay[5] = "Friday";
                            weekDay[6] = "Saturday";
                        const day = weekDay[date.getDay()];
                        return(
                            <Tab key={i}>
                                <a href="#weath" >
                                    <h3>{day}</h3>
                                    <p>{dateMo}</p>
                                    <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="" />
                                    <p>max <span>{Math.round(el.temp.max)}℃</span></p>
                                    <p>min <span>{Math.round(el.temp.min)}℃</span></p>
                                </a>
                            </Tab>
                        )
                    }) }
                </TabList>

                { Data && Data.map( (el, i) => {
                    const dateMo = new Date(el.dt * 1000).toLocaleDateString();
                    const date = new Date(el.dt * 1000);
                    const weekDay = new Array(7);
                        weekDay[0] = "Sunday";
                        weekDay[1] = "Monday";
                        weekDay[2] = "Tuesday";
                        weekDay[3] = "Wednesday";
                        weekDay[4] = "Thursday";
                        weekDay[5] = "Friday";
                        weekDay[6] = "Saturday";
                    const day = weekDay[date.getDay()];
                    return(
                        <TabPanel key={i}>
                            <Tab id="weath">
                                <div>
                                    <h3> {day}</h3>
                                    <p>{dateMo}</p>
                                    <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td>morning</td>
                                        <td>evening</td>
                                        <td>night</td>
                                    </tr>
                                    <tr>
                                        <td>temp: </td>
                                        
                                        <td><span> {Math.round(el.temp.morn)}℃</span>   </td>
                                        <td><span> {Math.round(el.temp.eve)}℃</span></td>
                                        <td><span> {Math.round(el.temp.night)}℃</span></td>
                                    </tr>
                                    <tr>
                                        <td>feels like:</td>
                                        <td><span>{Math.round(el.feels_like.morn)}℃</span></td>
                                        <td><span>{Math.round(el.feels_like.eve)}℃</span></td>
                                        <td><span>{Math.round(el.feels_like.night)}℃</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                
                                <p>temp day: <span>{Math.round(el.temp.day)}℃</span></p>
                                <p>temp day feels: <span>{Math.round(el.feels_like.day)}℃</span></p>

                                <p>Cloudiness: <span>{el.clouds}%</span></p>
                                <p>Humidity: <span>{ el.humidity } </span></p>
                                <p>Wind: <span>{ el.wind_speed }m/s</span> </p>

                            </Tab>
                        </TabPanel>
                    )
                }) }
                
            </Tabs>

            </div>
        )
    }
}

