import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component{
    render(){
        return(
        <button className="square" onClick={function(){
            console.log("clicked"); }}>
            {this.props.value}
            </button>
        );
    }
}
// eslint-disable-next-line
class Board extends React.Component{
    renderSquare(i){
        return <Square value={i} />;
    }
}