require 'faker'
require 'money'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Rating.destroy_all
Reservation.destroy_all
Property.destroy_all
User.destroy_all
Location.destroy_all


puts "starting seeds..."

puts "seeding locations"

100.times do
  Location.create(
    address: Faker::Address.street_address,
    city: "Toronto",
    province: "Ontario",
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude
  )
end

locations = Location.all
puts "seeding users"
locations.each do |location|
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password_digest: "123456789",
    email: Faker::Internet.unique.email,
    picture_url: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg"),
    role: ['cleaner', 'owner', 'both', 'admin'][rand(0..3)],
    pay_rate: [3000,4000,5000,6000,7000,8000,9000,10000][rand(0..7)],
    list_of_properties: "[]",
    location_id: location.id
  )
end

users = User.all
puts "seeding properties"
users.each do |user|
  if user.role == 'owner'
  Property.create(
    user_id: user.id,
    location_id: locations.sample.id
  )
  end
end

properties = Property.all
puts "seeding reservations"
200.times do
  fakeDate = Faker::Date.unique.between(from: '2021-12-01', to: '2022-09-01')
Reservation.create(
  user_id: users.sample.id,
  property_id: properties.sample.id,
  booking_date: fakeDate,
  is_complete: fakeDate > Date.current ? false : true
)
end

reservations = Reservation.all
puts "seeding ratings"
reservations.each do |reservation|
  Rating.create(
    rating: rand(1..5),
    message: Faker::Lorem.sentence,
    reservation_id: reservation.id
  )
end