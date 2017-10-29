import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sex: this.props.sex,
      orientation: this.props.orientation,
      species: this.props.species,
      size: this.props.size,
      weight: this.props.weight,
    }

    this.handleSex = this.handleSex.bind(this)
    this.handleOrientation = this.handleOrientation.bind(this)
    this.handleSpecies = this.handleSpecies.bind(this)
    this.handleSize = this.handleSize.bind(this)
    this.handleWeight = this.handleWeight.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleSex(e) {
    this.setState({sex: e.target.value})
  }
  handleOrientation(e) {
    this.setState({orientation: e.target.value})
  }
  handleSpecies(e) {
    this.setState({species: e.target.value})
  }
  handleSize(e) {
    this.setState({size: e.target.value})
  }
  handleWeight(e) {
    this.setState({weight: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({},this.state);
    this.props.update(user);
    this.props.closeModal()
  }

  render() {
    return (
      <div className="modal-login-inner">
        <div>Basics</div>
        <form onSubmit={this.handleSubmit} >
          <label>Orientation</label>
          <select onChange={this.handleOrientation}>
            <option value="Straight">Straight</option>
            <option value="Gay">Gay</option>
            <option value="Other">Other</option>
          </select>
          <br />

          <label>Sex</label>
          <select onChange={this.handleSex}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />

          <label>Species</label>
          <select onChange={this.handleSpecies}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Horse">Horse</option>
            <option value="Pig">Pig</option>
            <option value="Bird">Bird</option>
            <option value="Goat">Goat</option>
            <option value="Other">Other</option>
          </select>
          <br />

          <label>Size</label>

          <select onChange={this.handleSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <br />

          <label>Weight</label>
          <select onChange={this.handleWeight}>
            <option value="Light">Light</option>
            <option value="Average">Average</option>
            <option value="Heavy">Heavy</option>
          </select>
          <br />

          <br />
          <button type="submit">Save Changes</button>
          <p>{this.props.errors}</p>

        </form>
      </div>
    )
  }

}

export default withRouter(EditForm);
