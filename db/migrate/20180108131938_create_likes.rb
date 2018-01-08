class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :likee_id, null: false
      t.boolean :like, null: false

      t.timestamps
    end
  end
end
