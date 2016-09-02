import React from "react";
import ReactDOM from "react-dom";

var _ = require('lodash');

var RaceSubRaceMappings = require("json-loader!./RaceSubRaceMappings.json");
var ClassPathMappings = require('json-loader!./ClassPathMappings.json');

export default class RenderRaceList extends React.Component{
    render() {
        return(
                <span>
                    Sub-Race List
                </span>
        )
    }
}