Rails.application.routes.draw do
  root 'top#index'

  resources :top do
    get :practice, on: :collection
  end
end
