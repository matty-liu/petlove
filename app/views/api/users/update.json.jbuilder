json.extract! @user, :id, :username, :first_name, :last_name, :email,
                    :sex, :birthday, :profile, :profile2, :location,
                    :age_range_min, :age_range_max, :species, :orientation,
                    :size, :weight, :status, :look_for, :look_gender, :diet,
                    :compatibility_value
json.image_url image_url(@user.image.url)
