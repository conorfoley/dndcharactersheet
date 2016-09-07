import React from "react";

import CharPlayerName from "./CharPlayerName";
import Attributes from "./Attributes";
import Vitality from "./Vitality";
import RaceAndClass from "./RaceAndClass";
var AlignmentColors = require("json-loader!./AlignmentColors/AlignmentColorMapping.json");
var _ = require('lodash');

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            charname: "Character Name",
            playername: "Player Name",
            alignment: "0",
            alignmentColor: "transparent",
        }
    }
    changeTitle(charname){
        this.setState({charname});
    }
    changePlayer(playername){
        this.setState({playername});
    }
    setAlignmentColors(alignment){
        this.setState({alignment});
        const someVar = _.find(AlignmentColors, alignment);
        console.dir(_.values(_.find(AlignmentColors, alignment))[0]);
        this.setState({alignmentColor: _.values(_.find(AlignmentColors, alignment))[0]});
    }

    render(){
        //console.dir(AlignmentColors);
        return(
            <div style={{backgroundColor: this.state.alignmentColor, transition: "background-color 2s"}} >
                <div className="flex-container">
                    <div className="flex-row">
                        <div className="flex-container">
                            <CharPlayerName
                                changeTitle={this.changeTitle.bind(this)}
                                charname={this.state.charname}
                                changePlayer={this.changePlayer.bind(this)}
                                playername={this.state.playername}
                            />
                        </div>
                    </div>
                    <div className="flex-row">
                        <Attributes />
                        <div className="flex-container">
                            <Vitality />
                            <div className="race-inline">
                                <RaceAndClass
                                    setAlignmentColors={this.setAlignmentColors.bind(this)}

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

