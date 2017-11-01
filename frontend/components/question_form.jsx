import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

import QuestionForm from './question_form_container';

// import QuestionForm from './question_form_container';

class QuestionForm extends React.Component {

  // componentWillMount() {
  //   this.props.getUsers()
  // }

  render() {

  <form>
    <div className="profile-question1">
      "Are you a morning person? Night person?"
        <input type="radio" id="question1" />
        <label for="question1">Morning</label>
        <label for="question1">Night</label>
        <label for="question1">Neither</label>
    </div>

    <div className="profile-question2">
      "What would you prefer to do in your free time?"
        <input type="radio" id="question1" />
        <label for="question2">Morning</label>
        <label for="question2">Night</label>
        <label for="question2">Neither</label>
    </div>

    <div className="profile-question3">
      "Are you okay with interspecies dating?"
        <input type="radio" id="question1" />
        <label for="question2">Morning</label>
        <label for="question2">Night</label>
        <label for="question2">Neither</label>
    </div>

    <div className="profile-question4">
      "What do you think of vegetarians?"
      <input type="radio" id="question1" />
      <label for="question2">Morning</label>
      <label for="question2">Night</label>
      <label for="question2">Neither</label>
    </div>

    <div className="profile-question5">
      "Does size matter?"
      <input type="radio" id="question1" />
      <label for="question2">Morning</label>
      <label for="question2">Night</label>
      <label for="question2">Neither</label>
    </div>
  </form>

  }

}

export default QuestionPage;
