import React from "react";
import Title from "./Title";
import RenderCharName from "./CPName/RenderCharName";
import RenderPlayerName from "./CPName/RenderPlayerName";

export default class CPName extends React.Component {
    render(){
        var style = this.props.style;
        return(
        <div>
        <Title style={style} charname={this.props.charname} />
            <div className="cpname-row">
                <span className="cpname-container">                
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