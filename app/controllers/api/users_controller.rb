class Api::UsersController < ApplicationController

  def index
    @users = User.all
    if logged_in?
      render "api/users/index"
    else
      render json @users.errors.full_messages, status: 401
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render "api/users/update"
    else
      render json: @user.errors.full_messages, status: 403
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name,
      :last_name, :birthday, :profile, :location, :sex, :birthday,
      :profile, :location,
      :age_range_min, :age_range_max, :species, :orientation,
      :size, :weight, :status, :look_for, :look_gender, :diet,
      :image)
  end

end
