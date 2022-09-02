import { createContext, useContext, useReducer } from 'react'
import gamePlayReducer, { initialState } from './gamePlayReducer'
import Axios from 'axios'

const GamePlayContext = createContext(initialState)

export const GamePlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gamePlayReducer, initialState)

  function toggleIsPlaying() {
    dispatch({
      type: 'TOGGLE_PLAYING'
    })
  }

  function setWrongLetters(letter) {
    dispatch({
      type: 'SET_WRONG_LETTERS',
      payload: letter
    })
  }

  function substractGuessNbr() {
    if (state.wrongGuessNbr === 0) {
      return
    }
    dispatch({
      type: 'SUBSTRACT_GUESS_NBR'
    })
  }

  function fetchWord() {
    const options = {
      method: 'GET',
      url: 'https://random-word-api.herokuapp.com/word'
    }
    Axios.request(options)
      .then(function (response) {
        setWord(response.data[0])
      })
      .catch(function (error) {
        console.error(error)
      })
    dispatch({
      type: 'FETCH_WORD'
    })
  }

  function setWord(word) {
    dispatch({
      type: 'SET_WORD',
      payload: word
    })
  }

  function compareLetters(letter) {
    let array = state.wordArray

    if (array.includes(letter)) {
      // 'got one letter'
      return
    } else {
      // 'the word does not include this letter'
      setWrongLetters(letter)
      substractGuessNbr()
    }
    dispatch({
      type: 'COMPARE_LETTERS'
    })
  }

  const value = {
    isPlaying: state.isPlaying,
    word: state.word,
    wordArray: state.wordArray,
    wrongLetters: state.wrongLetters,
    wrongGuessNbr: state.wrongGuessNbr,
    playerWins: state.playerWins,
    toggleIsPlaying,
    fetchWord,
    compareLetters,
    substractGuessNbr
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}

export default useGamePlay
