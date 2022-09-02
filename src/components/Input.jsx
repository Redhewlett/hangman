import React, { useState } from 'react'
import useGamePlay from '../context/gamePlayContext'

export default function Input(props) {
  const [value, setValue] = useState('')
  const { substractGuessNbr, WrongGuessNbr, setTriedLetters, triedLetters } = useGamePlay()

  function submitAnswer() {
    if (WrongGuessNbr === 0) {
      return
    }
    if (value === '' || value === ' ') {
      return
    }
    setTriedLetters(value)
    substractGuessNbr()
    setValue('')
  }
  function handleInput(e) {
    setValue(e.target.value)
  }
  return (
    <>
      <div className='w-48 h-48 flex gap-2 justify-center items-center'>
        <input onChange={handleInput} value={value} maxLength='1' className=' text-black text-5xl w-20 h-20 text-center rounded' type='text' />
        <button className='border-2 rounded w-20 h-20 uppercase' onClick={submitAnswer}>
          try
        </button>
      </div>
    </>
  )
}
