import React from "react";


export default class Title extends React.Component {
    render() {
        //console.log(this.props);
        var style = this.props.style;
        if(this.props.charname === "Character Name"){
                return (
                    <div style={style.title, style.col3, style.offset6}>
                        <h1><b><p>&nbsp;</p></b></h1>
                        <br/>
                    </div>
                );
        }else {
            return(
                    <div style={style.col6, style.offset3}>
                        <h1><b><p>{this.props.charname}</p></b></h1>
                        <br/>
                    </div>
            )
        }
    }
}

