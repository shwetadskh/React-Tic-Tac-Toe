import React, { Components } from 'react';
import ReactDOM from 'react-dom';

const styles3 ={
    backGround: 'lightred',
    border: '5px solid red',
    fontsize: '30px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none'
};
const Square = ({value, onClick}) => (
    <button style={styles3} onClick={onClick}>
        {value}
        </button>
);

export default Square;