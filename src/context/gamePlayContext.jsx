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

  function setDifficulty(lvl) {
    const difficulty = lvl
    dispatch({
      type: 'SET_DIFFICULTY',
      payload: difficulty
    })
  }

  function setWrongLetters(letter) {
    if (state.wrongLetters.includes(letter)) {
      return
    }
    dispatch({
      type: 'SET_WRONG_LETTERS',
      payload: letter
    })
  }

  function setGoodAnswers(letter) {
    if (state.goodAnswers.includes(letter)) {
      return
    }
    dispatch({
      type: 'SET_GOOD_ANSWERS',
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

  function translateDifficulty(difficulty) {
    if (difficulty === 'noob') return Math.floor(Math.random() * (6 - 3)) + 3
    if (difficulty === 'champ') return Math.floor(Math.random() * (11 - 5)) + 5
    if (difficulty === 'smurf') return Math.floor(Math.random() * (16 - 10)) + 10
  }

  function fetchWord() {
    if (state.difficulty) {
      const lvl = translateDifficulty(state.difficulty)
      const options = {
        method: 'GET',
        url: `https://random-word-api.herokuapp.com/word?length=${lvl}`
      }
      Axios.request(options)
        .then(function (response) {
          setWord(response.data[0])
        })
        .catch(function (error) {
          console.error(error)
        })
    } else {
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
    }
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
      setGoodAnswers(letter)
      // checkPlayerWin()
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

  function checkPlayerWin() {
    let arr1 = state.goodAnswers.sort()
    let arr2 = [...new Set(state.wordArray.slice(1, state.wordArray.length))].sort()
    if (arr1.length !== arr2.length) return false
    let result

    for (var i = 0; i < arr2.length; ++i) {
      if (arr1[i] !== arr2[i]) return
      result = true
    }
    dispatch({
      type: 'CHECK_PLAYER_WIN',
      payload: result
    })
  }

  function setGameOver() {
    let gameState = false
    if (state.wrongLetters.length === 6 || state.playerWins) {
      gameState = true
    }
    dispatch({
      type: 'SET_GAME_OVER',
      payload: gameState
    })
  }

  const value = {
    isPlaying: state.isPlaying,
    difficulty: state.difficulty,
    word: state.word,
    wordArray: state.wordArray,
    goodAnswers: state.goodAnswers,
    wrongLetters: state.wrongLetters,
    wrongGuessNbr: state.wrongGuessNbr,
    playerWins: state.playerWins,
    gameOver: state.gameOver,
    toggleIsPlaying,
    setDifficulty,
    fetchWord,
    compareLetters,
    substractGuessNbr,
    checkPlayerWin,
    setGameOver
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}

export default useGamePlay
