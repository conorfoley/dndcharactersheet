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
                        hintStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                        floatingLabelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                    />
                </div>
                <div className="race-text">
                    <TextField
                        className="race-text"
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        hintText="Experience"
                        floatingLabelText="Experience"
                        hintStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                        floatingLabelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                    />
                </div>
            </div>
        )
    }
}