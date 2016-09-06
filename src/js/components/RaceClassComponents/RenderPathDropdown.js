import React from "react";
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
var ClassPathMappings = require("json-loader!./RenderLists/ClassPathMappings.json");
var _ = require('lodash');

export default class RenderPathDropdown extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 99,
            pathValue: '',
        };
    }

    handleChange = (event, index, value) => {
        this.setState({value});
        this.setState({pathValue: value});
        if(this.props.resetPath){
            this.props.clearPath({false});
        } else {
            this.props.clearPath({true});
        }
    }
    defaultPath = () => this.setState({value: 0});
    render(){
        var paths = this.props.paths;
        if (this.props.pathProp == 0){
            return (
                <div>
                    <DropDownMenu value="Choose a Class">
                        <MenuItem value="Choose a Class" primaryText="Choose a Class"/>
                    </DropDownMenu>
                </div>
            )
        } else if (this.props.resetPath) {
            var pathValue = "Paths";
            var key = "Paths";
            var listPaths = this.props.paths.map(function(path,index){
                return (
                        <MenuItem
                            key={index}
                            value={index}
                            primaryText={path}
                        />
                    )

            });
            return(
                <div>
                    <DropDownMenu
                        value={pathValue}
                        onChange={this.handleChange}
                    >
                        <MenuItem
                            key={pathValue}
                            value={pathValue}
                            primaryText={pathValue}
                        />
                            {listPaths}
                    </DropDownMenu>
                </div>
            )
        } else {           
            var listPaths = this.props.paths.map(function(path,index){
                return (
                        <MenuItem
                            key={index}
                            value={index}
                            primaryText={path}
                        />
                    )

            });
            return(
                <div>
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                            {listPaths}
                    </DropDownMenu>
                </div>
            )
        }
    }
}