class UpdateUserTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :name, :first_name
    add_column :users, :last_name, :string
    add_column :users, :password_digest, :string
    add_column :users, :email, :string
    add_column :users, :picture_url, :string
    add_column :users, :is_admin, :boolean, :default => false
  end
end


# add_column :tweet, :retweets_count, :integer, :null => false, :default => 0