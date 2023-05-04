class AddDefaultValueToColor < ActiveRecord::Migration[6.0]
  def up
    Label.where(color: nil).find_each { |u| u.update(color: '#8437fd') }

    change_column :labels, :color, :string, default: '#8437fd', null: false
  end

  def down
    change_column :labels, :color, :string, default: nil, null: true
  end
end
