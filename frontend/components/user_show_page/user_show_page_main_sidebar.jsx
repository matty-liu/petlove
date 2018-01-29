import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class UserShowPageMainSidebar extends React.Component {

  render() {

    return (
      <div className="profile-content-sidebar">
        <div className="show-content-sidebar1">
          <div className="show-content-sidebar-details1">
            <span>
              {(this.props.orientation === null) ? `` : `${this.props.orientation}, `}
              {(this.props.sex === null) ? `` : `${this.props.sex}, `}
              {(this.props.species === null) ? `` : `${this.props.species}`}
            </span>
            <br/>
            <span className="profile-content-sidebar-edit-text"></span>
          </div>
        </div>

        <div className="show-content-sidebar2">
          <div onClick={this.handleEdit} className="show-content-sidebar-details2">
            <span>Looking for {this.props.look_for}</span>
            <br/>
            <span className="profile-content-sidebar-edit-text"></span>
          </div>
        </div>

      </div>
    )
  }

}

export default UserShowPageMainSidebar;
