require 'faker'
require 'money'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Reservation.destroy_all
Timeslot.destroy_all
Property.destroy_all
Location.destroy_all
User.destroy_all

puts "starting seeds..."

puts 'seeding users'
50.times do
  User.create(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  password_digest: "123456789",
  email: Faker::Internet.unique.email,
  picture_url: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "jpg"),
  role: ['cleaner', 'owner', 'both', 'admin'][rand(0..3)],
  pay_rate: [3000,4000,5000,6000,7000,8000,9000,10000][rand(0..7)],
  list_of_properties: "[]"
)
end

users = User.all
puts "seeding locations"
users.each do |user|
  Location.create(
    address: Faker::Address.street_address,
    city: ['Toronto', 'London', 'Vancouver', 'Montreal','Calgary','Saskatoon','Ottawa'][rand(0..6)],
    country: "Canada",
    longitude: Faker::Address.longitude,
    latitude: Faker::Address.latitude,
    user_id: user.id
  )
end

owners = User.where(:role => ['owner','both'])
cleaners = User.where(:role => ['cleaner','both'])

puts "seeding properties"
owners.each do |owner|
    num_properties = rand(1..3)
    num_properties.times do 
      Property.create(
        address: Faker::Address.street_address,
        city: ['Toronto', 'London', 'Vancouver', 'Montreal','Calgary','Saskatoon','Ottawa'][rand(0..6)],
        country: "Canada",
        longitude: Faker::Address.longitude,
        latitude: Faker::Address.latitude,
        user_id: owner.id,
      )
    end
end


puts "seeding timeslots"
cleaners.each do |cleaner|
    start_date = Date.parse('20220301')
    end_date = Date.parse('20220430')
    date_range = (start_date..end_date).to_a
    date_range.each do |date|
      Timeslot.create(
        date: date,
        user_id: cleaner.id
      )
    end
end

puts 'seeding reservations'
owners.each do |owner|
    chosenCleaner = cleaners.sample
    chosenTimeSlot = chosenCleaner.timeslots.sample
    chosenTimeSlot.slots -= 1
    Reservation.create(
      booking_date: chosenTimeSlot.date,
      user_id: owner.id,
      cleaner_id: chosenCleaner.id,
      property_id: owner.properties.sample.id
    )
end

puts "seeding ratings"
reservations = Reservation.all

reservations.each do |reservation|
  Rating.create(
    rating: rand(30..100),
    reservation_id: reservation.id,
    review: Faker::Lorem.paragraph,
    user_id: reservation.cleaner_id
  )
end


