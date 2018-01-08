class Api::LikesController < ApplicationController

  def index
    @likes = current_user.likee_likes
    if @likes
      render "api/likes/index"
    else
      render json @likes.errors.full_messages, status: 422
    end
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def update
    @like = current_user.likees.find_by(likee_id: like_params)
    if @like.update(like_params)
      render "api/users/update"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likees.find_by(likee_id: like_params)
    if @like.delete
      render "api/users/delete"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  private

  def like_params
    params.require(:like).permit(:liker_id,:likee_id, :like)
  end

end
