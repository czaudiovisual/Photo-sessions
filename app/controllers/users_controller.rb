class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok    
    end

    def show
        # user = User.find(@current_user.id)
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end


    private 

    def user_params
        params.permit(:name, :img_profile, :username, :password_digest)
    end
end
