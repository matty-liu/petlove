json.extract! user, :id, :username, :first_name, :last_name, :email,
                    :sex, :birthday, :profile, :location, :age_range_min, :age_range_max
json.image_url image_url(user.image.url)
