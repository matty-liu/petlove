class DropResponsesTableExcess < ActiveRecord::Migration[5.1]
  def change
    drop_table :responses_tables
  end
end
