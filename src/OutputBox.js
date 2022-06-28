import React from "react";
import './App.css';
import {TextField} from '@mui/material';

class OutputBox extends React.Component {
    // constructor(props) {
    //      super(props);
    // }

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