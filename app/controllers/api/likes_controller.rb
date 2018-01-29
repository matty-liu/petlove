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
    # find a user like
    @like = Like.find_by(liker_id: current_user.id, likee_id: like_params)
    if @like # if user like exist, update the like
      if @like.update(like: !@like.like)
        render "api/likes/show"
      else
        render json: @like.errors.full_messages, status: 422
      end
    else # if user like doesn't exist, create the like
      @like = Like.new(liker_id: current_user.id, likee_id: like_params, like: true)
      if @like.save
        render "api/likes/show"
      else
        render json: @like.errors.full_messages, status: 422
      end
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
