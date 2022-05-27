import React from "react";

var trueChars;

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    trueChars = ['', '', '', '', ''];
    this.state = {
      badChars: "",
      missedChars: "",
      rightChars: Array(5).fill(""),
    };
  }

  /*
  TODO:
  Make onChangeBad() & onChangeMissed() accept one character each, don't allow shared chars
  Finish onChangeRight()
  Write code for submit button
  */

  onChangeBad = (event) => {
    let badChars = event.target.value;
    badChars = badChars.toUpperCase();
    badChars = badChars.replace(/[^A-Z]/, '');
    event.target.value = badChars;

    this.setState({badChars: event.target.value});
  }

  onChangeMissed= (event) => {
    let missedChars = event.target.value;
    missedChars = missedChars.toUpperCase();
    missedChars = missedChars.replace(/[^A-Z]/, '');
    event.target.value = missedChars;

    this.setState({missedChars: event.target.value});
  }

  onChangeRight(event, num) {
    let rightChar = event.target.value;
    rightChar = rightChar.toUpperCase();
    rightChar = rightChar.replace(/[^A-Z]/, '');
    event.target.value = rightChar;
    
    trueChars[num] = event.target.value;
    this.setState({rightChars: trueChars});

  }
  
  render() {
    return(
      <div className="InputBox">

      <div id="badCharInput"> 
        <label htmlFor="badChar">Letters <i>not</i> in the solution:</label>
        <input type="text" id="badChar"  name="badChar" onChange={this.onChangeBad}></input>
      </div>

      <div id="missedCharInput"> 
        <label htmlFor="missedChar">Letters <i>misplaced</i> in the solution:</label>
        <input type="text" id="missedChar" name="missedChar" onChange={this.onChangeMissed}></input>
      </div>
      
      <div id="rightCharInput"> 
        <label >Correct letters in the solution:</label>
        <input type="text" id="rightChar1" className="rightChar" maxLength={1} 
        onChange={event => this.onChangeRight(event, 0)}></input>
        <input type="text" id="rightChar2" className="rightChar" maxLength={1} 
        onChange={event => this.onChangeRight(event, 1)}></input>
        <input type="text" id="rightChar3" className="rightChar" maxLength={1} 
        onChange={event => this.onChangeRight(event, 2)}></input>
        <input type="text" id="rightChar4" className="rightChar" maxLength={1} 
        onChange={event => this.onChangeRight(event, 3)}></input>
        <input type="text" id="rightChar5" className="rightChar" maxLength={1} 
        onChange={event => this.onChangeRight(event, 4)}></input>
      </div>

      <button>Search words...</button>
    </div>
    );
  }
}

export default InputBox;