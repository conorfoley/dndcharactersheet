import React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RenderPathDropdown from "./RenderPathDropdown";
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var _ = require('lodash');

var ClassPathMappings = require("json-loader!./RenderLists/ClassPathMappings.json");


export default class RenderClassDropdown extends React.Component{
    constructor() {
        super();
        this.state = {
            value: 0,
            paths: [ "Path" ],
            resetPath: false,
            tempClass: '',
        };

    }
    
    handleChange = (event, index, value) => {
        this.setState({tempClass: this.state.value}),
        this.setState({value}),
        this.setState({paths: _.values(value)[0]}),
        this.setState({resetPath: true});
    }
    
    clearPath = (value) => {
        this.setState({resetPath: false});
    }
    render(){
        console.dir(this.props.children);
        var classes = [];
        var paths = this.state.paths;
    
        _.forEach(ClassPathMappings, (path,someClass)=> {
            classes.push(_.keys(path)[0]);
        });

        var listClasses = classes.map(function(someClass,index){
            return <MenuItem
                        key={index}
                        value={index}
                        primaryText={someClass}
                    />
        });
        
        /*
            If they've made a selection (since they're not on the default of 0), 
            set the value to their choice and update the Paths with the corresponding options
        */
        if(this.state.value > 0){
            var value = ClassPathMappings[this.state.value];
            var paths = _.values(value)[0];
        } else {
        /*
            Otherwise, the values should stay (or go back to) default
        */
            var value = 0;
            var paths = [ "Path" ]
        }
    

        // If the class value is still 0 then they haven't changed class yet
        if (this.state.value === 0){
            return(
                <div className="race-item">
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                            {listClasses}
                    </DropDownMenu>
                <RenderPathDropdown
                    pathProp={this.state.value}
                    resetPath={true}
                    paths={paths}
                />
                </div>
            )
        // If the temporary class value is the same as the state Class value, then they've selected a class but haven't moved off of it yet
        } else if (this.state.value === this.state.tempClass){
            return(
                <div className="race-item">
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                            {listClasses}
                    </DropDownMenu>
                <RenderPathDropdown
                    pathProp={this.state.value}
                    clearPath={this.clearPath.bind(this)}
                    resetPath={this.state.resetPath}
                    paths={paths}
                />
                </div>
            )
        // Here the temporary class must exist, and if it doesn't equal the current state's value, then they chose a new Class and we need to reset the paths
        } else if (this.state.value !== this.state.tempClass) {
            return(
                <div className="race-item">
                    <DropDownMenu
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                            {listClasses}
                    </DropDownMenu>
                <RenderPathDropdown
                    pathProp={this.state.value}
                    clearPath={this.clearPath.bind(this)}
                    resetPath={this.state.resetPath}
                    paths={paths}
                />
                </div>
            )
        }
    }
}