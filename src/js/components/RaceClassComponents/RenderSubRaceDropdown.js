import React from "react";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

var RaceSubRaceMappings = require("json-loader!./RenderLists/RaceSubRaceMappings.json");
var _ = require('lodash');

export default class RenderSubRaceDropdown extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 99,
            subRaceValue: '',
            subRaceValue1: '',
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.setState({subRaceValue: value});
        if(this.props.subRaceProp == 5){
            this.props.halfRaceFunction({false})
        } else if(this.props.resetSubRace){
            this.props.clearSubRace({false});
        } else {
            this.props.clearSubRace({true});
        }
    }

    defaultSubRace = () => this.setState({value: 0});
    
    render(){
        //console.dir(this.props.subRaceProp);
        var subRaces = this.props.subRaces;
        if (this.props.subRaceProp == 0){
            return (
                <div>
                    <DropDownMenu value="Sub Race" labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}>
                        <MenuItem value="Sub Race" primaryText="Sub Race"/>
                    </DropDownMenu>
                </div>
            )
        } else if (this.props.SubRaceProp == 5) {
            var subRaceValue = "Sub Races";
            var key = "Sub Races";

            var subRaceValue1 = "Sub Races";
            var key1 = "Sub Races";


            var listSubRaces = this.props.subRaces.map(function(subRace,index){
                return (
                        <MenuItem key={index} value={index} primaryText={subRace} />
                    )

            });
            return(
                <div>
                    <DropDownMenu value={subRaceValue} onChange={this.handleChange.bind(this)} labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}>
                        <MenuItem key={subRaceValue} value={subRaceValue} primaryText={subRaceValue}/>
                            {
                            listSubRaces
                            }
                    </DropDownMenu>
                    <DropDownMenu value={subRaceValue1} onChange={this.handleChange.bind(this)} labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}>
                        <MenuItem key="Sub Races" value="Sub Races" primaryText="Sub Races"/>
                            {
                            listSubRaces
                            }
                    </DropDownMenu>
                </div>
            ) ;
        } else if (this.props.resetSubRace) {
            var subRaceValue = "Sub Races";
            var key = "Sub Races";
            var listSubRaces = this.props.subRaces.map(function(subRace,index){
                return (
                        <MenuItem key={index} value={index} primaryText={subRace} />
                    )

            });
            return(
                <div>
                    <DropDownMenu value={subRaceValue} onChange={this.handleChange} labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}>
                        <MenuItem key={subRaceValue} value={subRaceValue} primaryText={subRaceValue}/>
                            {
                            listSubRaces
                            }
                    </DropDownMenu>
                </div>
            )
        } else {           
            var listSubRaces = this.props.subRaces.map(function(subRace,index){
                return (
                        <MenuItem key={index} value={index} primaryText={subRace}/>
                    )

            });
            return(
                <div>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}>
                            {
                            listSubRaces
                            }
                    </DropDownMenu>
                </div>
            )
        }
    }
}