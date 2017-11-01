class AlterQuestionRemoveUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :questions, :user_id
  end
end
