import { useEffect } from 'react'
import Game from './components/Game'
import useGamePlay from './context/gamePlayContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const { isPlaying, toggleIsPlaying, fetchWord } = useGamePlay()

  function start() {
    toggleIsPlaying()
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
      <header className='p-4 flex flex-row gap-4'>
        {isPlaying ? (
          <>
            <FontAwesomeIcon icon={faArrowLeft} size='3x' onClick={reStart} className='arrow-home' />
          </>
        ) : (
          ''
        )}
        <h1 className='capitalize text-5xl'>hangman game😵</h1>
      </header>

      {isPlaying ? (
        <>
          <Game />
        </>
      ) : (
        <>
          <section className='w-2/3 rounded-sm text-center '>
            <h2 className='capitalize text-4xl '>rules</h2>
            <p className='  text-xl  p-2'>
              Guess the word before the character is hunged.
              <br />
              Guess the word giving 1 letter, each wrong guess means one part of the character gets revealed.
              <br />
              If the character is hunged you lost, if you guessed before it is hunged won ! 🤩
            </p>
          </section>

          <button
            className='temp--bounce border-2 rounded w-40 h-10 m-5 uppercase hover:bg-red-400 animate-bounce transition-all duration-300 ease-in-out'
            onClick={start}
          >
            Play
          </button>
        </>
      )}
    </div>
  )
}

export default App
