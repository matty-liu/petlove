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
#  profile2            :text
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
