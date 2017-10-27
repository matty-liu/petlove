class AddUsersInfo < ActiveRecord::Migration[5.1]

  def self.up
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :email, :string
    add_column :users, :sex, :string
    add_column :users, :birthday, :date
    add_column :users, :profile, :text
    add_column :users, :location, :string
    add_column :users, :age_range_min, :int
    add_column :users, :age_range_max, :int
  end

end
