import React from "react";

class InputBox extends React.Component {


    render() {
        return (
    <div className="InputBox">

      <div id="badCharInput"> 
        <label for="badChar">Letters <i>not</i> in the solution:</label>
        <input type="text" id="badChar" name="badChar"></input>
      </div>

      <div id="missedCharInput"> 
        <label for="missedChar">Letters <i>misplaced</i> in the solution:</label>
        <input type="text" id="missedChar" name="missedChar"></input>
      </div>
      
      <div id="rightCharInput"> 
        <label >Correct letters in the solution:</label>
        <input type="text" id="rightChar1" class="rightChar"></input>
        <input type="text" id="rightChar2" class="rightChar"></input>
        <input type="text" id="rightChar3" class="rightChar"></input>
        <input type="text" id="rightChar4" class="rightChar"></input>
        <input type="text" id="rightChar5" class="rightChar"></input>
      </div>
    </div>
        );
    }
}

export default InputBox;