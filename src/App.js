import './App.css';
import React, { Component } from "react";
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  // handleChange(e){
  //   this.setState({searchField: e.target.value}, () => console.log(this.state)); //setstate is asynchronus call
  //   console.log(this.state);
  // }

  handleChange = (e) => {
    this.setState({searchField: e.target.value}, () => console.log(this.state)); //setstate is asynchronus call
    console.log(this.state);
  }

  render(){
    const {monsters, searchField} = this.state; //Object Destructuring
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//OnChange and input tag is not html its JSX.
//WHen the DOM changes or reacts to user inputs in our cases searching for a monster, its going to say hey there is an event. However we don't manully touch the DOM. React has something called synthetic event. WHen there is some change in DOM or some DOM event happens, React intercepts that and tells app that somethig happended. Synthetic event is a fake event that we pretend that its a DOM event  
//React is smart we don't directly interect with the DOM, when react app says to react BOT there are some DOM changes. It doen't happens right away , it batches it schedules so if there are multiple updates that needs to be done , then it actually optimize that for us. React figures out the best time and way to update the DOM


export default App;
