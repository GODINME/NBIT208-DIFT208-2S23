require './person'

p1 = Person.new("Paul", "Offei", 67, "male")
p2 = Person.new("Grace", "Obeng", 27, "female", "married")
p3 = Person.new("Nas", "Mensah", 43, "male")

p1.print
p2.print
p3.print

p1.have_birthday
p2.have_birthday
p3.have_birthday

puts "============================================================="

p1.print
p2.print
p3.print