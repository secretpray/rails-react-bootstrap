class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  default_scope { order(created_at: :desc) }

  has_many :todo_items, dependent: :destroy
  has_many :articles, dependent: :destroy

  def table_name
    "#{self.email}"
  end

  def self.search(search)
    if search && search.length > 0
      where("LOWER(email) LIKE ?", "%#{search.downcase}%")
    else
      where(nil)
    end
  end

end
