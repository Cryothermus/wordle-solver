import React from "react";
import './App.css';
import {TextField} from '@mui/material';

class OutputBox extends React.Component {
    // This class is for the OutputBox that shows the resuting word list.
    // Not sure why it's its own component, since it's just a single text field.
    // Can't be too careful though. Might've wanted to make this something more!


    render() {
        return (
            <div className="OutputBox">
                <TextField className="OutputArea" value={this.props.resultList} readOnly 
                multiline 
                minRows={3}
                maxRows={10}>
                </TextField>
                <br/>
            </div>
        );
    }

}

export default OutputBox;