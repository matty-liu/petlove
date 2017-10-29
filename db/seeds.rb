# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(username: "Doggy", password: "password",
  sex: "M", birthday: "", location: "New York",
  species: "dog", age_range_min: 21, age_range_max: 100,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!")

User.create!(username: "Kitty", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "M", birthday: "", location: "New York",
  species: "cat", age_range_min: 21, age_range_max: 100,
  profile: "Loooking for someone to cuddle and play with!")

User.create!(username: "Piggy", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "M", birthday: "", location: "New York",
  species: "pig",  age_range_min: 21, age_range_max: 100,
  profile: "I enjoy getting dirty and rolling around in mud. I do this mainly to prevent myself from getting
  sunburned so please understand. I promise I'm fun to hang around with and please don't turn me into
  ham, or bacon")

User.create!(username: "Owl", password: "password",
  species: "owl", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "M", birthday: "", profile: "text me", location: "New York", age_range_min: 21, age_range_max: 100,
  profile: "I am an hoot owl. That is all. HOOT HOOT")

User.create!(username: "Giraffi", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "M", birthday: "", location: "New York",
  species: "giraffe", age_range_min: 21, age_range_max: 100,
  profile: "Just saying, I don't do drugs because I'm naturally high, I'll see myself out but please send
  me a message!")

User.create!(username: "Hamsty", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "M", birthday: "", location: "New York",
  species: "hamster", age_range_min: 21, age_range_max: 100,
  profile: "I love traveling, and I must say my favorite location is hAmsterdam")




# orientation, straight, gay, bisexual
# size, small medium big
# weight, light average heavy
# status, single seeing someone married open relationship
# species, dog cat giraff horse
# look_for, friendship, significant other
# diet, herbavore, ominvore, carnivore
