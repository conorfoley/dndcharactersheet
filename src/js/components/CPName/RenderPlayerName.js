import React from "react";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';


export default class RenderPlayerName extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditingPlayer: true,
            unEdited: true,
        }
    }
    toggleStatePlayer(isEditingPlayer){
        if ( this.state.isEditingPlayer){
            this.setState({isEditingPlayer: false})
        } else {
            this.setState({isEditingPlayer: true})
        }
        if ( this.state.unEdited && this.props.playername != "Player Name"){
            this.setState({unEdited: false})
        }
    }
    handleChangePlayer(e){
        const playername = e.target.value;
        this.props.changePlayer(playername);
    }
    render(){
        var style = this.props.style;
        if (this.state.unEdited && this.state.isEditingPlayer){
            return(
                <div style={style.col2, style.offset2}>
                    <TextField id="playerName" hintText={this.props.playername} onChange={this.handleChangePlayer.bind(this)}/>
                    &nbsp;
                    <IconButton onClick={this.toggleStatePlayer.bind(this)}><i className="material-icons">done</i></IconButton>
                </div>
            );
        } else if (this.state.isEditingPlayer && !this.state.unEdited){
            return(
                <div style={style.col2, style.offset2}>
                    <TextField id="playerName" value={this.props.playername} onChange={this.handleChangePlayer.bind(this)}/>
                    &nbsp;
                    <IconButton onClick={this.toggleStatePlayer.bind(this)}><i className="material-icons">done</i></IconButton>
                </div>
            );
        }

        return(
            <div id="playerName" style={style.base} onClick={this.toggleStatePlayer.bind(this)}>
                <b>{this.props.playername}</b>&nbsp;
                <IconButton style={style.hidden}><i className="material-icons">done</i></IconButton>
            </div>

        );
    }
}