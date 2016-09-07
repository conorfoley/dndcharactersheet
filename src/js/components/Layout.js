import React from "react";

import CharPlayerName from "./CharPlayerName";
import Attributes from "./Attributes";
import Vitality from "./Vitality";
import RaceAndClass from "./RaceAndClass";
var AlignmentStyle = require("json-loader!./AlignmentStyle/AlignmentStyleMapping.json");
var _ = require('lodash');

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            charname: "Character Name",
            playername: "Player Name",
            alignment: "0",
            alignmentStyle: "transparent",
            fontFamily: "Roboto, sans-serif",
            fontColor: "#FFF",
        }
    }
    changeTitle(charname){
        this.setState({charname});
    }
    changePlayer(playername){
        this.setState({playername});
    }
    setAlignmentStyle(alignment){
        this.setState({alignment});
        console.dir(alignment);
        const someVar = _.find(AlignmentStyle, alignment);
        console.dir(_.values(_.find(AlignmentStyle, alignment))[0]);
        if ( _.values(_.find(AlignmentStyle, alignment))[0].length > 2 ){
            this.setState({fontFamily: _.values(_.find(AlignmentStyle, alignment))[0][1]});
            this.setState({alignmentStyle: _.values(_.find(AlignmentStyle, alignment))[0][0]});
            this.setState({fontColor: _.values(_.find(AlignmentStyle, alignment))[0][2]});
        } else if ( _.values(_.find(AlignmentStyle, alignment))[0].length > 1 ){
            this.setState({fontFamily: _.values(_.find(AlignmentStyle, alignment))[0][1]});
            this.setState({alignmentStyle: _.values(_.find(AlignmentStyle, alignment))[0][0]});
            console.dir(_.values(_.find(AlignmentStyle, alignment))[0][1]);

        } else {
            this.setState({alignmentStyle: _.values(_.find(AlignmentStyle, alignment))[0]});
        }
    }

    render(){

        return(
            <div 
                style={{
                    backgroundColor: this.state.alignmentStyle,
                    transition: "background-color 3s",
                    fontFamily: this.state.fontFamily,
                    color: this.state.fontColor
            }}>
                <div className="flex-container">
                    <div className="flex-row">
                        <div className="flex-container">
                            <CharPlayerName
                                changeTitle={this.changeTitle.bind(this)}
                                charname={this.state.charname}
                                changePlayer={this.changePlayer.bind(this)}
                                playername={this.state.playername}
                                fontColor={this.state.fontColor}
                                fontFamily={this.state.fontFamily}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <Attributes />
                        <div className="flex-container">
                            <Vitality
                                fontColor={this.state.fontColor}
                                fontFamily={this.state.fontFamily}
                            />
                            <div className="race-inline">
                                <RaceAndClass
                                    setAlignmentStyle={this.setAlignmentStyle.bind(this)}
                                    fontColor={this.state.fontColor}
                                    fontFamily={this.state.fontFamily}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

