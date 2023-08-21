class Employee 
    def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
    end

    def id 
        @id
    end

    def name 
        @name 
    end

    def age
        @age 
    end

    def retire_age 
        @retirement_age
    end
end