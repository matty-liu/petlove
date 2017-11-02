class AddPersonalityValuetoAnswer < ActiveRecord::Migration[5.1]

  def change
    add_column :answers, :compatibility, :integer, presence: true
  end

end
