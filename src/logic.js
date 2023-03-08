import { WINNER_COMBOS } from './constants.js'

export const checkWinnerFrom = (squaresToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      squaresToCheck[a] &&
      squaresToCheck[a] === squaresToCheck[b] &&
      squaresToCheck[a] === squaresToCheck[c]
    ) {
      return squaresToCheck[a]
    }
  }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
  return newBoard.every((square) => square !== null)
}