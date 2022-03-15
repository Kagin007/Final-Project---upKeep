require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

puts "starting seeds..."

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    password_digest = "123"
    is_admin =  true
    email =  Faker::Internet.unique.email
    picture_url = Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg")
    User.create(first_name: first_name, last_name: last_name, password_digest: password_digest, is_admin: is_admin, email: email, picture_url: picture_url)
end