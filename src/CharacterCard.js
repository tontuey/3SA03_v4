import React, { Component } from 'react';
import './App.css';
export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        thi.state={
            active:false,
        }
    }
activate = () =>{
    if (!this.state.active){
        this.props.activationHandler(this.props.value)
        this.setState({active:true})
    }
}
render(){
    let className = 'card$(this.state.active ? 'activeCard' : ''}'
    return(
        <div className={className} onClick={this.activate}>
        {this.props.value}
        </div>
    )
}

ComponentDidUpdate(prevProps){
    if(prevProps.attempt != this.props.attempt){
        this.setState({active:false})
    }
}