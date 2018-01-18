# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  liker_id   :integer          not null
#  likee_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  like       :boolean          not null
#

class Like < ApplicationRecord

  validates :liker_id, :likee_id, presence: true

  belongs_to :liker,
    class_name: "User",
    foreign_key: :liker_id

  belongs_to :likee,
    class_name: "User",
    foreign_key: :likee_id

end
