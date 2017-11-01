class Api::ResponsesController < ApplicationController

  def create

    @answers = params[answers]

    @answers.each do |answer|
      Response.create(user_id: current_user.id, answer_id: answer.id)
      if @response.save
        render :create
      else
        render json @response.errors.full_messages, status: 400;
      end
    end

  end

  private
  def response_params
    params.require(:response).permit(:answer_id)
  end

end
