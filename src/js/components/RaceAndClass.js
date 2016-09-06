import React from "react";
import RenderClassDropdown from "./RaceClassComponents/RenderClassDropdown";
import RenderPathDropdown from "./RaceClassComponents/RenderPathDropdown";
import CultureExperience from "./RaceClassComponents/CultureExperience";
import RenderRaceDropdown from "./RaceClassComponents/RenderRaceDropdown";
import RenderSubRaceDropdown from "./RaceClassComponents/RenderSubRaceDropdown";
import RenderAlignmentDropdown from "./RaceClassComponents/RenderAlignmentDropdown";
import TextField from 'material-ui/TextField';


export default class RaceAndClass extends React.Component{
    render(){
        var style = this.props.style;
        return(
                <div>
                    <div className="race-column">
                        <span className="race-row">
                            <RenderClassDropdown></RenderClassDropdown>
                        </span>
                        <span className="race-row">
                            <CultureExperience></CultureExperience>
                        </span>
                        <span className="race-row">
                            <RenderRaceDropdown></RenderRaceDropdown>
                        </span>
                        <span className="race-row">
                            <RenderAlignmentDropdown></RenderAlignmentDropdown>
                        </span>
                        <span className="race-row">
                            <span className="race-item">
                                <TextField 
                                    type="text"
                                    hintText="Level"
                                    hintStyle={{fontWeight: "800", fontColor: "#0000"}}
                                    floatingLabelText="Level"
                                />
                            </span>
                        </span>
                    </div>
                </div>
        );
    }

}