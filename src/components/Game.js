import React, { Components, useState} from 'react';
import {calculateWinner} from '../helpers.js';
import ReactDOM from 'react-dom';
import Board from './Board';

const style1 ={
    width: '200px',
    margin: '20px auto',
};


const Game= () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] =useState(true);
    console.log("+++ Before calling calculateWinner") ;
    console.log(Board) ;
    const winner =calculateWinner(board);
    console.log("+++ Inside the Game.js : " + winner)

    const handleClick = i => {
        const boardCopy = [...board];
        // if user click on occupied square or if game is won ,return 
        console.log("boardCopy " + boardCopy[i]   +  ":" + i);
        if(winner || boardCopy[i]) return;
        boardCopy[i] =xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }
    const jumpTo = () => {

    }
    const renderMoves = () =>(
         <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game 
        </button>
    )
    return (
        <>
            <Board squares ={board} onClick = {handleClick} /> 
            <div style={style1}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X ': 'O') }</p>
                {renderMoves()}
            </div>
        </>
    )
 
}

export default Game ;
