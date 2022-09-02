export const initialState = {
  isPlaying: false,
  word: undefined,
  wordArray: undefined,
  wrongLetters: [],
  wrongGuessNbr: 6,
  playerWins: false
}

const gamePlayReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'TOGGLE_PLAYING':
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    case 'FETCH_WORD':
      return {
        ...state
      }
    case 'SET_WORD':
      return {
        ...state,
        word: payload,
        wordArray: [...payload]
      }
    case 'SUBSTRACT_GUESS_NBR':
      return {
        ...state,
        wrongGuessNbr: state.wrongGuessNbr - 1
      }
    case 'SET_WRONG_LETTERS':
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, payload]
      }
    case 'COMPARE_LETTERS':
      return {
        ...state
      }
    default:
      return state
  }
}

export default gamePlayReducer
