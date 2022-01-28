class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    private 

    def user_params
        params.permit(:name, :img_profile, :username, :password_digest)
    end
end
