import React from "react";
import './App.css';

class OutputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <textarea id="OutputArea" value={this.props.resultList} readOnly></textarea>
        );
    }

}

export default OutputBox;