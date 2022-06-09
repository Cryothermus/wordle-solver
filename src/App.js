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

    var wordResults = [];
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
    
    //console.log(this.buildSearchRegex());
    let maskRegex = new RegExp(this.buildMaskRegex());
    let searchRegex = new RegExp(this.buildSearchRegex());
    let validWords = [];

    for (var word of wordList.words) {
      if (maskRegex.test(word) && searchRegex.test(word)) {
        validWords.push(word);
      }
    }

    console.log(validWords);



  }


  buildMaskRegex = () => {
    var maskRegex = "";
    for (var i = 0; i < this.state.rightChars.length; i++) {
      if (this.state.rightChars[i] === "") {
        maskRegex = maskRegex.concat(`[^${this.state.badChars}]`);
      }
      else {
        maskRegex =  maskRegex.concat(this.state.rightChars[i]);
      }
    }

    return maskRegex;
  }

  buildSearchRegex = () => {
    //TODO: Make this ignore rightChars
    var searchRegex = ".*";
    for (var i = 0; i < this.state.missedChars.length; i++) {
      searchRegex = searchRegex.concat(`(?=.*${this.state.missedChars.charAt(i)})`);
    }
    searchRegex = searchRegex.concat(".*");

    return searchRegex;

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
