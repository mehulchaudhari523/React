import React,{ Component } from 'react';

class Task3 extends Component{
    constructor(){
        super();
        this.state = {
            data: [
                { "name": "Abhishek" },
                { "name": "Saharsh" },
                { "name": "Ajay" },
            ],
            click:"Cleck me..!"
        }
    }
    clicked = ()=>{
        this.setState({click:"Clicked...!"});
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {this.state.data.map((item)=><List data={item} />)}
                </ul>
                <p>This is the state change: {this.state.click}</p>
                <button onClick={this.clicked}>Click</button>
            </div>          
        );
    }
}

class List extends Component{
    render(){
        return(
            <li>{this.props.data.name}</li>
        );
    }
}

export default Task3;