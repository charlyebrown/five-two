# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# user = CreateAdminService.new.call
# puts 'CREATED ADMIN USER: ' << user.email

User.create({name: 'Ems', birthday: 'Dec 1, 2000', email: 'ems@em.com', password: '11111111', password_confirmation: '11111111'})
User.create({name: 'Charlye', birthday: 'Jan 1, 2000', email: 'c@c.com', password: '11111111', password_confirmation: '11111111'})
User.create({name: 'Batman', birthday: 'Feb 1, 2000', email: 'b@b.com', password: '11111111', password_confirmation: '11111111'})
User.create({name: 'Spiderman', birthday: 'Mar 1, 2000', email: 's@s.com', password: '11111111', password_confirmation: '11111111'})
User.create({name: 'Superman', birthday: 'Apr 1, 2000', email: 'sm@sm.com', password: '11111111', password_confirmation: '11111111'})
User.create({name: 'Aquaman', birthday: 'May 1, 2000', email: 'a@a.com', password: '11111111', password_confirmation: '11111111'})
