import { useEffect } from 'react'
import Game from './components/Game'
import SelectLevel from './components/SelectLevel'
import useGamePlay from './context/gamePlayContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { isPlaying, difficulty, toggleIsPlaying, fetchWord } = useGamePlay()

  function start() {
    if (difficulty) {
      fetchNewWord()
    } else {
      toggleIsPlaying()
    }
  }

  function fetchNewWord() {
    fetchWord()
    setTimeout(() => {
      toggleIsPlaying()
    }, 200)
  }

  function reStart() {
    toggleIsPlaying()
    fetchWord()
  }

  useEffect(() => {
    fetchWord()
  }, [])

  return (
    <div className='flex flex-col justify-center items-center'>
      <header className='p-4 flex flex-row gap-2 lg:gap-4 justify-center'>
        {isPlaying ? (
          <>
            <FontAwesomeIcon icon={faArrowLeft} size='3x' onClick={reStart} className='arrow-home' />
          </>
        ) : (
          ''
        )}
        <h1 className='title capitalize lg:text-5xl'>hangman game</h1>
      </header>

      {isPlaying ? (
        <>
          <Game />
        </>
      ) : (
        <>
          <section className='lg:w-2/3 rounded-sm text-center'>
            <h2 className='capitalize lg:text-4xl '>rules</h2>
            <p className='text-lg lg:text-xl  p-2'>
              Guess the word before the character is hunged.
              <br />
              Guess the word giving 1 letter, each wrong guess means one part of the character gets revealed.
              <br />
              If the character is hunged you lost, if you guessed before it is hunged won ! 🤩
            </p>
          </section>
          <div className='lg:flex'>
            <SelectLevel />
            <button
              className='temp--bounce border-2 rounded w-40 h-10 m-5 uppercase hover:bg-red-400 animate-bounce transition-all duration-300 ease-in-out'
              onClick={start}
            >
              Play
            </button>
          </div>
          <a target='_blank' rel='noreferrer' href='https://icons8.com/icon/95Gqq3BDW1nF/hangman'>
            Hangman
          </a>
          icon by
          <a target='_blank' rel='noreferrer' href='https://icons8.com'>
            Icons8
          </a>
        </>
      )}
    </div>
  )
}

export default App
