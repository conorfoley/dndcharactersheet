import React from "react";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class CultureExperience extends React.Component{
    render(){
        var style = this.props.style;
        return(
            <div className="race-item">
                <div className="race-text">
                    <TextField 
                        className="race-text"
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        hintText="Culture"
                        floatingLabelText="Culture"
                    />
                </div>
                <div className="race-text">
                    <TextField
                        className="race-text"
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        hintText="Experience"
                        floatingLabelText="Experience"
                    />
                </div>
            </div>
        )
    }
}