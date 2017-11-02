# == Schema Information
#
# Table name: answers
#
#  id            :integer          not null, primary key
#  answer        :string           not null
#  question_id   :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  compatibility :integer
#

class Answer < ApplicationRecord

  validates :answer, :question_id, presence: true

  belongs_to :question,
    class_name: "Question",
    primary_key: :id,
    foreign_key: :question_id

  has_many :responses,
    class_name: "Response",
    primary_key: :id,
    foreign_key: :answer_id

  has_many :users,
    through: :responses,
    source: :users



end
