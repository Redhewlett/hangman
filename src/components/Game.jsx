import React, { useState, useEffect } from 'react'
import useGamePlay from '../context/gamePlayContext'
import Axios from 'axios'
//components
import Input from './Input'

const options = {
  method: 'GET',
  url: 'https://random-word-api.herokuapp.com/word'
}

export default function Game() {
  const [word, setWord] = useState('')
  const [wordArray, setWordArray] = useState([])
  const { toggleIsPlaying, triedLetters, WrongGuessNbr } = useGamePlay()

  useEffect(() => {
    Axios.request(options)
      .then(function (response) {
        setWord(response.data[0])
        setWordArray([...response.data[0]])
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      {WrongGuessNbr > 3 ? <p className='text-2xl text-white'>{triedLetters}</p> : ''}
      {WrongGuessNbr === 3 ? <p className='text-2xl text-amber-300'>{triedLetters}</p> : ''}
      {WrongGuessNbr < 3 ? <p className='text-2xl text-red-600'>{triedLetters}</p> : ''}
      <div className='flex gap-4 text-4xl uppercase m-4'>
        {wordArray.map((letter, index) => (
          <p className='p-2 border-2 rounded' key={index}>
            {letter}
          </p>
        ))}
      </div>

      <Input />
    </>
  )
}
