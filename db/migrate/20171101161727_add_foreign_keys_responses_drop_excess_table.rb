class AddForeignKeysResponsesDropExcessTable < ActiveRecord::Migration[5.1]

  def up
    add_column :responses, :user_id, :integer
    add_column :responses, :answer_id, :integer
  end

  def down
    drop_table :responses_tables
  end

end
