class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    # before_action :find_user, except: [:create, :index, :show]

    def index
        users = User.all
        render json: users, status: :ok    
    end

    def show
        render json: @current_user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end


    private 

    def user_params
        params.permit(:name, :img_profile, :username, :password, :password_confirmation)
    end
end