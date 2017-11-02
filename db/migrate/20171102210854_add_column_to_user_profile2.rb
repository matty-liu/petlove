class AddColumnToUserProfile2 < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :profile2, :text
  end
end
