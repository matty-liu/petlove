import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class UserShowPageMainSidebar extends React.Component {

  render() {

    return (
      <div className="profile-content-sidebar">
        <div className="profile-content-sidebar1">
          <div className="profile-content-sidebar-details1">
            <span>{this.props.status}, {this.props.sex}, {this.props.species}.</span>
            <br/>
            <span className="profile-content-sidebar-edit-text"></span>
          </div>
        </div>

        <div className="profile-content-sidebar2">
          <div onClick={this.handleEdit} className="profile-content-sidebar-details2">
            <span>Looking for {this.props.look_gender} {this.props.look_for}, between
              {this.props.age_range_min}&nbsp; and {this.props.age_range_max} old, {this.props.look_for}</span>
            <br/>
            <span className="profile-content-sidebar-edit-text"></span>
          </div>
        </div>

      </div>
    )
  }

}

export default UserShowPageMainSidebar;
