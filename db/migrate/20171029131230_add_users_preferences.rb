class AddUsersPreferences < ActiveRecord::Migration[5.1]

  def self.up
    add_column :users, :species, :string
    add_column :users, :orientation, :string
    add_column :users, :size, :string
    add_column :users, :weight, :string
    add_column :users, :status, :string
    add_column :users, :look_for, :string
    add_column :users, :look_gender, :string
    add_column :users, :diet, :string
  end

end
