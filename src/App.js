
import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
 class App extends Component {
   state ={
      advice : ' '
   };
   componentDidMount(){

       this.fetchAdvice();
   }
   fetchAdvice = ()=>{
       
       axios.get('https://api.adviceslip.com/advice ')
       .then((response)=>{
        const {advice} = response.data.slip;
          this.setState({advice:advice});
       })
       .catch((error)=>{
           console.log('error');
       })
      
      
   }
    render() {
        return (
            <div className="app">
                <div className="card"> <h1 className="heading">{this.state.advice}</h1>
                <button onClick={this.fetchAdvice}>Advice</button></div>
            </div>
        );
    }

 }
export default App;
