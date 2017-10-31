import React from 'react';

class UserShowPageHeader extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    if (this.props.username) {
      return (
        <div className="profile-header">
          <div className="profile-header-thumbnail">
            <img src={this.props.imageUrl} className="profile-header-thumbnail-pic" />
          </div>
          <div className="profile-header-text">
            <div className="profile-header-text-username">{this.props.username}</div>
            <div className="profile-header-text-location">{this.props.location}</div>
          </div>
        </div>
      )
    } else {
      return <div>FETCHING.....</div>
    }

  }

}

export default UserShowPageHeader;
