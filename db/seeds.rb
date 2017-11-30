# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo = User.create!(username: "demo", password: "password")

dog = User.create!(username: "Doggy", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 70,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")

cat = User.create!(username: "Kitty", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Female", birthday: "", location: "New York",
  species: "Cat", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 70,
  profile: "you are loooking for someone to cuddle and play with!")

pig = User.create!(username: "Piggy", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Pig",  age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 75,
  profile: "I enjoy getting dirty and rolling around in mud! I do this mainly to prevent myself from getting
  sunburned so please understand. I promise I'm fun to hang around with and please don't turn me into
  ham, or bacon", profile2: "you don't like pork belly and bacon!")

owl = User.create!(username: "Owl", password: "password",
  species: "Bird", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", profile: "text me", location: "New York", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 65,
  profile: "I am an hoot owl. That is all. HOOT HOOT",
  profile2: "you are looking for someone to play bring oyu to Hogwarts!")

gir = User.create!(username: "Giraffi", password: "password", first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "big", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 68,
  profile: "Just saying, I don't do drugs because I'm naturally high, I'll see myself out but please send
  me a message!",
  profile2: "You like long necks")

ham = User.create!(username: "Hamsty", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Hamster", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 73,
  profile: "I love traveling, and I must say my favorite location is hAmsterdam")

wolf = User.create!(username: "BigBadWolf", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 30,
  look_for: "dinner", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 23,
  profile: "Just looking for a friend, and maybe something more if possible",
  profile2: "you have a home made of straw or sticks!")

try = User.create!(username: "T-Ry", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 25,
  profile: "I've been told I have short arms.",
  profile2: "if you are a fellow dinosaur")

dog2 = User.create!(username: "Lassie", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 75,
  profile: "Entering retirment and looking for someone to grow old with!",
  profile2: "Just say my name and I'll come to the rescue!")

goat1 = User.create!(username: "TomBrady", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Goat", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 72,
  profile: "I've been told I am prety good at American Football, some say",
  profile2: "If you love Avocados!")

goat2 = User.create!(username: "MichaelJordan", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Goat", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 69,
  profile: "Love competition", profile2:"if you want to see me dunk!")

goat3 = User.create!(username: "WayneGretsky", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Goat", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 78,
  profile: "I always seem to be in the right place at the right time",
  profile2:"you love the cold!")

bear = User.create!(username: "Pooh", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 50,
  profile: "I love honeyyyy and sleep",
  profile2: "You like to hibernate")

bear2 = User.create!(username: "Smoky", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 50,
  profile: "you are looking for how to stop forest fires",
  profile2: "You know how to prevent forest fires")

lion1 = User.create!(username: "Simbah", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 40,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 40,
  profile: "I can't wait to be king!",
  profile2: "Hakuna matata")

bear3 = User.create!(username: "Yogi", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 37,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 37,
  profile: "Hey boo boo!",
  profile2: "you are smarter than your average bear!")

 daffy = User.create!(username: "Daffy", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Bird", age_range_min: 21, age_range_max: 40,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 33,
  profile: "You're dethpicable",
  profile2: "you do not like duck theason")

wile = User.create!(username: "WileE", password: "password",
  first_name: "", last_name: "", email: "mail@mail.com",
  sex: "Male", birthday: "", location: "New York",
  species: "Other", age_range_min: 21, age_range_max: 40,
  look_for: "a friend", look_gender: "does not matter",
  size: "small", status: "single", weight: "light",
  orientation:"Single", compatibility_value: 27,
  profile: "!",
  profile2: "you know how to catch that Road Runner")

  dog.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/cutest-dog-breeds.jpg"
  cat.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/cute-baby-kitty.jpg"
  pig.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/cute-baby-animals-piggy.jpg"
  owl.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/beautiful-owl-little-owl.jpg"
  gir.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/cute-baby-giraf.jpg"
  ham.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/hamster.jpg"
  wolf.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/wolf-suit.jpg"
  # try.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/trex.png"
  dog2.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/lassie.jpg"
  goat1.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/goat1.jpg"
  goat2.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/goat2.jpg"
  goat3.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/goat3.jpeg"
  bear.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/pooh+bear.jpg"
  bear2.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/smokey-bear.jpg"
  lion1.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/simbah.jpeg"
  bear3.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/Bear.jpg"
  daffy.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/daffy.jpg"
  wile.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/Coyote-Spirit.jpg"

  dog.save!
  cat.save!
  pig.save!
  owl.save!
  gir.save!
  ham.save!
  wolf.save!
  try.save!
  dog2.save!
  goat1.save!
  goat2.save!
  goat3.save!
  bear.save!
  bear2.save!
  lion1.save!
  bear3.save!
  daffy.save!
  wile.save!

dog3 = User.create!(username: "Doge", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 60,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog3.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/doge.jpg"

dog4 = User.create!(username: "Buddy", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 72,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog4.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/Air-Bud-Director-Charles-Martin-Smith-Doesnt-Like.jpg"

dog5 = User.create!(username: "Barkley Sir Charles", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 41,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog5.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/sir-charles-barkley-icecream.jpg"

dog6 = User.create!(username: "MenswareDog", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 38,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog6.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/menswaredog.jpeg"

dog7 = User.create!(username: "Beethoven", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 50,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog7.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/beethoven+dog.jpg"

dog8 = User.create!(username: "Tramp", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 35,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog8.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/Tramp325.jpg"

dog9 = User.create!(username: "Milo", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 41,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog9.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/milo.jpg"

dog10 = User.create!(username: "Bolt", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 68,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog10.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/Bolt_profile.jpg"

dog11 = User.create!(username: "Hooch", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 51,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog11.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/hooch.jpg"

dog12 = User.create!(username: "Slink", password: "password",
  sex: "Male", birthday: "", location: "New York",
  species: "Dog", age_range_min: 21, age_range_max: 100,
  look_for: "a friend", look_gender: "does not matter",
  size: "medium", status: "single", weight: "average",
  orientation:"Single", compatibility_value: 24,
  profile: "Love people, playing around, running around, eating, sleeping Looking for long walks on the beach
  and someone to play with!", profile2: "If you are looking for someone to play catch with!")
dog12.image = "https://s3.us-east-2.amazonaws.com/petlove-pro/users/images/000/000/seeds_images/Toy-Story-3-Slinky-Dog.jpg"


dog3.save!
dog4.save!
dog5.save!
dog6.save!
dog7.save!
dog8.save!
dog9.save!
dog10.save!
dog11.save!
dog12.save!

# Question.create!(question: "Are you okay with interspecies dating?")
# Question.create!(question: "Are you a morning person? Night person?")
# Question.create!(question: "What would you prefer to do in your free time?")
# Question.create!(question: "What do you think of vegetarians?")
# Question.create!(question: "Does size matter?")


# Answer.delete_all
#
# Answer.create(answer:"Yes", question_id: 1, compatibility: 10)
# Answer.create(answer:"No", question_id: 1, compatibility: 10)
# Answer.create(answer:"Indifferent", question_id: 1, compatibility: 5)
#
# Answer.create(answer:"Morning", question_id: 2, compatibility: 10)
# Answer.create(answer:"Night", question_id: 2, compatibility: -10)
# Answer.create(answer:"Anytime", question_id: 2, compatibility: 0)
#
# Answer.create(answer:"Eat", question_id: 3, compatibility: 5)
# Answer.create(answer:"Sleep", question_id: 3, compatibility: -10)
# Answer.create(answer:"Play", question_id: 3, compatibility: 10)
#
# Answer.create(answer:"Love Em", question_id: 4, compatibility: 10)
# Answer.create(answer:"Hate Em", question_id: 4, compatibility: -5)
# Answer.create(answer:"Eat Em", question_id: 4, compatibility: -10)
#
# Answer.create(answer:"Yes", question_id: 5, compatibility: -10)
# Answer.create(answer:"No", question_id: 5, compatibility: 10)
# Answer.create(answer:"Indifferent", question_id: 5, compatibility: 5)
#
# Response.create(user_id: 16, answer_id:1)
# Response.create(user_id: 17, answer_id:1)
# Response.create(user_id: 20, answer_id:2)

# orientation, straight, gay, bisexual
# size, small medium big
# weight, light average heavy
# status, single seeing someone married open relationship
# species, dog cat giraff horse
# look_for, a friend, significant other
# diet, herbavore, ominvore, carnivore
