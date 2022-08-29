import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Game() {
  const [word, setWord] = useState([])
  const axios = require('axios')
  const options = {
    method: 'GET',
    url: 'https://random-word-api.herokuapp.com/word'
  }

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        const random = setWord([...response.data[0]])
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <div className='flex gap-4 text-4xl uppercase m-4'>
      {word.map((element, index) => (
        <p className='p-2 border-2' key={index}>
          {element}
        </p>
      ))}
    </div>
  )
}
