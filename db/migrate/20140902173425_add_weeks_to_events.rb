class AddWeeksToEvents < ActiveRecord::Migration
  def change
    add_column :events, :weeks, :integer
  end
end
