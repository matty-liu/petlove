class AddColumnLikes < ActiveRecord::Migration[5.1]
  def change
    add_column :likes, :like, :boolean, null: false
  end
end
