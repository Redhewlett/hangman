import React, { useState } from 'react'
import useGamePlay from '../context/gamePlayContext'

export default function Input() {
  const [value, setValue] = useState('')
  const { wrongGuessNbr, compareLetters } = useGamePlay()

  function submitAnswer() {
    if (wrongGuessNbr === 0) {
      return
    }
    if (value === '' || value === ' ') {
      return
    }
    compareLetters(value)
    setValue('')
  }
  function handleInput(e) {
    setValue(e.target.value)
  }
  return (
    <>
      <div className='w-48 h-48 flex gap-2 justify-center items-center'>
        <input onChange={handleInput} value={value} maxLength='1' className=' text-black text-5xl w-20 h-20 text-center rounded' type='text' />
        <button className=' btns border-2 rounded w-20 h-20 uppercase' onClick={submitAnswer}>
          try
        </button>
      </div>
    </>
  )
}
