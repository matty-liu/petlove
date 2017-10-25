class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render "api/users/show"
    else
      render json: "Invalid credentials", status: 401
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      
      render "api/users/show"
    else
      render json: "No logged in user", status: 404
    end

  end

end
