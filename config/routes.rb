Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: :json } do
    get 'random-greeting', to: 'messages#greet'
    end
    # get '*page', to: 'static#index', constraints: ->(req) do
    # !req.xhr? && req.format.html?
    # end
    end
    root "static#index"
end
