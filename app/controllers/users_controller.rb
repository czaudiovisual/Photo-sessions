class UsersController < ApplicationController

    skip_before_action :authorize
    # , only: :create

    def index
        users = User.all
        render json: users, status: :ok    
    end

    def show
        user = User.find(params[:id])
        # user = User.find(@current_user.id)
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
