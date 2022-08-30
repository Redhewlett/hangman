export const initialState = {
  isPlaying: false,
  guessNbr: 6,
  tryiedLetters: [],
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
    default:
      return state
  }
}

export default gamePlayReducer
