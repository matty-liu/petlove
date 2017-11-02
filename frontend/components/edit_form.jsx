// <label>Size</label>
// <select onChange={this.handleSize} defaultValue={this.props.size}>
//   <option value="Small">Small</option>
//   <option value="Medium">Medium</option>
//   <option value="Large">Large</option>
// </select>
// <br />
//
// <label>Weight</label>
// <select onChange={this.handleWeight} defaultValue={this.props.weight}>
//   <option value="Light">Light</option>
//   <option value="Average">Average</option>
//   <option value="Heavy">Heavy</option>
// </select>
// <br />

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
      age_range_min: this.props.age_range_min,
      look_for: this.props.look_for,
      profile: this.props.profile,
      profile2: this.props.profile2
    }

    this.handleSex = this.handleSex.bind(this)
    this.handleOrientation = this.handleOrientation.bind(this)
    this.handleSpecies = this.handleSpecies.bind(this)
    this.handleSize = this.handleSize.bind(this)
    this.handleWeight = this.handleWeight.bind(this)
    this.handleAgeRangeMin = this.handleAgeRangeMin.bind(this)
    this.handleLookFor = this.handleLookFor.bind(this)
    this.handleProfile = this.handleProfile.bind(this)
    this.handleProfileTwo = this.handleProfileTwo.bind(this)

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
  handleLookFor(e) {
    this.setState({look_for: e.target.value})
  }
  handleAgeRangeMin(e) {
    this.setState({age_range_min: e.target.value})
  }
  handleProfile(e) {
    this.setState({profile: e.target.value})
  }
  handleProfileTwo(e) {
    this.setState({profile2: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({},this.state);
    
    this.props.update(user);
    this.props.closeModal()
  }

  render() {
    return (
      <div className="modal-edit">
        <div className="modal-edit-title">Basics</div>
        <form onSubmit={this.handleSubmit} className="modal-edit-form">

          <label>I am a...</label>
          <div className="modal-edit-form-first3">
            <div>
              <select onChange={this.handleOrientation} defaultValue={this.props.orientation}>
                <option disabled selected value> -select- </option>
                <option value="Straight">Straight</option>
                <option value="Gay">Gay</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <select onChange={this.handleSex} defaultValue={this.props.sex}>
                <option disabled selected value> -select- </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <select onChange={this.handleSpecies} defaultValue={this.props.species}>
              <option disabled selected value> -select- </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Horse">Horse</option>
              <option value="Pig">Pig</option>
              <option value="Bird">Bird</option>
              <option value="Goat">Goat</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <label>I am looking for...</label>
          <div className="modal-edit-form-next1">
            <div>
              <select onChange={this.handleLookFor} defaultValue={this.props.look_for}>
                <option disabled selected value> -select- </option>
                <option value="Relationship">a relationship</option>
                <option value="Friendship">a friend</option>
                <option value="Friendship">dinner</option>
              </select>
            </div>
          </div>

          <textarea className="modal-edit-textarea" onChange={this.handleProfile} defaultValue={this.props.profile}></textarea>

          <textarea className="modal-edit-textarea" onChange={this.handleProfileTwo} defaultValue={this.props.profile2}></textarea>

          <br />
          <button type="submit" className="save-changes">Save Changes</button>
          <p>{this.props.errors}</p>

        </form>
      </div>
    )
  }

}

export default withRouter(EditForm);
