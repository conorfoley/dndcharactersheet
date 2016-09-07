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
        return(
                <div>
                    <div className="race-column">
                        <span className="race-row">
                            <RenderClassDropdown
                                fontColor={this.props.fontColor}
                                fontFamily={this.props.fontFamily}
                            />
                        </span>
                        <span className="race-row">
                            <CultureExperience
                                fontColor={this.props.fontColor}
                                fontFamily={this.props.fontFamily}
                            />
                        </span>
                        <span className="race-row">
                            <RenderRaceDropdown
                                fontColor={this.props.fontColor}
                                fontFamily={this.props.fontFamily}
                            />
                        </span>
                        <span className="race-row">
                            <RenderAlignmentDropdown
                                setAlignmentStyle={this.props.setAlignmentStyle}
                                fontColor={this.props.fontColor}
                                fontFamily={this.props.fontFamily}
                            />
                        </span>
                    </div>
                </div>
        );
    }

}