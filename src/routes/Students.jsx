import React, { useState, useEffect } from 'react'
import createListOfStudents from '../api/createListOfStudents.js'
import Cookies from 'js-cookie'

import Map from '../components/Map'

import Followup from '../routes/Followup'


export default function Students() {

  const [allBooks, setAllBooks] = useState([])
  const [students, setstudents] = useState([])
  const [books, setbooks] = useState([])

  useEffect( () => {
    const abortController = new AbortController()
    const user_id = Cookies.get('so_auto_user_id');
    const fetchBookings = async () => {
      let response = await fetch(`${window.location.origin}/wp-json/so-auto/v1/bookings?teacher_id=${user_id}`, {
        meth: 'GET',
        redirect: 'follow',
        signal: abortController.signal
      })
      let data = await response.json()
      setAllBooks(data)
    }
  
    fetchBookings()

    return () => {
      abortController.abort()
    }
  }, [])
  useEffect( () => {
    setstudents(createListOfStudents(allBooks).students)
    setbooks(createListOfStudents(allBooks).books)
  }, [allBooks])

  useEffect( () => {
    console.log(students);
    console.log(books);

  }, [students, books])

  return (
    <React.Fragment>
      <h2>Suivre le parcours<br />de vos élèves en un clique !</h2>
      <div className="mr-md-4 mr-xll-8">
        <Followup students={students} books={books} />
      </div>

      <h6 className="text-warning mt-5">Retrouvez vos élèves So'auto</h6>
      <p className="sm">Les élèves qui ont rendez-vous avec vous cette semaine apparaissent sur la carte.</p>

      <Map container='ApiMapboxStudents' />
    </React.Fragment>
  )
}
