class Employee
    attr_reader :id, :name, :age, :retirement_age, :salary
    
    def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
        @salary = 500
    end

    def increase_salary(amount)
        @salary += amount 
    end

end