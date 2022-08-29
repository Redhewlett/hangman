import Game from './components/Game'
function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <header className='p-4'>
        <h1 className='capitalize text-5xl'>hangman game😵</h1>
      </header>
      <section className='w-2/3 rounded-sm text-center '>
        <h2 className='capitalize text-4xl '>rules</h2>
        <p className='  text-xl  p-2'>
          Guess the word before the character is hunged.
          <br />
          Guess the word giving 1 letter, each wrong guess means on part of the character gets revealed.
          <br />
          If the character is hunged you lost, if you guessed before it is hunged won ! 🤩
        </p>
      </section>
      <Game />
    </div>
  )
}

export default App
