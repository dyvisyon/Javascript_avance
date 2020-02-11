import React from "react";
import { Component } from "react";

export default class Accueil extends Component{
    constructor (props){
        super(props);
        this.state = this.prop;

    }




    render(){
        
        function DisplayName({ name }) {
               return <p>Hello {name} !</p>
            } 
    
    
        return (
            <div>
                <DisplayName name={this.prop}/>
                
            </div>
            
        );
    }
}
        
     
