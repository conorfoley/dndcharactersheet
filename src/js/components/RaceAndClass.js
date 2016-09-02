import React from "react";
import RenderClassDropdown from "./RaceClassComponents/RenderClassDropdown";
import RenderPathDropdown from "./RaceClassComponents/RenderPathDropdown";
import CultureExperience from "./RaceClassComponents/CultureExperience";
import RenderRaceDropdown from "./RaceClassComponents/RenderRaceDropdown";
import RenderSubRaceDropdown from "./RaceClassComponents/RenderSubRaceDropdown";
import RenderAlignmentDropdown from "./RaceClassComponents/RenderAlignmentDropdown";
var _ = require('lodash');

export default class RaceAndClass extends React.Component{
    render(){
        var style = this.props.style;
        return(
                <div>
                    <RenderClassDropdown style={style}></RenderClassDropdown>
                        <RenderPathDropdown style={style}></RenderPathDropdown>
                    <CultureExperience style={style}></CultureExperience>
                    <RenderRaceDropdown style={style}></RenderRaceDropdown>
                        <RenderSubRaceDropdown style={style}></RenderSubRaceDropdown>
                    <RenderAlignmentDropdown style={style}></RenderAlignmentDropdown>
                        <div style={style.col3}>Level
                            <input className="form-control input-sm" placeholder="Level" />
                        </div>
                </div>
        );
    }

}