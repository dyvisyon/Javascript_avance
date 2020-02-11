import React from "react";
import { Component } from "react";

export default class Config extends Component{
    
    constructor(props){
      super(props);
      this.state = {value: ' '};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit =this.handleSubmit.bind(this)
    }



handleChange(event){
  this.setState({value: event.target.value});

}

handleSubmit(event){
  console.log("le nom qui a été soumis est" + this.state.value)
  event.preventDefault();
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

            <label>
              Nom :
              <input type="text" value={this.state.value} onChange={this.handleChange}/>
              
            </label>
            <input type="submit" value="Envoyer"/>
          </form>
        );
      }
    }          

    /*state = {
        myInputValue = ""
    }
    
    render() {
        return (
            <form>
            <label>
              Nom :
              <input type="text" name="name" value={this.state.name} onChange={e => this.setState({myInputValue: e.target.value})}/>
            </label>
            
          </form>
        );
      }
}*/