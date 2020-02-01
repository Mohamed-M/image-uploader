import React, { Component } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

import './Calendar.scss';

class Calendar extends Component {

  formatTime = () => {
    let newTimeStamp = new Date();

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfTheWeek = days[newTimeStamp.getDay()];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthOfTheYear = months[newTimeStamp.getMonth()];

    let dayOfTheMonth = newTimeStamp.getDate();

    let fullYear = newTimeStamp.getFullYear();

    let seconds = (newTimeStamp.getSeconds() < 10) ? '0' + newTimeStamp.getSeconds() : newTimeStamp.getSeconds();
    let minutes = (newTimeStamp.getMinutes() < 10) ? '0' + newTimeStamp.getMinutes() : newTimeStamp.getMinutes();
    let hours = (newTimeStamp.getHours() < 10) ? '0' + newTimeStamp.getHours() : newTimeStamp.getHours();

    let result = hours + ':' + minutes + ':' + seconds;


    let H = result.substr(0, 2);
    let h = H % 12 || 12;
    let AMPM = (H < 12 || H === 24) ? " AM" : " PM";

    let timeFormatted = h + result.substr(2, 6) + AMPM;

    let dateFormatted = `${dayOfTheWeek}, ${monthOfTheYear} ${dayOfTheMonth} ${fullYear}`;

    let header = document.querySelector('.formatted-time');

    header.innerHTML = 
    `<span class="d-block">${dateFormatted}</span>
    <span class="d-block">${timeFormatted}</span>`
    ;
  }

  componentDidMount() {
    this.formatTime();
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="card text-white bg-primary col-6 m-auto">
            <div className="card-header">Calendar <FaRegCalendarAlt /></div>
            <div className="card-body">
              <div className="jumbotron bg-primary">
                <h1 className="display-4 formatted-time text-center">{''}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;