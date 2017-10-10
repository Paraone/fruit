import React, {Component} from 'react';

import Modal from '../Modal';
import AddTeams from '../forms/addteams';
import EditAddress from '../forms/editAddress';
import EditName from '../forms/editname';

export default class Settings extends Component{

  constructor(props){
    super(props);

    this.openEditName = this.openEditName.bind(this);
    this.openEditAddress = this.openEditAddress.bind(this);
    this.openEditAddress = this.openEditAddress.bind(this);
    this.openAddTeams = this.openAddTeams.bind(this);
  }

  openEditName(){
    console.log("opening Edit Name");
    this.props.openEditName();
  }

  openEditAddress(){
    console.log("opening Edit Address");
    this.props.openEditAddress();

  }

  openAddTeams(){
    console.log("opening Add Teams");
    this.props.openAddTeams();
  }

	render(){
		return(
			<div className="container">
			  <div className="row">
				  <div className="col-md-12">
					  <h2>Sports Magazine Settings</h2>
            <div className="settingOption">
            <div className="row">

              <div className="col-md-4">
                <div className="optionTitle">Name</div>
                <div>Johnny Smith</div>
              </div>
              <div className="col-md-4">
                <button className="btn-primary" onClick={this.openEditName}>Edit Name</button>
              </div>
            </div>
            </div>

            <div className="settingOption">
            <div className="row">
              <div className="col-md-4">
                <div className="optionTitle">Address</div>
                <div>{`123 Bowl Lane`}</div>
                <div>{`New York, NY 10021`}</div>
              </div>
              <div className="col-md-4">
                <button className="btn-primary" onClick={this.openEditAddress}>Edit Address</button>
              </div>
            </div>
            </div>

            <div className="settingOption">
            <div className="row" >
              <div className="col-md-4">
                <div className="optionTitle">Favourite Teams</div>
                <div>None Added</div>
              </div>
              <div className="col-md-4">
                <button className="btn-primary" onClick={this.openAddTeams}>Add Teams</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Modal {...this.props} form={EditName} />
      </div>
		);
	}
}
