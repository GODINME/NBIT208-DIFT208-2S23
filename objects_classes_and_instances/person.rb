class Person
    attr_reader :first_name, :last_name, :age, :gender, :status  
    def initialize(first_name, last_name, age, gender, status = "Single")
        @first_name = first_name
        @last_name = last_name
        @age = age 
        @gender = gender
        @status = status 
    end

    def have_birthday
        @age += 1
    end

    def print
        puts "#{@first_name} - #{@last_name} - #{@age} - #{@gender} - #{@status}"
    end


end