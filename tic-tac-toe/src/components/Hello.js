import React from 'react'

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
        }
    }
    render(){
   return (<h2>Hi {this.state.date.toLocaleTimeString()} </h2>)
}}

function Hello() {
  return (
    <div>
        <h1>Hello</h1>
        <Clock /> 
    </div>
  )
}

export default Hello