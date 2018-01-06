Rails.application.routes.draw do
    root "artists#index"

    resources :artists, only: [:index, :show, :destroy] do
      resources :songs, only: [:new, :create, :destroy]
    end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
