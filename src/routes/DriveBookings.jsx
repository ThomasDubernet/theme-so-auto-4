import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import Cookies from 'js-cookie'

import Context from '../context/Context'

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

  const [bookings, setBookings] = useState([])
  const [books, setBooks] = useState([])
  const [updateState, setUpdateState] = useState(false)

  const context = useContext(Context)
  
  useEffect( () => {
    const abortController = new AbortController()
    async function fetchBookings () {
      const response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings?date=${props.day}`, {signal: abortController.signal})
      const result = await response.json()
      
      setBookings(result)
    }

    fetchBookings()
    
    return () => {
      abortController.abort()
    }
  }, [props])

  useEffect( () => {
    const tempBooks = []
    if(Object.keys(bookings).length > 0) {
      bookings.forEach( book => {
        if (book.reserved === "0") {
          const jsonBook = {
            "id": book.id,
            "date": new Date(book.date_available),
            "teacher_id": book.teacher_id
          }
          tempBooks.push(jsonBook)
        }
      })
    }
    setBooks(tempBooks)
  }, [bookings, props])

  const updateBooking = (book, teacher_id) => {
    const student_id = Cookies.get("so_auto_user_id")

    async function downCredits() {
      const newCredits = parseInt(context.user.credits)
      fetch(`${window.location.origin}/wp-json/so-auto/v1/students/${student_id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "credits": newCredits - 1
        }),
        redirect: 'follow'
      })
    }
    async function update(json) {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings/${book.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(json),
        redirect: 'follow'
      })
      if (response.status >= 200 && response.status < 299) {
        downCredits()
        context.fetchUser(student_id)
        setUpdateState(!updateState)
      }
    }

    const jsonData = {
      "date_available": moment(book.date).format('YYYY-MM-DD hh:mm'),
      "teacher_id": teacher_id,
      "student_id": student_id,
      "student_name": context.user.firstname + " " + context.user.lastname,
      "student_address": context.user.address_number + " " + context.user.address_name,
      "student_city": context.user.address_zipcode + " " + context.user.address_city,
      "reserved": "1"
    }
    
    update(jsonData)
  }

  return (
    <React.Fragment>
      <div className="d-flex flex-column text-center">
        {
          books.map((book, i) => (
            <div key={i} className="cube-book mx-3 mb-3" onClick={() => updateBooking(book)}>
              <div className="imgBooking">
                <img src="https://picsum.photos/id/0/80/80" alt=""/>
              </div>
              <div>
                {book.date.getHours()}:00
              </div>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default function DriveBookings() {

  const [teachers, setTeachers] = useState([])
  const [value, setValue] = useState(moment())
  const [calendar, setCalendar] = useState([])

  useEffect(() => {
    const abortController = new AbortController()
    async function fetchTeachers() {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/teachers`, {
        method: 'GET',
        redirect: 'follow',
        signal: abortController.signal
      })

      let data = await response.json()
      setTeachers(data)
    }
    
    fetchTeachers()
    
    return () => {
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    setCalendar(BuildCalendar(value))
    return;
  }, [value])

  return (
    <React.Fragment>
      <h1>Réserver une leçon</h1>

      <div className="navFilter mt-4 d-flex">
        <div className="dropdown d-none mx-2">
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

        <div className="dropdown d-none mx-2">
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
