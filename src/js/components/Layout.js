import React from "react";

import CPName from "./CPName";
import Attributes from "./Attributes";
import Vitality from "./Vitality";
import RaceAndClass from "./RaceAndClass";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            charname: "Character Name",
            playername: "Player Name",
            style: 
                { 
                    title: {
                        lineHeight: "1.5px",
                        fontSize: "12px",
                        display: "block",
                        borderTop: "1px",
                        borderBottom: "1px",
                        borderRight: "1px",
                        borderLeft: "1px",    
                        marginLeft: 'auto',
                        boxSizing: 'border-box',
                        width: 'auto',
                    },
                    col2: {
                        width: "20%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    col3: {
                        width: "30%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    col4: {
                        width: "40%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    col6: {
                        width: "60%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    col7: {
                        width: "70%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    col12: {
                        width: "100%",
                        flexWrap: "nowrap",
                        display: "block",
                    },
                    row: {
                        display: "table",
                        clear: "both",
                        marginLeft: "-15px",
                        marginRight: "-15px",
                        boxSizing: 'border-box',
                        width: "auto",
                    },
                    offset2: {
                        width: "inherit",
                        marginLeft: "20%",
                    },
                    offset3: {
                        width: "inherit",
                        marginLeft: "30%",
                    },
                    offset4: {
                        width: "inherit",
                        marginLeft: "40%",
                    },
                    offset6: {
                        width: "inherit",
                        marginLeft: "60%",
                    },
                    base: {
                        borderTop: '1px',
                        borderBottom: '1px',
                        borderRight: '1px',
                        borderLeft: '1px',
                        padding: '5px 10px',
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        width: '147px',
                        lineHeight: '1.5',
                        marginLeft: '16.66666667%',
                        fontSize: '12px',
                        height: '30px',
                            ':hover':{
                                        lineHeight: '1.5',
                                        borderBottomColor: 'rgb(204, 204, 204)',
                                        borderBottomLeftRadius: '3px',
                                        borderBottomRightRadius: '3px',
                                        borderBottomStyle: 'dashed',
                                        borderBottomWidth: '1px',
                                        borderLeftColor: 'rgb(204, 204, 204)',
                                        borderLeftStyle: 'dashed',
                                        borderLeftWidth: '1px',
                                        borderRightColor: 'rgb(204, 204, 204)',
                                        borderRightStyle: 'dashed',
                                        borderRightWidth: '1px',
                                        borderTopColor: 'rgb(204, 204, 204)',
                                        borderTopLeftRadius: '3px',
                                        borderTopRightRadius: '3px',
                                        borderTopStyle: 'dashed',
                                        borderTopWidth: '1px',
                                        boxShadow: 'rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset',
                                        color: 'rgb(85, 85, 85)',
                                        cursor: 'text',
                                        marginLeft: '16.66666667%',
                                        height: '31px',
                                        fontSize: '12px',
                            },
                    },
                    smallCenter: {
                        align: "center",
                        fontSize: "small",
                    },
                    mypadding: {
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        paddingRight: "10px",
                        paddingLeft: "10px",
                        borderTop: ".5px solid #aaa",
                        borderBottom: ".5px solid #aaa",
                        borderRight: ".5px solid #aaa",
                        borderLeft: ".5px solid #aaa",
                        marginTop: "5px",
                        marginBottom: "0px",
                        marginRight: "5px",
                        marginLeft: "0px",
                    },
                    hidden: {
                        display: "none",
                    }
                },
        }

    }
    changeTitle(charname){
        this.setState({charname});
    }
    changePlayer(playername){
        this.setState({playername});
    }
    render(){
        return(
            <div>
                    <CPName
                        style={this.state.style}
                        changeTitle={this.changeTitle.bind(this)}
                        charname={this.state.charname}
                        changePlayer={this.changePlayer.bind(this)}
                        playername={this.state.playername}
                    />
                    <Attributes style={this.state.style} />
                    <Vitality style={this.state.style} />
                    <RaceAndClass style={this.state.style} />
            </div>
            );
    }
}

