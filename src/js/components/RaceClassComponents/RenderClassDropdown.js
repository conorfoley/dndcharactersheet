import React from "react";
import RenderClassList from "./RenderLists/RenderClassList";

export default class RenderClassDropdown extends React.Component{
    render(){
        var style = this.props.style;
        return (
            <div style={style.col7, style.mypadding}>
                    <div style={style.col3}>Class
                        <div className="dropdown">
                            <span>
                                <RenderClassList></RenderClassList>
                            </span>
                        </div>
                    </div>
            </div>
        )
    }
}