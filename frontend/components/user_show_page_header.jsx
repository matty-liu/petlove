import React from 'react';

class UserShowPageHeader extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    if (this.props.username) {
      return (
        <div className="profile-header">
          <div className="profile-header-left">
            <div className="profile-header-left-thumbnail">
              <img src={this.props.imageUrl} className="profile-header-left-thumbnail-pic" />
            </div>
            <div className="profile-header-left-text">
              <div className="profile-header-left-text-username">{this.props.username}</div>
              <div className="profile-header-left-text-location">New York</div>
            </div>
          </div>
          <div className="profile-header-buttons">
            <button className="profile-header-buttons-pass">
              <span class="fa fa-times" aria-hidden="true"></span>
              <span>Pass</span>
            </button>
            <button className="profile-header-buttons-like">
              <span class="fa fa-star" aria-hidden="true"></span>
              <span>Like</span>
            </button>
          </div>
        </div>
      )
    } else {
      return <div>FETCHING.....</div>
    }

  }

}

export default UserShowPageHeader;
