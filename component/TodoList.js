import React, { Component } from 'react';
import Todoitem from './Todoitem'

class TodoList extends Component {

    static defaultProps={
        todos:[]
    }

    render(){
        const {todos} = this.props;
        const list = todos.map((item, index) => {
            return <Todoitem key = {index} id={index+1} index={index} content={item} onClick={onItemdelete}/>
        })
        return list

            

        
    }

}


export default TodoList;