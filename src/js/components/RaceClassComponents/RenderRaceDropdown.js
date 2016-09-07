import React from "react";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RenderSubRaceDropdown from './RenderSubRaceDropdown';


var _ = require('lodash');
var RaceSubRaceMappings = require("json-loader!./RenderLists/RaceSubRaceMappings.json");

export default class RenderRaceDropdown extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 0,
            subRaces: [ "Sub Race" ],
            resetSubRace: false,
            tempRace: '',

        };

    }
    
    handleChange = (event, index, value) => {
        this.setState({tempRace: this.state.value}),
        this.setState({value}),
        this.setState({subRaces: _.values(value)[0]}),
        this.setState({resetSubRace: true});
    }
    
    clearSubRace = (value) => {
        this.setState({resetSubRace: false});
    }

    halfRaceFunction = (value) => {
        this.setState({resetSubRace: false});
    }

    render(){
        //console.dir(this.props);
        var races = [];
        var subRaces = this.state.subRaces;

        _.forEach(RaceSubRaceMappings, (subRaces,someRace)=>{
            races.push(_.keys(subRaces)[0]);
        });

        var listRaces = races.map(function(race,index,races){
            return <MenuItem key={index} value={index} primaryText={race}/>
        })

        /*
            If they've made a selection (since they're not on the default of 0), 
            set the value to their choice and update the subRaces with the corresponding options
        */
        if(this.state.value > 0){
            var value = RaceSubRaceMappings[this.state.value];
            var subRaces = _.values(value)[0];
        } else {
        /*
            Otherwise, the values should stay (or go back to) default
        */
            var value = 0;
            var subRaces = [ "Sub Race" ]
        }
    

        // If the race value is still 0 then they haven't changed race yet
        if (this.state.value === 0){
            return(
                <div className="race-item">
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                    >
                            {
                            listRaces
                            }
                    </DropDownMenu>
                <RenderSubRaceDropdown
                    subRaceProp={this.state.value}
                    resetSubRace={true}
                    subRaces={subRaces}
                    fontColor={this.props.fontColor}
                    fontFamily={this.props.fontFamily}
                />
                </div>
            )
        } else if(this.state.value == 5) {
            /*
                If they chose "Half Race, then they get two subRace dropdowns"
            */
            return(
                <div className="race-item">
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                >
                    {
                    listRaces
                    }
                </DropDownMenu>
                <RenderSubRaceDropdown
                    subRaceProp={this.state.value}
                    clearSubRace={this.clearSubRace.bind(this)}
                    resetSubRace={this.state.resetSubRace}
                    subRaces={subRaces}
                    halfRaceFunction={this.halfRaceFunction.bind(this)}
                    fontColor={this.props.fontColor}
                    fontFamily={this.props.fontFamily}
                />
                <RenderSubRaceDropdown
                    subRaceProp={this.state.value}
                    clearSubRace={this.clearSubRace.bind(this)}
                    resetSubRace={this.state.resetSubRace}
                    subRaces={subRaces}
                    halfRaceFunction={this.halfRaceFunction.bind(this)}
                    fontColor={this.props.fontColor}
                    fontFamily={this.props.fontFamily}
                />
            </div>
            );
        } else if (this.state.value === this.state.tempClass){
            /*
                If the temporary race value is the same as the state Race value, 
                then they've selected a race but haven't moved off of it yet
            */
            return(
                <div className="race-item">
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                        labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                    >
                            {
                            listRaces
                            }
                    </DropDownMenu>
                <RenderSubRaceDropdown
                    subRaceProp={this.state.value}
                    clearSubRace={this.clearSubRace.bind(this)}
                    resetSubRace={this.state.resetSubRace}
                    subRaces={subRaces}
                    fontColor={this.props.fontColor}
                    fontFamily={this.props.fontFamily}
                />
                </div>
            )
        /*
            Here the temporary race has been set, and if it doesn't equal the current state's value, 
            then they chose a new race and we need to reset the subRaces
        */
        } else if (this.state.value !== this.state.tempClass) {
            return(
                <div className="race-item">
                    <DropDownMenu 
                        value={this.state.value}
                        onChange={this.handleChange}
                        labelStyle={{color: this.props.fontColor, fontFamily: this.props.fontFamily}}
                    >
                            {
                            listRaces
                            }
                    </DropDownMenu>
                <RenderSubRaceDropdown
                    subRaceProp={this.state.value}
                    clearSubRace={this.clearSubRace.bind(this)}
                    resetSubRace={this.state.resetSubRace}
                    subRaces={subRaces}
                    fontColor={this.props.fontColor}
                    fontFamily={this.props.fontFamily}
                />
                </div>
            )
        }
    }
}