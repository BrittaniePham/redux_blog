class Api::BlogsController < ApplicationController

  def index
    render json: Blog.all
  end

end
