class UsersController < ApplicationController
  before_action :authenticate_user!

  def index
    @users = User.order('created_at DESC').
                  search(filter).
                  paginate(page: params[:page], per_page: 27)
  end

  def show
    @user = User.find(params[:id])
    @articles = Article.where(user_id: @user.id).
                        paginate(page: params[:page], per_page: 12)
  end

  private

  def filter
    @filter = params[:q]
  end

end
