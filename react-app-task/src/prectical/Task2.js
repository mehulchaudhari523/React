import React,{ Component } from 'react';
/*
    JSX code :
    - Multiple elements
    - Attributes
    - Comments
    - Style
    - Expressions
    - Ternary Expressions
*/
// this is the class component
class Task2 extends Component{
    render(){
        var i = 5;
        var myStyle = {
            color: 'red'
        }
        return(
            <div>
                <h1>JSX code</h1>
                <p data-demoAttributes="demo">This tag used Attributes</p>
                <h3>This is Expressions : {5+5}</h3>
                {/* this is comments section */}
                <p style={myStyle}>This is JSX Style</p>
                <h3>Ternary Expressions: {i==1? 'True':'False'}</h3>
            </div>
        );
    }
}

export default Task2;