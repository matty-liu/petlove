import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class QuestionForm extends React.Component {

  // componentWillMount() {
  //   this.props.getUsers()
  // }

  render() {
    return (
      <form className="profile-questions-form">
        <div className="profile-questions-container">

          <div className="profile-question">
            <span>Are you a morning person? Night person?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question1" className="radio-button" name="q1"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Morning</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question1" className="radio-button" name="q1"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Night</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question1" className="radio-button" name="q1"/>
                <div className="profile-question-answer" htmlFor="question1">&nbsp;&nbsp;Anytime</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question">
            <span>What would you prefer to do in your free time?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question2" className="radio-button" name="q2"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Eat</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question2" className="radio-button" name="q2"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Sleep</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question2" className="radio-button" name="q2"/>
                <div className="profile-question-answer" htmlFor="question2">&nbsp;&nbsp;Play</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question4">
            <span>What do you think of vegetarians?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question4" className="radio-button" name="q4"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;Love Em</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question4" className="radio-button" name="q4"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;Hate Em</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question4" className="radio-button" name="q4"/>
                <div className="profile-question-answer" htmlFor="question4">&nbsp;&nbsp;Doesn't matter to me</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question3">
            <span>Are you okay with interspecies dating?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question3" className="radio-button" name="q3"/>
                <div className="profile-question-answer" htmlFor="question3">&nbsp;&nbsp;Yes</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question3" className="radio-button" name="q3"/>
                <div className="profile-question-answer" htmlFor="question3">&nbsp;&nbsp;No</div> <br/>
              </div>
            </div>
          </div>

          <div className="profile-question profile-question5">
            <span>Does size matter?</span>
            <div className="profile-question-answerS">
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question5" className="radio-button" name="q5"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;Yes</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question5" className="radio-button" name="q5"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;No</div> <br/>
              </div>
              <div className="profile-question-answer-radioanswer">
                <input type="radio" id="question5" className="radio-button" name="q5"/>
                <div className="profile-question-answer" htmlFor="question5">&nbsp;&nbsp;Indifferent</div> <br/>
              </div>
            </div>
          </div>

        </div>
      </form>
    )
  }

}

export default QuestionForm;
