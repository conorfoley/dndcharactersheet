import React from "react";

export default class CultureExperience extends React.Component{
    render(){
        var style = this.props.style;
        return(
            <div>
                <div style={style.col3}>Culture
                    <input className="form-control input-sm" placeholder="Culture" />
                </div>
                <div style={style.col3}>Experience
                    <input className="form-control input-sm" placeholder="Experience" />
                </div>
            </div>
        )
    }
}