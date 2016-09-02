import React from "react";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var _ = require('lodash');
var RaceSubRaceMappings = require("json-loader!./RenderLists/RaceSubRaceMappings.json");

export default class RenderRaceDropdown extends React.Component{
    constructor() {
        super();
        this.state = {value: 0};

    }
    
    handleChange = (event, index, value) => this.setState({value});

    render(){
        //console.dir(this.props);
        var races = [];
        _.forEach(RaceSubRaceMappings, (v,k)=>{
            races.push(k);
        });

        var listRaces = races.map(function(race,index,races){
                            return <MenuItem key={index} value={index} primaryText={race}/>
        })
        return(
            <div>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        {
                        listRaces
                        }
                </DropDownMenu>
            </div>
        )
    }
}