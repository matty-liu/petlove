
@user = User.find_by(user_id: user_id)



json.extract! user, :id, :username, :first_name, :last_name, :email,
                    :sex, :birthday, :profile, :location,
                    :age_range_min, :age_range_max, :species, :orientation,
                    :size, :weight, :status, :look_for, :look_gender, :diet
json.image_url image_url(user.image.url)
