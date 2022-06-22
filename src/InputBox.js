import React from "react";
import './App.css';
import {TextField, Grid, InputLabel, Button} from '@mui/material';

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

      <div id="badCharInput" className="inputField"> 
        <InputLabel className="CharLabel">Letters <i>not</i> in the solution:</InputLabel>
        <br/>
        <TextField size="small" variant="filled" hiddenLabel id="badChar"  name="badChar" 
        onChange={this.onChangeBad}>
        </TextField>
      </div>

      <div id="missedCharInput" className="inputField"> 
        <InputLabel className="CharLabel">Letters <i>misplaced</i> in the solution:</InputLabel>
        <br/>
        <TextField size="small" variant="filled" hiddenLabel id="missedChar" maxLength={5} name="missedChar"
         onChange={this.onChangeMissed}>

        </TextField>
      </div>
      
      <div id="rightCharInput" className="inputField"> 
        <InputLabel className="CharLabel">Correct letters in the solution:</InputLabel>
        <br/>
        
        <Grid container className="rightCharGrid" spacing={1}>

          <Grid item>
          <TextField id="rightChar1" className="rightChar" inputProps={{maxLength: 1}} 
        variant="filled" size="small" hiddenLabel onChange={event => this.onChangeRight(event, 0)}>
        </TextField>
          </Grid>

          <Grid item>
          <TextField id="rightChar2" className="rightChar" inputProps={{maxLength: 1}} 
        variant="filled" size="small" hiddenLabel onChange={event => this.onChangeRight(event, 1)}>
        </TextField>
          </Grid>

          <Grid item>
          <TextField id="rightChar3" className="rightChar" inputProps={{maxLength: 1}} 
        variant="filled" size="small" hiddenLabel onChange={event => this.onChangeRight(event, 2)}></TextField>
          </Grid>

          <Grid item>
          <TextField id="rightChar4" className="rightChar" inputProps={{maxLength: 1}} 
        variant="filled" size="small" hiddenLabel onChange={event => this.onChangeRight(event, 3)}></TextField>
          </Grid>

          <Grid item>
          <TextField id="rightChar5" className="rightChar" inputProps={{maxLength: 1}} 
        variant="filled" size="small" hiddenLabel onChange={event => this.onChangeRight(event, 4)}></TextField>
          </Grid>
        </Grid>

        {/* <TextField id="rightChar1" className="rightChar" inputProps={{maxLength: 1}} 
        variant="standard" size="small" onChange={event => this.onChangeRight(event, 0)}></TextField>
        <TextField id="rightChar2" className="rightChar" inputProps={{maxLength: 1}} 
        variant="standard" size="small" onChange={event => this.onChangeRight(event, 1)}></TextField>
        <TextField id="rightChar3" className="rightChar" inputProps={{maxLength: 1}} 
        variant="standard" size="small" onChange={event => this.onChangeRight(event, 2)}></TextField>
        <TextField id="rightChar4" className="rightChar" inputProps={{maxLength: 1}} 
        variant="standard" size="small" onChange={event => this.onChangeRight(event, 3)}></TextField>
        <TextField id="rightChar5" className="rightChar" inputProps={{maxLength: 1}} 
        variant="standard" size="small" onChange={event => this.onChangeRight(event, 4)}></TextField> */}

        
      </div>
      <br/>

      <Button variant="contained" className="SearchButton"
      onClick={this.props.onSearch}>Search words...</Button>
    </div>
    );
  }
}

export default InputBox;