class Api::V1::CleanersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    @cleaner = Cleaner.all

    render json: @cleaner
  end

  # GET /users/1
  def show
    render json: @cleaner
  end

  # POST /users
  def create
    @cleaner = Cleaner.new(user_params)

    if @user.save
      render json: @cleaner, status: :created, location: @cleaner
    else
      render json: @cleaner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @cleaner.update(user_params)
      render json: @cleaner
    else
      render json: @cleaner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = Cleaner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name)
    end
end
