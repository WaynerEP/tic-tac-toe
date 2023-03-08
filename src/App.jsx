import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants.js'
import Board from './components/Board'
import { checkEndGame, checkWinnerFrom } from './logic'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null)

  function handleClick(i) {
    if (squares[i] || winner) return

    const newBoard = [...squares];

    newBoard[i] = turn
    setSquares(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  function reset() {
    setSquares(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <div className="game">
      <h1>TIC-TAC-TOE</h1>
      <div className="game-row">
        <div className="game-actions">
          <button className='btn-reset' type='button' onClick={reset}>Reset</button>
        </div>
        <div className="game-board">
          <Board
            squares={squares}
            onClick={handleClick}
            turn={turn}
          />
        </div>
      </div>
      <div className="game-info">
        {
          winner && (
            <h2>
              El ganador es: {winner === TURNS.X
                ? `Player 1 ${TURNS.X} `
                : `Player 2 ${TURNS.O}`}
            </h2>
          )
        }
        {
          winner === false && (
            <h1>Empate!!!</h1>
          )
        }
      </div>
    </div>
  )
}

export default App
