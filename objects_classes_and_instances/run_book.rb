require './book'
require './library'

def jet
    puts "============================================================"
end

b1 = Book.new("My Love", "Paul Offei", "Comedy")
b2 = Book.new("Have Faith", "Ama Osei", "Drama")
b3 = Book.new("The Last Battle", "John Kojo", "Action")

jet()
b1.print
jet()
b2.print
jet()
b3.print

jet()

library = Library.new()
library.add_book(b1)
library.add_book(b2)
library.add_book(b3) 
library.print 

jet()

puts library.titles

jet()

puts library.authors

jet()