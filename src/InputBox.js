import React from "react";

var trueChars;

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    trueChars = ['', '', '', '', ''];
    // this.state = {
    //   badChars: "",
    //   missedChars: "",
    //   rightChars: Array(5).fill(""),
    // };
  }

  /*
  TODO:
  Write code for submit button
  */


  /*
  Some explanation for onChangeBad & on ChangeMissed:
  The following two methods are intended to keep the InputBox's state updated,
  but they're also written to heavily limit possible user input.
  Inputs are all uppercase, only allow alphabetical characters, and no duplicate inputs are allowed-
  even between the two boxes.
  */
  onChangeBad = (event) => {
    let badChars = event.target.value;
    badChars = badChars.toUpperCase();
    badChars = badChars.replace(/[^A-Z]/, '');

    let newChar = badChars.slice(-1);
    if (event.target.value.length > this.props.badChars.length &&
      (this.props.badChars.includes(newChar) || this.props.missedChars.includes(newChar))) {
      event.target.value = this.props.badChars;
    }
    else {
      event.target.value = badChars;
      this.props.onBadChange(event.target.value)
      //this.setState({badChars: event.target.value});
    }
  }

  onChangeMissed= (event) => {
    let missedChars = event.target.value;
    missedChars = missedChars.toUpperCase();
    missedChars = missedChars.replace(/[^A-Z]/, '');
    
    let newChar = missedChars.slice(-1);
    if (event.target.value.length > this.props.missedChars.length && 
      (this.props.badChars.includes(newChar) || this.props.missedChars.includes(newChar))) {
      event.target.value = this.props.missedChars;
    }
    else {
      event.target.value = missedChars;
      this.props.onMissedChange(event.target.value)
      //this.setState({missedChars: event.target.value});
    }

  }

  //The "right" characters, of course, are already set in stone and exempt from the rules
  //of the above two boxes. This will take into account the possibility of duplicate characters.
  onChangeRight(event, num) {
    let rightChar = event.target.value;
    rightChar = rightChar.toUpperCase();
    rightChar = rightChar.replace(/[^A-Z]/, '');
    event.target.value = rightChar;
    
    trueChars[num] = event.target.value;
    this.props.onRightChange(trueChars);
    //this.setState({rightChars: trueChars});

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

      <button
      onClick={this.props.onSearch}>Search words...</button>
    </div>
    );
  }
}

export default InputBox;