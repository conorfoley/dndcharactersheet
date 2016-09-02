import React from "react";
import { ProgressBar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Thumbnail } from "react-bootstrap";
var _ = require('lodash');

export default class Vitality extends React.Component{
    render(){
        var style = this.props.style;
        return (
            <div>
                    <div style={style.col4, style.mypadding}>
                        (Get rid of current on all of these)<br/>
                        HP: <br/>
                        Fatigue Bar: <br/>
                        Stress Bar: <br/>
                    
                <div style={style.row}>
                    <div style={style.col12, style.mypadding}>
                            <Thumbnail src="anon.png" href="#" />
                    </div>
                </div>
                    </div>
                <div style={style.col4, style.mypadding}>
                    <div style={style.col12}>
                        <div style={style.mypadding}>
                            <div style={style.row}>
                                <div style={style.smallCenter, style.col6}>
                                    <h4>Hit Points</h4>
                                </div>
                            </div>
                            <div style={style.row}>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>HP Max</p>
                                </div>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Wounds</p>
                                </div>
                            </div>
                            <div style={style.row}>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Temporary HP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div style={style.mypadding}>
                            <div style={style.row}>
                                <div style={style.smallCenter, style.col6}>
                                    <h4>Fatigue</h4>
                                </div>
                            </div>
                            <div style={style.row}>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Fatigue Max</p>
                                </div>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Fatigue</p>
                                </div>
                                <div style={style.col3}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Levels of Exhaustion</p>
                                </div>
                            </div>
                        </div>
                        <div style={style.mypadding}>
                            <div style={style.row}>
                                <div style={style.smallCenter, style.col12}>
                                    <h4>Stress</h4>
                                </div>
                            </div>
                            <div style={style.row}>
                                <div style={style.col6}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Stress Max</p>
                                </div>
                                <div style={style.col6}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Stress</p>
                                </div>
                                <div style={style.col6}>
                                    <input className="form-control input-sm" />
                                    <p style={style.smallCenter}>Levels of Insanity</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                );
    }
}