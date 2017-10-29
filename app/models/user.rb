# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  first_name         :string
#  last_name          :string
#  email              :string
#  sex                :string
#  birthday           :date
#  profile            :text
#  location           :string
#  age_range_min      :integer
#  age_range_max      :integer
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  species            :string
#  orientation        :string
#  size               :string
#  weight             :string
#  status             :string
#  look_for           :string
#  look_gender        :string
#  diet               :string
#

class User < ApplicationRecord

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
