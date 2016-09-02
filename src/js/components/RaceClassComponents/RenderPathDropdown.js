import React from "react";
import RenderPathList from "./RenderLists/RenderPathList";

export default class RenderPathDropdown extends React.Component{
    render(){
        var style = this.props.style;
        return(
            <div style={style.col3}>Path
                <div className="dropdown">
                    <span>
                        
                        <RenderPathList></RenderPathList>
    
                    </span>
                </div>
            </div>
        )
    }
}