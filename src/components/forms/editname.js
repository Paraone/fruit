import React, {Component} from 'react';

export default class EditName extends Component{

  setName(){
    console.log("setting name");
  }

  render(){
    return(
      <form onSubmit={this.submitForm} ref={(input) => this.form = input }>
      <input
        type="text"
        defaultValue={this.props.home.name}
        ref={(input) => this.name = input}
        onChange={this.setName} />
      <input type="submit" value="Save"/>
      </form>
    );
  }
}
