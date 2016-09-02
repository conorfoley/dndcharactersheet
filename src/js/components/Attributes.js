import React from "react";
import { FormControl } from "react-bootstrap";
import {Container, Row, Col} from 'react-amazing-grid';

export default class Attributes extends React.Component{
    render(){
        var style = this.props.style;
        return (
            <div>
                <div style={style.col3}>
                    <div style={style.col4} style={style.mypadding}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Melee</p>
                    </div>  
                    <div style={style.col3}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Ranged</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Strength</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Dexterity</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Constitution</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Intelligence</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Wisdom</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Charisma</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
                <div style={style.row}>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            bsSize="small"
                            />
                        <p style={style.smallCenter}>Luck</p>
                    </div>
                    <div style={style.col4}>
                        <FormControl
                            type="text"
                            placeholder="  0"
                            bsSize="small"
                          />
                        <p style={style.smallCenter}>Mod</p>
                    </div>
                </div>
            </div>
        );
    }
}