import { createContext, useContext, useReducer } from 'react'
import gamePlayReducer, { initialState } from './gamePlayReducer'

const GamePlayContext = createContext(initialState)

export const GamePlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gamePlayReducer, initialState)

  function toggleIsPlaying() {
    dispatch({
      type: 'TOGGLE_PLAYING'
    })
  }

  function setTriedLetters(letter) {
    dispatch({
      type: 'SET_TRIED_LETTERS',
      payload: letter
    })
  }

  function substractGuessNbr() {
    if (state.WrongGuessNbr === 0) {
      return
    }
    dispatch({
      type: 'SUBSTRACT_GUESS_NBR'
    })
  }

  const value = {
    isPlaying: state.isPlaying,
    triedLetters: state.triedLetters,
    WrongGuessNbr: state.WrongGuessNbr,
    playerWins: state.playerWins,
    toggleIsPlaying,
    setTriedLetters,
    substractGuessNbr
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}

export default useGamePlay
