import React, { Component } from 'react';



class Addtodo extends Component {

    state={
        content:""
    }
    onchange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    onClick = () =>{
        this.props.add(this.state.content);
    }
    
    onAddShower=()=>{
        this.props.add("추가");
    }

    render(){
        const{content} = this.state;

    
    return ( 
        <div>
            
            <input className = "input-content" name="content" value = {content} onChange={this.onchange} />
            
            <button className = "bt" onClick={this.onClick}> 👍 </button> 
            <button className = "bt" onClick={this.onAddShower}> 추가👍 </button> 
        </div>

    );
}
}


export default Addtodo;