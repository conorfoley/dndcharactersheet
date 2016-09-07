import React from "react";


export default class Title extends React.Component {
    render() {
        //console.log(this.props);
        var style = this.props.style;
        if(this.props.charname === "Character Name"){
            return (
                <div className="title">
                    <h1><b><p>Character Sheet</p></b></h1>
                    <br/>
                </div>
            );
        }else if(!this.props.charname){
            return (
                <div className="title">
                    <h1><b><p style={{opacity: "0"}}>Character Sheet</p></b></h1>
                    <br/>
                </div>
            );
        } else if (this.props.fontColor && this.props.fontFamily){
            return(
                    <div className="title" style={{color: this.props.fontColor, fontFamily: this.props.fontFamily}} >
                        <h1><b><p>{this.props.charname}</p></b></h1>
                        <br/>
                    </div>
            )
        }
    }
}