require 'rspec'
require './lib/person'

describe Person do
    describe '#initialize' do 
        it 'is an instance of person' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person).to be_a Person 
        end 

        it 'has a first name' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person.first_name).to  eq 'Paul'
        end 

        it 'has a last name' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person.last_name).to  eq 'Offei'
        end 

        it 'has age' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person.age).to  eq 44
        end 

        it 'has a gender' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person.gender).to  eq 'male'
        end 

        it 'has status by default' do 
            person = Person.new("Paul", "Offei", 44, "male")
            expect(person.status).to  eq 'single'
        end 

        it 'can have different name as well' do 
            person = Person.new("Esi", "Osei", 24, "female", "married")
            expect(person.first_name).to  eq 'Esi'
            expect(person.last_name).to  eq 'Osei'
            expect(person.age).to  eq  24
            expect(person.gender).to  eq 'female'
            expect(person.status).to  eq 'married'
        end 
    end

    describe '#have birthday' do 
        it 'add plus one to the person age' do  
            person = Person.new("Paul", "Offei", 44, "male")
            person.have_birthday

            expect(person.age).to eq 45
        end
    end
          
end
