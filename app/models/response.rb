class Response < ApplicationRecord

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :answer,
    primary_key: :id,
    foreign_key: :answer_id

end
