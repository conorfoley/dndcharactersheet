import React from "react";
import RenderAlignmentList from "./RenderLists/RenderAlignmentList";
import {Container, Row, Col} from 'react-amazing-grid';

export default class RenderAlignmentDropdown extends React.Component{
    render(){
        var style = this.props.style;
        return(
            <div style={style.col3}>Alignment
                <div className="dropdown">
                    <span>
                        <RenderAlignmentList></RenderAlignmentList>

                    </span>
                </div>
            </div>
        )
    }
}