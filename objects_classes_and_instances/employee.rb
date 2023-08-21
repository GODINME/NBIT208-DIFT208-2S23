class Employee
    attr_reader :id, :name, :age, :retirement_age
    
    def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
    end

end