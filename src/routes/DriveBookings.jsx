import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'

function BuildCalendar(value) {
  const startDay = value.clone().startOf('week')
  const endDay = value.clone().endOf('week')
  let day = startDay.clone().subtract(1, "day")
  const calendar = []
  while (day.isBefore(endDay, "day")) {
    calendar.push(day)
    day = day.add(1, 'day').clone()
  }
  return calendar
}

function BuildHour(props) {

  let bookings = useRef([])
  
  fetch(`${window.location.origin}/wp-json/so-auto/v1/availabilities?date_available=${props.day}`, {
    method: 'GET',
    redirect: 'follow'
  })
    .then(response => response.json())
    .then(result => {
      bookings.current = result
    })
    .catch(error => console.log('error', error));

  // let books = []
  bookings.current.forEach(book => {
      const hours = JSON.parse(book.hours)
      hours.forEach( ()=> {
        console.log('test');
        // books.push(new Date(props.day + hour))
      })
  })

  


  return (
    <React.Fragment>
      <ul>
        
      </ul>
    </React.Fragment>
  )
}

export default function DriveBookings() {

  const [teachers, setTeachers] = useState([])
  const [value, setValue] = useState(moment())
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        setTeachers(result)
      })
      .catch(error => console.log('error', error));
  }, [])

  useEffect(() => {
    setCalendar(BuildCalendar(value))
  }, [value])

  return (
    <React.Fragment>
      <h1>Réserver une leçon</h1>

      <div className="navFilter mt-4 d-flex">
        <div className="dropdown mx-2">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownBoite" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Boîte</button>
          <div className="dropdown-menu" aria-labelledby="dropdownBoite">
            <li className="dropdown-item">
              <input className="form-check-input" type="checkbox" value="manuelle" />
              Manuelle
            </li>
            <li className="dropdown-item">
              <input className="form-check-input" type="checkbox" value="automatique" />
              Automatique
            </li>
          </div>
        </div>

        <div className="dropdown mx-2">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownTeachers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Moniteurs</button>
          <div className="dropdown-menu" aria-labelledby="dropdownTeachers">
            
            {
              teachers.map(teacher => {
                return (
                  <li className="dropdown-item" key={teacher.teacher_id}>
                    <input className="form-check-input" type="checkbox" value={teacher.teacher_id} />
                    {teacher.teacher_firstname} {teacher.teacher_lastname}
                  </li>
                )
              })
            }
          </div>
        </div>

        <div className="navCalendar ml-auto d-flex">
            <button className="btn-calendar" onClick={() => setValue(value.clone().subtract(7, "d"))}disabled={value.isSame(moment(), 'week')}>Précédent</button>
            <button className="btn-calendar" onClick={() => setValue(moment())} disabled={value.isSame(moment(), 'week')}>Aujourd'hui</button>
            <button className="btn-calendar" onClick={() => setValue(value.clone().add(7, "d"))}>Suivant</button>
        </div>
      </div>

      <div className="calendarWeek my-4">
          {
            calendar.map((day, i) => (
              <div key={i} className={"column-day p-2 " + (i%2 === 0 ? 'gray' : '')}>
                <p className="text-center">{day.format('DD MMM').toString()}</p>
                <BuildHour day={day.format('YYYY-MM-DD')} />
              </div>
            ))
          }
      </div>
    </React.Fragment>
  )
}
