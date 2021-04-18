import React from 'react'
import {sendaction} from '../../action'
import store from '../../store'



export default class Home extends React.Component{
    handleClick = ()=>{
        //send a action by using function store
        const action = sendaction();
        store.dispatch(action);
    }
    
    componentDidMount(){
        store.subscribe(()=>{
            console.log("state:",store.getState());
            this.setState({});
        })
    } 
    render(){
        return(
            <div>
            <button onClick={this.handleClick}>ssss</button>
            <div>{store.getState().value}</div>
            </div>
        )
    }

}

