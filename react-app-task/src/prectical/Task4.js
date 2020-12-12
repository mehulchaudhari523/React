import React, { Component } from 'react';
/*
    1 - Controlled using onClick event
    2 - Uncontrolled without event
    3 - React.createRef object for current controll object
    4 - Input value setState 
    5 - Form submit
*/
class Task4 extends Component{
    constructor(props){
        super(props);
        this.state = {value:''}
        this.handleChange = this.handleChange.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }
    handleChange = (e) => {
        //console.log(this.input.current.value);
        this.setState({value:this.input.current.value});
    }
    updateSubmit = (e) => {
        e.preventDefault();
        alert('Form Submited...!'+this.state.value);
    }
    render(){
        return(
            <form onSubmit = {this.updateSubmit}>
                <h1>Uncontrolled</h1>
                <input type="text" ref={this.input} />
                <h1>Controlled</h1>
                <input type="text" ref={this.input} onChange={this.handleChange}/>
                <br/><br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Task4;