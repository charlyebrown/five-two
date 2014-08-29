class User < ActiveRecord::Base
  enum role: [:user, :vip, :admin]
  after_initialize :set_default_role, :if => :new_record?

  has_many :events, dependent: :destroy

  def set_default_role
    self.role ||= :user
  end

  validate do |user|
    if user.birthday > 10.years.ago
      errors.add(:birthday, "must be at least 10 years old")
    end
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
