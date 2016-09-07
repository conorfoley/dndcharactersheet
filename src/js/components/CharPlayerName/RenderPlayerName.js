import React from "react";
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';


export default class RenderPlayerName extends React.Component {
    constructor(){
        super();
        this.state = {
            isEditingPlayer: true,
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
    render() {
        var style = this.props.style;
        if (this.state.unEdited && this.state.isEditingPlayer){
            return(
                <div className="charplayername-item">
                    <TextField 
                        id="playerName"
                        hintText={this.props.playername}
                        onChange={this.handleChangePlayer.bind(this)}
                        hintStyle={{textAlign: "center"}}
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        style={{textAlign: "center"}}
                        floatingLabelText="Player Name"
                    />
                    <IconButton onClick={this.toggleStatePlayer.bind(this)}>
                        <i className="material-icons">done</i>
                    </IconButton>
                </div>
            );
        } else if (this.state.isEditingPlayer && !this.state.unEdited){
            return(
                <div className="charplayername-item">
                    <TextField
                        id="playerName"
                        value={this.props.playername}
                        onChange={this.handleChangePlayer.bind(this)}
                        hintStyle={{textAlign: "center"}}
                        inputStyle={{textAlign: "center", fontWeight: "bold"}}
                        style={{textAlign: "center"}}
                        floatingLabelText="Player Name"
                        
                    />
                    <IconButton onClick={this.toggleStatePlayer.bind(this)}>
                        <i className="material-icons">done</i>
                    </IconButton>
                </div>
            );
        } else {
            return(
                <div 
                    id="playerName"
                    style={{border: this.state.border, height: this.state.height, marginLeft: this.state.marginLeft}}
                    className="charplayername-item"
                    onMouseEnter={this.dashedBorder.bind(this)}
                    onMouseLeave={this.clearBorder.bind(this)}
                    onClick={this.toggleStatePlayer.bind(this)}>
                        <b>{this.props.playername}</b>
                </div>

            );
        }
    }
}