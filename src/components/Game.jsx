import React, { useState, useEffect } from 'react'
import useGamePlay from '../context/gamePlayContext'

//components
import Input from './Input'

export default function Game() {
  const { wrongLetters, wrongGuessNbr, word, wordArray } = useGamePlay()
  return (
    <div className='flex flex-col justify-center items-center gap-10  m-4'>
      <div className='flex gap-4 text-4xl uppercase m-4'>
        {wordArray.map((letter, index) => (
          <p className='p-2 border-2 rounded' key={index}>
            {letter}
          </p>
        ))}
      </div>
      {wrongGuessNbr > 3 ? <p className='text-3xl text-white'>{wrongLetters}</p> : ''}
      {wrongGuessNbr === 3 ? <p className='text-3xl text-amber-300'>{wrongLetters}</p> : ''}
      {wrongGuessNbr < 3 ? <p className='text-3xl text-red-600'>{wrongLetters}</p> : ''}
      <Input />
    </div>
  )
}
