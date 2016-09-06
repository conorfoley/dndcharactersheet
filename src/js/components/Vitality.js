import React from "react";
import { ProgressBar } from "react-bootstrap";
import TextField from 'material-ui/TextField';
var _ = require('lodash');

export default class Vitality extends React.Component{
    render(){
        var style = this.props.style;
        return (
            <div className="vitality-column">
                <div className="vitality-row">
                    <span>
                        (Get rid of current on all of these)<br/>
                        HP: <br/>
                        Fatigue Bar: <br/>
                        Stress Bar: <br/>
                    
                
                        <img src="anon.png" href="#" style={{height: "50%", width: "70%" }}/>
                    </span>
                    <div className="flex-container">
                        <div className="vitality-container">
                            <div className="flex-row">
                                <h3>Hit Points</h3>
                            </div>
                            <div className="vitality-row">
                                <span className="vitality-item">
                                    <TextField 
                                        id="HPMax"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>HP Max</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField
                                        id="Wounds"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Wounds</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField 
                                        id="HPTemp"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Temporary HP</p>
                                </span>
                            </div>
                        </div>
                        <div className="vitality-container">
                            <div className="flex-row">
                                <h3>Fatigue</h3>
                            </div>
                            <div className="vitality-row">
                                <span className="vitality-item">
                                    <TextField
                                        id="FatigueMax"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Fatigue Max</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField
                                        id="Fatigue"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Fatigue</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField
                                        id="LvlExhaustion"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Levels of Exhaustion</p>
                                </span>
                            </div>
                        </div>
                        <div className="vitality-container">
                            <div className="flex-row">
                                <h3>Stress</h3>
                            </div>
                            <div className="vitality-row">
                                <span className="vitality-item">
                                    <TextField
                                        id="StressMax"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Stress Max</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField
                                        id="Stress"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Stress</p>
                                </span>
                                <span className="vitality-item">
                                    <TextField
                                        id="LevelsOfInsanity"
                                        inputStyle={{textAlign: "center"}}
                                        type="text"
                                        className="vitality-text"
                                        style={{width: '60%'}}
                                    />
                                    <p style={style.smallCenter}>Levels of Insanity</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                );
    }
}