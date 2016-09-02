import React from "react";
import RenderSubRaceList from "./RenderLists/RenderSubRaceList";

export default class RenderSubRaceDropdown extends React.Component{
    render(){
        var style = this.props.style;
        return(
            <div style={style.col3}>Sub-Race (Dominate)
                <div className="dropdown">
                    <span>

                        <RenderSubRaceList></RenderSubRaceList>


                    </span>
                </div>
            </div>
            )
    }
}