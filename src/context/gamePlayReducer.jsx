export const initialState = {
  isPlaying: false,
  triedLetters: [],
  WrongGuessNbr: 6,
  playerWins: false
}

const gamePlayReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'TOOGLE_PLAYING':
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    case 'SUBSTRACT_GUESS_NBR':
      return {
        ...state,
        WrongGuessNbr: state.WrongGuessNbr - 1
      }
    case 'SET_TRIED_LETTERS':
      return {
        ...state,
        triedLetters: [...state.triedLetters, payload]
      }
    default:
      return state
  }
}

export default gamePlayReducer
