class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
    if @questions
      render "api/questions/index"
    else
      render json @likes.errors.full_messages, status: 422
    end
  end

end
