import React from 'react'
import moment from 'moment'
import { useState, useEffect } from 'react'
import Hours from './calendar/Hours'

function BuildCalendar(value) {
  const startDay = value.clone().startOf("month").startOf('week')
  const endDay = value.clone().endOf("month").endOf('week')
  const day = startDay.clone().subtract(1, "day")
  const calendar = []
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7).fill(0).map(() => day.add(1, 'day').clone())
    )
  }

  return calendar
}

export default function Calendar() {
  const [calendarFirst, setCalendarFirst] = useState([])
  const [calendarSecond, setCalendarSecond] = useState([])
  const [calendarThird, setCalendarThird] = useState([])
  const [value] = useState(moment())
  const [daySelect, setDaySelect] = useState(value)
  const [dayActive, setDayActive] = useState({})

  const hours = []
  new Array(24).fill().forEach((acc, index)=> {
    if(index > 7 && index < 17)
    hours.push(moment({hour: index}).format('k:mm'))
  })
  
  useEffect(() => {
    setCalendarFirst(BuildCalendar(value))
    setCalendarSecond(BuildCalendar(value.clone().add(1, 'month')))
    setCalendarThird(BuildCalendar(value.clone().add(2, 'month')))
  }, [value])

  function setActive(day) {
    if(!day.isBefore(moment(), 'day')) {
      setDayActive(day)
      setDaySelect(day)
    }
  }

  return (
    <React.Fragment>
      <div className="calendars">
        <div className="calendar current">
          <h6 className="text-warning text-center">
            {value.format("MMMM")}
          </h6>
          <div className="weekValue">
            <p>D</p>
            <p>L</p>
            <p>M</p>
            <p>M</p>
            <p>J</p>
            <p>V</p>
            <p>S</p>
          </div>
          {calendarFirst.map((week, i) => (
            <div key={i}>
              {week.map((day, ind) => (
                <div key={ind} className={"day" + (day.isBefore(moment(), 'day') ? ' passed ' : '' )} onClick={()=> setActive(day)}>
                  <div className={daySelect.isSame(day, 'day') ? ' selected ' : ''} >
                    {day.format('D').toString()}
                    {day === dayActive && <Hours day={day} active={true}/>}
                      
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="calendar">
          <h6 className="text-dark text-center">
            {value.clone().add(1, 'month').format("MMMM")}
          </h6>
          <div className="weekValue">
            <p>D</p>
            <p>L</p>
            <p>M</p>
            <p>M</p>
            <p>J</p>
            <p>V</p>
            <p>S</p>
          </div>
          {calendarSecond.map((week, i) => (
            <div key={i}>
              {week.map((day, ind) => (
                <div key={ind} className="day" onClick={()=> setActive(day)}>
                  <div className={daySelect.isSame(day, 'day') ? 'selected' : ''} >
                    {day.format('D').toString()}
                    {day === dayActive && <Hours day={day} active={true}/>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="calendar">
          <h6 className="text-dark text-center">
            {value.clone().add(2, 'month').format("MMMM")}
          </h6>
          <div className="weekValue">
            <p>D</p>
            <p>L</p>
            <p>M</p>
            <p>M</p>
            <p>J</p>
            <p>V</p>
            <p>S</p>
          </div>
          {calendarThird.map((week, i) => (
            <div key={i}>
              {week.map((day, ind) => (
                <div key={ind} className="day" onClick={()=> setActive(day)}>
                  <div className={daySelect.isSame(day, 'day') ? 'selected' : ''} >
                    {day.format('D').toString()}
                    {day === dayActive && <Hours day={day} active={true}/>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}
