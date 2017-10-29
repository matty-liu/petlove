import React from 'react'

class ProfilePageMainSidebar extends React.Component {

  render() {
    debugger
    return (
      <div className="profile-content-sidebar">

        <button className="profile-content-sidebar-button1">
          <table>
            <tbody>
              <tr className = "profile-content-sidebar-button1-row">
                <td>I am a</td>
                <td>{this.props.status}</td>
                <td>{this.props.sex}</td>
                <td>{this.props.species}</td>
              </tr>
            </tbody>
          </table>
        </button>

        <button className="profile-content-sidebar-button2">
          <table>
            <tbody>
              <tr className="profile-content-sidebar-button2-row">
                <td>Looking for someone between {this.props.age_range_min}&nbsp;
                   and {this.props.age_range_max} old, {this.props.look_for}
                  and {this.props.look_gender}
                </td>
              </tr>
            </tbody>
          </table>
        </button>
      </div>
    )
  }

}

export default ProfilePageMainSidebar;
