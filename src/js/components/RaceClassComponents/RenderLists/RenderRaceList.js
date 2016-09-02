import React from "react";
import ReactDOM from "react-dom";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var _ = require('lodash');

var RaceSubRaceMappings = require("json-loader!./RaceSubRaceMappings.json");
var ClassPathMappings = require('json-loader!./ClassPathMappings.json');

export default class RenderRaceList extends React.Component{
    render() {
        var races = [];
        _.forEach(RaceSubRaceMappings, (v,k)=>{
            races.push(k);
        });
        return(
            <span>
            {_.forEach(races, (race)=>{
                return `<MenuItem primaryText=${race} />`
            })
            }
            </span>
            )
    }
}