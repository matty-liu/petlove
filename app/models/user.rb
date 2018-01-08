# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  first_name          :string
#  last_name           :string
#  email               :string
#  sex                 :string
#  birthday            :date
#  profile             :text
#  location            :string
#  age_range_min       :integer
#  age_range_max       :integer
#  image_file_name     :string
#  image_content_type  :string
#  image_file_size     :integer
#  image_updated_at    :datetime
#  species             :string
#  orientation         :string
#  size                :string
#  weight              :string
#  status              :string
#  look_for            :string
#  look_gender         :string
#  diet                :string
#  compatibility_value :integer
#

class User < ApplicationRecord

  has_many :responses,
    primary_key: :id,
    foreign_key: :user_id

  has_many :answers,
    through: :responses,
    source: :answer

  # has_many :answers,
  #   primary_key: :id,
  #   foreign_key: :user_id

  # has_many :questions,
  #   through: answers,
  #   source: question



  # We never reference like (the actual like) directly because the individual like
  # is not what we are looking for. Grabbing something by a like_id (primary key in like table)

  # What we care for is who the liker is and who the likee is.
  # If you like someone, you are the liker and the person you liked is the likee.

  # This is confusing because when I set up the association, I will say,

  # a user has_many likers. (does likers refer to the user(self),
  #                           or users who has like me thus they are the likers?)
  # a user has_many likees. (same issue as before)

  # For clarification:
  # a user has_many likers means that he/she has many users who like me
  # a user has_many likees mean that he/she has many users who they like

  has_many :likers, # people who like me
    through: :liker_likes,
    source: :liker

  has_many :liker_likes,
    foreign_key: :likee_id,
    class_name: "Like"

  has_many :likees, # people who I like
    through: :likee_likes,
    source: :likee,

  has_many :likee_likes,
    foreign_key: :liker_id,
    class_name: "Like"


  attr_reader :password
  after_initialize :ensure_session_token

  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image, default_url: "default-empty-profile.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
