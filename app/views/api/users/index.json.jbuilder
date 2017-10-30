@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username,
                        :sex, :birthday, :profile, :location,
                        :age_range_min, :age_range_max, :species, :orientation,
                        :size, :weight, :status, :look_for, :look_gender, :diet
    # json.image_url image_path(user.image_url)
  end
end
