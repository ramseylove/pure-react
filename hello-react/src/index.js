import React from 'react';
import ReactDOM from 'react-dom';

function SubmitButton() {
    const buttonLabel = "Submit";
    return (
        <button>{buttonLabel}</button>
    );
}

function HelloWorld(){
    return(
        <div>
            <Hello/> <World/>!
        </div>
    );
}
function Hello(){
    return(
        <span>Hello</span>
    );
}
function World(){
    return(
        <span>World</span>
    );
}
ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);