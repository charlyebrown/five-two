class AddAgeAndMonthstToUsers < ActiveRecord::Migration
  def change
    add_column :users, :years, :integer
    add_column :users, :months, :integer
  end
end
