@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username,
                        :sex, :birthday, :profile, :location,
                        :age_range_min, :age_range_max, :species, :orientation,
                        :size, :weight, :status, :look_for, :look_gender, :diet,
                        :compatibility_value
    json.image_url asset_path(user.image.url)
  end
end
