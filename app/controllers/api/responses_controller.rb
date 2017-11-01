class Api::ResponsesController < ApplicationController

  def create
    @response = Response.new(response_params)
    if @response.save
      render :show
    else
      render json @response.errors.full_messages, status: 400;
    end
  end

  private
  def response_params
    params.require(:response).permit(:user_id,:answer_id)
  end

end
