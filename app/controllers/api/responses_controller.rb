class Api::ResponsesController < ApplicationController

  def create
    @answers = params[answers]
    compatibility_score = 50
    Response.transaction do
      @answers.each do |answer|
        Response.create(user_id: current_user.id, answer_id: answer.id)
        compatibility_score += answer.compatibility
      end
      current_user.compatibility_value = compatibility_score
    end
    
  end

  private
  def response_params
    params.require(:response).permit(:answer_id)
  end

end
