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
          <label for="question1">Anytime</label>
      </div>

      <div className="profile-question2">
        "What would you prefer to do in your free time?"
          <input type="radio" id="question2" />
          <label for="question2">Eat</label>
          <label for="question2">Sleep</label>
          <label for="question2">Play</label>
      </div>

      <div className="profile-question4">
        "What do you think of vegetarians?"
        <input type="radio" id="question1" />
        <label for="question2">Love Em</label>
        <label for="question2">Hate Em</label>
        <label for="question2">Doesn't matter to me</label>
      </div>

      <div className="profile-question3">
        "Are you okay with interspecies dating?"
          <input type="radio" id="question1" />
          <label for="question2">Yes</label>
          <label for="question2">No</label>
      </div>

      <div className="profile-question5">
        "Does size matter?"
        <input type="radio" id="question1" />
        <label for="question2">Yes</label>
        <label for="question2">No</label>
        <label for="question2">Indifferent</label>
      </div>
    </form>
  }

}

export default QuestionForm;
