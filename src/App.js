
import './App.css';
import pic from './pic.jpg'
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    Person :{
      fullname:"Jared Smith" ,
      bio: `Jared Smith is a senior at the University of Illinois at 
      Urbana-Champaign where he is majoring in International Studies
       with a concentration in Latin America. His interest in international 
       development began during the fall semester of 2012 when 
       he had the opportunity to study abroad in Peru. 
       He learned about the inequalities affecting indigenous communities,
        experienced the Peruvian culture, and became proficient in Spanish.
         Inspired by this international experience, Jared interned
          with the Chicago Council on Global Affairs, 
          conducting research on food security in Latin America. 
          Jared aspires to pursue a career in international development 
          and write policy for a government agency. When he is not busy 
          reading about current affairs in Latin America, he enjoys 
          playing intramural basketball and training for the Chicago marathon`,
      imgSrc: pic,
      profession: "Student",
      },
      show:false,
      count:0,
      intervalid:0
  };
  handleClick(){
    this.setState(state=>({
          show : !state.show
    }));
    if(this.state.intervalId){
      clearInterval(this.state.intervalId);
      this.setState(prevState => {
        return {
          ...prevState,
          intervalId: 0,
        };
      });
      return;
    }
    const newIntervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);
    
    this.setState(prevState => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
    
   
  }
  
  render() {
    if (!this.state.show){
      return (
        <div className="App">
          <div>
          

            <button onClick={this.handleClick.bind(this)} className="button"> Show profile</button>
            </div>
        </div>
      )
    }
    return (
        <div className="App">
          <div>
            <button onClick={this.handleClick.bind(this)}className="button" > Hide profile</button>
            <h3>The component has been rendered for {this.state.count} seconds</h3>

              <h1>{this.state.Person.fullname}</h1>
              <h2>{this.state.Person.profession}</h2>
              <p>{this.state.Person.bio}</p>

              <img src={this.state.Person.imgSrc} alt='hello'/>
           
            
          
          </div>
          
            
      </div>
    )
  }
}




