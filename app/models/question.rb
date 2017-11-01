# Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  question   :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord

  validates :question, presence: true

  has_many :answers,
    class_name: "Answer",
    primary_key: :id,
    foreign_key: :question_id

end
