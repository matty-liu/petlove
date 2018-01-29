Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update]
    resource :sessions, only: [:create, :destroy]
    resource :responses, only: [:create]
    resources :likes, only: [:index, :create, :show]
  end

end
