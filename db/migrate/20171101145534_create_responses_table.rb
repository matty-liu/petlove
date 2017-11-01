class CreateResponsesTable < ActiveRecord::Migration[5.1]
  def change
    create_table :responses_tables do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
    end
  end
end
