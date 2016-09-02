import React from "react";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';


export default class RenderCharName extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditingChar: true,
            unEdited: true,
        }
    }
    toggleStateChar(isEditingChar){
        //console.log(isEditingChar);
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
                <div style={style.col2, style.offset2}>
                    <TextField id="characterName" hintText={this.props.charname} onChange={this.handleChange.bind(this)}/>
                    &nbsp;
                    <IconButton onClick={this.toggleStateChar.bind(this)}><i className="material-icons">done</i></IconButton>
                </div>
            );
        } else if (this.state.isEditingChar && !this.state.unEdited){
            return(
                <div style={style.col2, style.offset2}>
                    <TextField id="characterName" value={this.props.charname} onChange={this.handleChange.bind(this)}/>
                    &nbsp;
                    <IconButton onClick={this.toggleStateChar.bind(this)}><i className="material-icons">done</i></IconButton>
                </div>
            );
        } else {
            return(
                <div id="characterName" style={style.base} onClick={this.toggleStateChar.bind(this)}>
                    <b>{this.props.charname}</b>&nbsp;       
                    <IconButton style={style.hidden}><i className="material-icons">done</i></IconButton>
                </div>

            );
        }
    }
}