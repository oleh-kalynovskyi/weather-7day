import React, { Component } from 'react';

import Days from './days';
import Current from './current';


const API_KEY = '773411df19335a4ee21f3d753a23e6c2';

export default class Weather extends Component {
    state = {
        location: '',
        time: '',
        feels_like: '', 
        Cloudiness: '',
        Humidity: '',
        Wind: '',
        icon: '',

        cor: null,
        
        data: null
    }
    
    // async componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(success);
            
    //         function success(pos) {
    //             var crd = pos.coords;
    //             console.log(crd);
    //         };
        
    //     const response = await fetch('https://ipapi.co/json/')
    //     const data = await response.json();
    //     console.log(data);
    //     // this.setState({
    //     //     location: data,
    //     //     center: {
    //     //         lat: data.latitude,
    //     //         lng: data.longitude
    //     //     }
    //     // })

    // }


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
          area => this.setState({ cor: area.coords })
        );
    }
    
    getWeather = async () => {
        const api_city = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.cor.latitude}&lon=${this.state.cor.longitude}&units=metric&cnt=7?exclude=hourly,daily&appid=${API_KEY}`)
                const datas = await api_city.json();
            if(api_city.ok) {
                this.setState({
                    location: datas.name,
                })
            }
        
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.cor.latitude}&lon=${this.state.cor.longitude}&units=metric&cnt=7?exclude=hourly,daily&appid=${API_KEY}`)
                const data = await api_url.json();
                const current = data.current

        if(api_url.ok) {
        // icon weather
          let icon = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
        // time 
        let time = new Date();
        time.setTime(current.dt*1000);
        let setTime = time.getHours() + ":" + time.getMinutes();

          this.setState({
            time: setTime, 
            feels_like: current.feels_like, 
            Cloudiness: current.clouds,
            Humidity: current.humidity,
            Wind: current.wind_speed,
            icon: icon,

            data: data.daily
          });
        }
    
    }

    render() {
        return (
            <div className="container">
                <div className="button-wrapper">
                    <button 
                        className="button-get-weath"
                        onClick={this.getWeather}>Get weather</button>
                </div>

                { this.state.icon ? <Current 
                    Data={this.state}/>  : null }

                { this.state.icon ? <Days 
                    Data={this.state.data}/> : null }

            </div>
        )
    }
}