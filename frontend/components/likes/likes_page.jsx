import React from 'react';
import { Link, Route, Redirect, withRouter } from 'react-router-dom'

class LikesPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getLikes()
  }

  render() {
    return(
      <div>Likes!</div>
    )
  }


}



export default LikesPage;
