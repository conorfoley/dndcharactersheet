import React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

var _ = require('lodash');
var AlignmentList = require("json-loader!./RenderLists/AlignmentList.json");

export default class RenderAlignmentDropdown extends React.Component{
    constructor() {
        super();
        this.state = {value: 0};

    }
    
    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.setAlignmentColors(value);
    }

    render(){
        var alignments = [];
        _.forEach(AlignmentList, (v,k)=>{
            alignments.push(v);
        });

        var listAlignments = alignments.map(function(alignment,index,alignments){
                            return <MenuItem key={index} value={index} primaryText={alignment}/>
        })
        return(
            <div>
                <DropDownMenu 
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                        {listAlignments}
                </DropDownMenu>
            </div>
        )
    }
}