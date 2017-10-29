import { connect } from 'react-redux';

import EditForm from './edit_form';
import { update } from '../actions/edit_user_action';

function mapStateToProps(state, ownProps) {
  return {
    errors: state.errors.session,
    sex: state.session.currentUser.sex,
    orientation: state.session.currentUser.orientation,
    status: state.session.currentUser.status,
    age_range_min: state.session.currentUser.age_range_min,
    age_range_max: state.session.currentUser.age_range_max,
    species: state.session.currentUser.species,
    size: state.session.currentUser.size,
    weight: state.session.currentUser.weight,
    look_for: state.session.currentUser.look_for,
    look_gender: state.session.currentUser.look_gender,
    diet: state.session.currentUser.diet,
    closeModal: ownProps.closeModal
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update: (user) => dispatch(update(user))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditForm)
