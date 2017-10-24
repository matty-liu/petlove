class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render :create, status: 200
    else
      render json: "Invalid Credentials", status: 401
    end

  end

  def destroy
    if current_user
      logout
      render json: {}, status: 200
    else
      render json: "No logged in user", status: 404

  end


  def user_params
    params.require(:user).permit(:username,:password)
  end


end
