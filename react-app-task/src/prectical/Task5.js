import React, { Component } from 'react';
import ReactTable from 'react-table-6';
//import 'react-table-6/react-table.css';

class Task5 extends Component{
    render(){
        const data = [
            {id:1, name: 'Ayaan', age: 26},
            {id:2, name: 'Ahana', age: 20},
            {id:3, name: 'Peter', age: 25},
            {id:4, name: 'Virat', age: 30},
            {id:5, name: 'Rohit', age: 35},
            {id:6, name: 'Dhoni', age: 42},
            {id:7, name: 'Mehul', age: 25},
            {id:8, name: 'Jay', age: 38},
            {id:9, name: 'Raj', age: 50},
            {id:10, name: 'Shyam', age: 18},
        ];
        const columns = [{
            Header: 'Namer',
            accessor: 'name'
        },{
            Header: 'Age',
            accessor: 'age'
        }];
        return(
            <div>
                <ReactTable 
                    data = {data}
                    columns = {columns}
                    defaultPageSize = {2}
                    pageSizeOptions = {[2,4,6]}
                />
            </div>
        )
    }
}

export default Task5;