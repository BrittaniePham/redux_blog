15.times do |x|
  Blog.create(
    name: Faker::Zelda.game,
    author: Faker::Name.name,
    body: Faker::HowIMetYourMother.quote
  )
end

puts 'seeded'