import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {

  // componentWillMount() {
  //   this.props.getUsers()
  // }

  render() {
    return (
      <form className="profile-questions-form">
        <div className="profiles-questions-container">

          <div className="profile-question">
            "Are you a morning person? Night person?"
            <br/>
            <input type="radio" id="question1" />
            <label htmlFor="question1">Morning</label>
            <br/>
            <input type="radio" id="question1" />
            <label htmlFor="question1">Night</label>
            <br/>
            <input type="radio" id="question1" />
            <label htmlFor="question1">Anytime</label>
          </div>

          <div className="profile-question">
            "What would you prefer to do in your free time?"
            <br/>
            <input type="radio" id="question2" />
            <label htmlFor="question2">Eat</label>
            <br/>
            <input type="radio" id="question2" />
            <label htmlFor="question2">Sleep</label>
            <br/>
            <input type="radio" id="question2" />
            <label htmlFor="question2">Play</label>
          </div>

          <div className="profile-question profile-question4">
            "What do you think of vegetarians?"
            <br/>
            <input type="radio" id="question4" />
            <label htmlFor="question4">Love Em</label>
            <br/>
            <input type="radio" id="question4" />
            <label htmlFor="question4">Hate Em</label>
            <br/>
            <input type="radio" id="question4" />
            <label htmlFor="question4">Doesn't matter to me</label>
          </div>

          <div className="profile-question profile-question3">
            "Are you okay with interspecies dating?"
            <br/>
            <input type="radio" id="question3" />
            <label htmlFor="question3">Yes</label>
            <br/>
            <input type="radio" id="question3" />
            <label htmlFor="question3">No</label>
          </div>

          <div className="profile-question profile-question5">
            "Does size matter?"
            <br/>
            <input type="radio" id="question5" />
            <label htmlFor="question5">Yes</label>
            <br/>
            <input type="radio" id="question5" />
            <label htmlFor="question5">No</label>
            <br/>
            <input type="radio" id="question5" />
            <label htmlFor="question5">Indifferent</label>
            <br/>
          </div>

        </div>
      </form>
    )
  }

}

export default QuestionForm;
