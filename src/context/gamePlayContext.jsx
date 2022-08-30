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

  const value = {
    isPlaying: state.isPlaying,
    guessNbr: state.guessNbr,
    tryiedLetters: state.tryiedLetters,
    playerWins: state.playerWins,
    toggleIsPlaying
  }

  return <GamePlayContext.Provider value={value}>{children}</GamePlayContext.Provider>
}

const useGamePlay = () => {
  const context = useContext(GamePlayContext)
  return context
}

export default useGamePlay
