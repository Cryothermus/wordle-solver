//import logo from './logo.svg';
import './test.css';
import InputBox from './InputBox.js'
import OutputBox from './OutputBox.js'
import wordList from './valid-words.json';
import React, {useState} from 'react';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      badChars: "",
      missedChars: "",
      rightChars: Array(5).fill(""),
    }
  }

  setBadChars = (chars) => {
    this.setState({badChars: chars})
  }

  setMissedChars = (chars) => {
    this.setState({missedChars: chars})
  }

  setRightChars = (chars) => {
    this.setState({rightChars: chars})
  }

  searchWords= () => {
    console.log(`${this.state.badChars},${this.state.missedChars},${this.state.rightChars}`)
  }


  render() {
    return (
      <div className="App">
        <InputBox
        badChars={this.state.badChars}
        missedChars={this.state.missedChars}
        rightChars={this.state.rightChars}
        onBadChange={this.setBadChars}
        onMissedChange={this.setMissedChars}
        onRightChange={this.setRightChars}
        onSearch={this.searchWords}
        ></InputBox>
        <OutputBox></OutputBox>
      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <InputBox
//       ></InputBox>
//       <OutputBox></OutputBox>
//     </div>
//   );
// }

export default App;
