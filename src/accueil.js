import React from "react";

export default class Accueil extends React.Component{
    constructor({propsChild}) {
        super();
        this.state = {
            stateChild: propsChild
        };
    }

    componentDidUpdate({propsChild}) {
        this.setState({...this.state, propsChild});
    }

    render(){
        const { stateChild } = this.state;
        return (
            <div>
                <p>Hello {stateChild}!</p>
            </div>
        );
    }
}
        
     
