import * as APIUtil from '../util/response_api_util';

export const SUBMIT_SURVEY= "SUBMIT_SURVEY"

export const submitSurvey = (answers) => (dispatch) => {
  return APIUtil
  .submitSurvey(answers)
}
