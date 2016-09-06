import React from "react";
import TextField from 'material-ui/TextField';
var attributeList = require('json-loader!./AttributeComponents/AttributeList.json');

export default class Attributes extends React.Component{
    render(){
        var attributes = attributeList.map(function(attribute, id){
            return <span key={id + 7} className="attributes-row">
                            <span key={id + 1}>
                                <TextField
                                type="text"
                                className="attributes-item"
                                key={id + 2}
                                id={attribute}
                                style={{width: '60%'}}/>
                                <p key={id + 3} className="smallCenter">{attribute}</p>
                            </span>
                            <span key={id + 4}>
                                <TextField 
                                type="text"
                                className="attributes-mod"
                                key={id + 5} 
                                id={attribute + "-mod"} 
                                style={{width: '40%'}} />
                                <p key={id + 6} className="smallCenter">Mod</p>
                            </span>                    
                        </span>
        });
        return (
            <div className="attributes-column">
                    {attributes}    
            </div>
 
        );
    }
}