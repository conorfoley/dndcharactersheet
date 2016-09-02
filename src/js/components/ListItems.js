import React from "react";
import { Button } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { MenuItem } from "react-bootstrap";
import { ButtonToolbar } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class JgTest2 extends React.Component{

    constructor(){        
        super();

        const BUTTONS = {
      
            "Class" : [
                "Assassin",
                "Barbarian",
                "Bard",
                "Cleric",
                "Druid",
                "Fighter",
                "Metamind",
                "Metaphysical",
                "Monk",
                "Paladin",
                "Ranger",
                "Runemaster",
                "Sorcerer",
                "Thief",
                "Witcher",
                "Wizard"
            ],

            "Path" : [
                "Nothing Yet",
            ],

            "Race" : [
                "Dwarf",
                "Elf",
                "Gnome",
                "Halfling",
                "Half Race",
                "Human",
                "Orc",
            ],

            "Sub-Race" : [
                "Action",
                "Another action",
                "Something else here",
            ],

            "Alignment" : [
                "Lawful good",
                "Neutral good",
                "Chaotic good",
                "Lawful neutral",
                "(True) neutral",
                "Chaotic neutral",
                "Lawful evil",
                "Neutral evil",
                "Chaotic evil",
            ],
            
        }
        const btnList = [ BUTTONS[''] ];
        
        function renderList(lIndex){
            //console.log(BUTTONS[lIndex])
            var thisList = BUTTONS[lIndex];
            
            
            //return(
            var returnThis = thisList.map(function(name, index){
                    return <ul title={name} href={name} key={index}>{name}</ul>;
                    }

              //  )
            )
            return returnThis;
        }

        function renderDropdownButton(title, i) {
            //console.log("Render Key: " + renderKey + " Render item: " + renderItem)
            return (
                <Col xs={3}>
                <DropdownButton bsSize="small" title={title} id={title} key={i}>
                <MenuItem> {renderList(title)} </MenuItem>
                </DropdownButton>
                </Col>
            );
        }
        const myKeys = ['Class', 'Path', 'Race', 'Sub-Race', 'Alignment'];

        const buttonsInstance = (
            myKeys.map(renderDropdownButton)
        
        );

        this.state = {
            buttonsInstance
        }
    }
    render(){
        return(
             <div>
                 {this.state.buttonsInstance}
             </div>
     );
    }

}