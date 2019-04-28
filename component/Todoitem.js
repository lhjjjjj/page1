import React, { Component } from 'react';




class Todoitem extends Component {

    onClick=()=>{
        this.props.onClick(this.props.index);
    }
   

    render(){
        const {id,content,onClick}= this.props;
        return<div className="todo" onClick={this.onClick}>{id} {content}

            

        </div>
    }

}


export default Todoitem;