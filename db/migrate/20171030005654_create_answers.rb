class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :answer, null: false
      t.integer :question_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
