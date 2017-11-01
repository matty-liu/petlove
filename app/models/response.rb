# == Schema Information
#
# Table name: responses
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Response < ApplicationRecord

  validates :user_id, :answer_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :answer,
    primary_key: :id,
    foreign_key: :answer_id

end
