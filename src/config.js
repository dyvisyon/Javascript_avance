import React from "react";

export default class Config extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }; 
    }



  //handleChange(event){
    //this.setState({value: event.target.value});

  //}

        


  handleSubmit = (event) => {
    event.preventDefault();
    console.log("le nom qui a été soumis est", event.target[0].value);
    this.props.propsChild(event.target[0].value);
    this.setState({...this.state, value:event.target[0].value});
  }



  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Nom : {this.state.value}<br />
        <input type="text"/>
        </label>
        <input type="submit" value="envoyer"/>
      </form>
    );
  }
}