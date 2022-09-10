export const initialState = {
  isPlaying: false,
  difficulty: undefined,
  word: undefined,
  wordArray: undefined,
  goodAnswers: [],
  wrongLetters: [],
  wrongGuessNbr: 6,
  playerWins: false,
  gameOver: false
}

const gamePlayReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'TOGGLE_PLAYING':
      return {
        ...state,
        isPlaying: !state.isPlaying,
        goodAnswers: [],
        wrongLetters: [],
        wrongGuessNbr: 6,
        playerWins: false,
        gameOver: false
      }
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: payload
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
    case 'SET_GOOD_ANSWERS':
      return {
        ...state,
        goodAnswers: [...state.goodAnswers, payload]
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
    case 'CHECK_PLAYER_WIN':
      return {
        ...state,
        playerWins: payload
      }
    case 'SET_GAME_OVER':
      return {
        ...state,
        gameOver: payload
      }
    default:
      return state
  }
}

export default gamePlayReducer
