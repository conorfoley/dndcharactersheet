import React from "react";

import CPName from "./CPName";
import Attributes from "./Attributes";
import Vitality from "./Vitality";
import RaceAndClass from "./RaceAndClass";

var styles = require("json-loader!./style.json");

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            charname: "Character Name",
            playername: "Player Name",
            alignment: "",
            style: styles,
        }
    }
    changeTitle(charname){
        this.setState({charname});
    }
    changePlayer(playername){
        this.setState({playername});
    }
    setAlignmentColors(alignmentValue){
        this.setState({alignment: alignmentValue});
    }
    render(){
        return(
            <div>
                <div className="flex-container">
                    <div className="flex-row">
                        <div className="flex-container">
                            <CPName
                                style={this.state.style}
                                changeTitle={this.changeTitle.bind(this)}
                                charname={this.state.charname}
                                changePlayer={this.changePlayer.bind(this)}
                                playername={this.state.playername}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <Attributes style={this.state.style} />
                        <div className="flex-container">
                            <Vitality style={this.state.style} />
                            <div className="flex-row">
                                <RaceAndClass style={this.state.style} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

