import React, { Component } from 'react'

export default class Current extends Component {
    render() {
        const { Data } = this.props
        return (
            <div className="curent-wrapper">
                <div className="curent-weather">
                    <h3>Current weather</h3>
                    <span> In {Data.location} </span>
                    <img src={Data.icon} alt="" />
                    <p>Temperature feels like: <span>{ Math.round(Data.feels_like) }℃</span> </p>
                    <p>Time: <span>{ Data.time }</span> </p>
                    <p>Cloudiness: <span>{ Data.Cloudiness }%</span> </p>
                    <p>Humidity: <span>{ Data.Humidity }</span> </p>
                    <p>Wind: <span>{ Data.Wind }m/s</span> </p>
                </div>
            </div> 
        )
    }
}