import { TURNS } from '../constants';
import Square from './Square';
import Player from './Player';

function Board({ squares, onClick, turn }) {

    return (
        <>
            <div className='players'>
                <Player isSelected={turn === TURNS.X}>Player 1 {TURNS.X}</Player>
                <Player isSelected={turn === TURNS.O}>{TURNS.O} Player 2</Player>
            </div>
            <div className='game-grid'>
                {squares.map((sq, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            handleClick={onClick}
                        >
                            {sq}
                        </Square>
                    )
                })}
            </div>
        </>
    );
}

export default Board
