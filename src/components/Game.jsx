import React, { useEffect, useState } from 'react'
import useGamePlay from '../context/gamePlayContext'
import HangMan from './HangMan'
import { Modal } from '@mantine/core'

//components
import Input from './Input'

export default function Game() {
  const { wrongLetters, word, wordArray, goodAnswers, playerWins, checkPlayerWin, gameOver, setGameOver } = useGamePlay()
  const slicedArray = wordArray.slice(1, wordArray.length)
  const [modalOpen, setModalOpen] = useState(false)
  // console.log(wordArray)

  useEffect(() => {
    checkPlayerWin()
    setGameOver()
    if (gameOver) {
      setModalOpen(!modalOpen)
    }
  }, [goodAnswers, playerWins, gameOver, wrongLetters])

  return (
    <div className='flex flex-col justify-center items-center gap-0 m-4'>
      <div className='flex gap-4 text-4xl uppercase m-4'>
        <p className='p-2 border-2 rounded bg-red-400'>{wordArray[0]}</p>
        {slicedArray.map((letter, index) =>
          goodAnswers.includes(letter) || gameOver ? (
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
        {gameOver ? '' : <Input />}
      </div>
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} overlayOpacity={0.55} overlayBlur={3}>
        <p className='text-center capitalize text-3xl'>{playerWins ? '✨you won✨' : `you lost 🙄, the answer was: "${word}"`}</p>
      </Modal>
    </div>
  )
}
