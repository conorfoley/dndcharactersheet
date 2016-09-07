import React from "react";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';


export default class RenderCharName extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditingChar: true,
            unEdited: true,
            border: 0,
            height: "72px",
            lineHeight: "24px",
            marginLeft: "120px",
        }
    }
    dashedBorder(border){
        this.setState({border: "1px dashed #000"});
    }
    clearBorder(border){
        this.setState({border: "0px"});
    }
    toggleStateChar(isEditingChar){
        if ( this.state.isEditingChar){
            this.setState({isEditingChar: false});
        } else if (!this.state.isEditingChar) {
            this.setState({isEditingChar: true})
        }
        if ( this.state.unEdited && this.props.charname != "Character Name"){
            this.setState({unEdited: false})
        }
    }
    handleChange(e){
        const charname = e.target.value;
        this.props.changeTitle(charname);
    }
    render() {
        var style = this.props.style;
        if (this.state.unEdited && this.state.isEditingChar){
            return(
                <div className="charplayername-item">
                    <TextField
                        id="characterName"
                        hintText={this.props.charname}
                        onChange={this.handleChange.bind(this)}
                        hintStyle={{textAlign: "center"}}
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        style={{textAlign: "center"}}
                        floatingLabelText="Character Name"
                    />
                    <IconButton onClick={this.toggleStateChar.bind(this)}>
                        <i className="material-icons">done</i>
                    </IconButton>
                </div>
            );
        } else if (this.state.isEditingChar && !this.state.unEdited){
            return(
                <div className="charplayername-item">
                    <TextField 
                        id="characterName"
                        value={this.props.charname}
                        onChange={this.handleChange.bind(this)}
                        hintStyle={{textAlign: "center"}}
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        style={{textAlign: "center"}}
                        floatingLabelText="Character Name"
                        
                    />
                    <IconButton onClick={this.toggleStateChar.bind(this)}>
                        <i className="material-icons">done</i>
                    </IconButton>
                </div>
            );
        } else {
            return(
                <div 
                    id="characterName"
                    style={{border: this.state.border, height: this.state.height, marginLeft: this.state.marginLeft}}
                    className="charplayername-item"
                    onMouseEnter={this.dashedBorder.bind(this)}
                    onMouseLeave={this.clearBorder.bind(this)}
                    onClick={this.toggleStateChar.bind(this)}>
                        <b>{this.props.charname}</b>
                </div>

            );
        }
    }
}