class Like < ApplicationRecord

  validates :liker_id, :likee_id, presence: true

  belongs_to :liker,
    class_name: "User",
    foreign_key: :liker_id

  belongs_to :likee,
    class_name: "User",
    foreign_key: :likee_id

end
