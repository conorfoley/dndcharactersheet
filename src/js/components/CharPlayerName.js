import React from "react";
import Title from "./Title";
import RenderCharName from "./CharPlayerName/RenderCharName";
import RenderPlayerName from "./CharPlayerName/RenderPlayerName";

export default class CharPlayerName extends React.Component {
    render(){
        var style = this.props.style;
        return(
        <div>
        <Title style={style} charname={this.props.charname} />
            <div className="charplayername-row">
                <span className="charplayername-container">                
                    <RenderCharName 
                        style={style}
                        changeTitle={this.props.changeTitle} 
                        charname={this.props.charname} 
                    />
                    <RenderPlayerName 
                        style={style}
                        playername={this.props.playername}
                        changePlayer={this.props.changePlayer.bind(this)}
                    />
                </span>
            </div>
        </div>
            

        );
    }
}