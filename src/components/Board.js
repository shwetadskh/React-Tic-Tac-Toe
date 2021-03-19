import React, { Components } from 'react';
import ReactDOM from 'react-dom' ;
import Square from './Square';

const style2= {
    border: '10px solid darkblue',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares,onClick}) => (
    <div style={style2}>
        { squares.map(function (square, i) 
            {
               return <Square key={i} value={square} onClick={() => onClick(i)} />;
            }
          )
        }

    </div>
)
 export default Board;