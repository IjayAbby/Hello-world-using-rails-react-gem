class StaticController < ApplicationController
    def index
        render json: 'Welcome Students'
    end 
end 