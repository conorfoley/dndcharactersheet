import React from "react";
import Title from "./Title";
import RenderCharName from "./CharPlayerName/RenderCharName";
import RenderPlayerName from "./CharPlayerName/RenderPlayerName";

export default class CharPlayerName extends React.Component {
    render(){
        console.dir(this.props);
        return(
        <div>
        <Title
            charname={this.props.charname}
            fontColor={this.props.fontColor}
            fontFamily={this.props.fontFamily}
        />
            <div className="charplayername-row">
                <span className="charplayername-container">                
                    <RenderCharName 
                        changeTitle={this.props.changeTitle} 
                        charname={this.props.charname} 
                        fontColor={this.props.fontColor}
                        fontFamily={this.props.fontFamily}
                    />
                    <RenderPlayerName 
                        playername={this.props.playername}
                        changePlayer={this.props.changePlayer.bind(this)}
                        fontColor={this.props.fontColor}
                        fontFamily={this.props.fontFamily}
                    />
                </span>
            </div>
        </div>
            

        );
    }
}