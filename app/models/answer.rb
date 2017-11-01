# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  answer      :string           not null
#  question_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord

  validates :answer, :question_id, :user_id, presence: true

  belongs_to :question,
    class_name: "Question",
    primary_key: :id,
    foreign_key: :question_id

  # belongs_to :user,
  #   class_name: "User",
  #   primary_key: :id,
  #   foreign_key: :user_id

end
