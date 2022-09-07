import React, { useEffect } from 'react'
import useGamePlay from '../context/gamePlayContext'
import HangMan from './HangMan'

//components
import Input from './Input'

export default function Game() {
  const { wrongLetters, wordArray, goodAnswers, playerWins, checkPlayerWin } = useGamePlay()
  const slicedArray = wordArray.slice(1, wordArray.length)
  // console.log(wordArray)

  useEffect(() => {
    checkPlayerWin()
  }, [goodAnswers])

  return (
    <div className='flex flex-col justify-center items-center gap-0 m-4'>
      <div className='flex gap-4 text-4xl uppercase m-4'>
        <p className='p-2 border-2 rounded bg-red-400'>{wordArray[0]}</p>
        {slicedArray.map((letter, index) =>
          goodAnswers.includes(letter) ? (
            <p className='p-2 border-2 rounded' key={index}>
              {letter}
            </p>
          ) : (
            '_'
          )
        )}
      </div>
      <p className='text-3xl text-white'>{wrongLetters}</p>

      <div className='flex flex-col justify-center items-center'>
        <HangMan />
        {playerWins ? 'YOU WON!' : <Input />}
      </div>
    </div>
  )
}
