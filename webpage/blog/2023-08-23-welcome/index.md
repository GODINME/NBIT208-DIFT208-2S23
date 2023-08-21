---
slug: labOne
title: Lab One - Onboarding with Ruby
authors: [ntow, poffei]
tags: [facebook, hello, docusaurus]
---

## Lab Goals and Culture
* After finishing your courses in `Programming Principles, Programming 1, Programming with C++ and Data structures and Algorithm`, You applied for an `internship` at a `software startup company` called `NSBT Futures` and you got hired as an `engineering intern` after successfully passing the interview process. 
* `NSBT Futures` is small company with a small team that working together from all the software development cycle and may have person A working on `System Analysis => System Design => System Implementation => System Testing => System Deployment => System Maintainance`. 
* The `Engineering Manager` called `Promise`, realized you took `NBIT208 or DIFT206: System Analysis and System Design` course and this your unique background convinced him to add you to not only `System Analysis and Design Team` but also the `Core Product Software Engineering Team` and `DevOps and Site Reliabity Engineer Team`.
* The `The Core Product Software Engineering Team` mostly uses a language and framework called `ruby and ruby on rails` which you are not familiar with and you are force to learn it on the job. 
* `which is not a big deal because you know programming already`  
* Student will learn to appreciate system analysis or requirement engineering and system design in system software development with ruby and it's object oriented programming paradiagm and how to collobrate with other team members like product owner or product manager or software architect or ux designer etc  

## Setup
* [Installing Ruby through RVM(Ruby Version Manager)](https://rvm.io/rvm/install)
* [Ruby Installer for window users](https://rubyinstaller.org/)
* I'm sorry to break your heart window users. please if software engineering is career you want to go into in future, kindly configure your windows to support [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) or switch to mac or linux operating systems.
* [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Sign Up on Github](https://github.com)
* [Text Editor but for web engineering we love vscode](https://code.visualstudio.com/)



## 1. Objects, Classes, and Instances
Starting this Lab I assume you have `rvm` installed and have `ruby` installed and `pry` installed which is optional. if you are using mac or linux you must have done the following on your terminal.
```bash
$ rvm install 3.2.2
$ rvm use 3.2.2
$ gem install pry
```
* [gem is a ruby package manager like npm for javascript](https://rubygems.org/)
* `pry` is a ruby interpreter better than default irb interpreter
* you can still use the default irb but i prefer pry
* [ruby 3.2.2 is the current stable verion but you can install previous version as well](https://www.ruby-lang.org/en/downloads/)
* ruby 2.7. and beyond is no longer maintained, so i don't recommend using it unless you are are working on a project built ontop of this version 
### Learning Goals

* Describe the difference between a `class` and an `instance of that class`
* Define a `class`
* Store state in instance variables defined in `initialize`
* Provide access to state using `attr_readers` and `attr_accessors`
* Use methods to provide behaviors to instances of a class
* Create a new instance of a class and call methods on that instance

### Vocabulary

* Class
* Object
* Instance
* State
* Attribute
* Instance Variable
* Behavior
* Method

### Warm Up

* In your notebook brainstorm a type of object and specific instances of that object. Then brainstorm 3 different attributes for those objects and 3 different behaviors of those objects.

### For example:

* Type of object: Student
* Specific instances: Level 100 Student, Level 200 Student, Level 300 Student
* Attributes: Level, Age, Name, Email, ID, GPA
* Behaviors: register courses, change courses, check gpa


### Classes in Ruby
#### Overview
In programming, a Class is something that models:
* State
* Behavior

State is what something is. Behavior is what something does. In the warm up, our Class was `Student`. We modeled the state of a Student by defining the attributes `Age`, `ID`, `email`, `Name` and `GPA`. We modeled the behavior of a Student by defining the methods `register courses`, `change courses`, `check gpa`.

An Instance or Object is a concrete representation of a Class. In the previous activity, `Level 100 Student` is a specific Instance of the `Student Class`. We can also say that `Level 100 Student` is a `Student Object`. Do not get confused by the terms Instance and Object. They mean the exact same thing. Think of playing with your own shadow, you full human body is the Class(main Object) but you can cast(clone) instances(objects) of your shadow at any where.

Think of a Class like a blueprint for a house and an Instance as an actual house. The blueprint is a just an idea of how the house should be built, and the house is the realization of that blueprint.

### Syntax
* The syntax for defining a class is as follows:
```ruby
class NameOfClass
end
```
So, for example, if we wanted to create a Student class, we could do the following:
```ruby
class Student
end
```
* Notice the use of `UpperCamelCase` for the class name.

* Generally we will want to put more information in our classes to make them useful to us, but those two lines even with no other information will create a class.

### Example - Class and Instance Syntax

* Let’s follow an example with a Employee class. I will create a directory in the `NBIT208-DIFT208-2S23` directory called `objects_classes_and_instances`. Within that directory, I’ll create an `employee.rb` file, and put the following information into that file. (You can do what ever you like if you know what you are doing).
```bash
cd NBIT208-DIFT208-2S23 
mkdir objects_classes_and_instances
cd objects_classes_and_instances
touch employee.rb
```

```ruby
class Employee 
end
```
* Notice that `class` is lowercase while `NameOfClass` is UpperCamelCased
* In the same `objects_instances_and_classes` directory, let’s create a `main.rb` file and put the code below into that
```bash
touch main.rb
```
```ruby
require './employee'

paul = Employee.new
patrick = Employee.new

require 'pry'; binding.pry
```

* We can run the `main.rb` file from the command line if we are inside of our `objects_classes_and_instances` directory by typing the following: `ruby main.rb` on the terminal.
```bash
pwd
ruby main.rb
```

* When we run this file, our terminal should open up a pry session when it reads the line: `binding.pry`. Inside of that pry session, we’ll type `paul` and hit return to see what the variable `paul` is holding. Then, we’ll type `patrick` to see what that variable is holding.


### Reflection
* How are those two things the same?
* How are they different?


### Attributes in Ruby Classes
* Above we created an Enployee class and then also created specific instances of the Employee class that we held in the variables paul and patrick. Generally the objects we create will come from the same template, but each will be a unique object.

Take a look at these Employee.

Each one is different in important ways. For example, each one has its own:
* Name
* ID
* Age

We can model these attributes in code by using instance variables. Generally we define these instance variables in a special method called `initialize` that is run every time a new instance of a class is created. Thus called constructor in other language like Java.

### Initialize

When we run `Employee.new` in Ruby, what actually happens? We can see from the last example that different Employee objects (or instances) are created. Other than that, nothing happens. If we want some specific code to run when we first create a new Employee, we need to tell Ruby what should happen when a new Employee instance (or object) is created. We do this with the `initialize` method.

```ruby
class Employee 
    def def initialize
        # any code here will run each time a new instance is created
    end
end
```

* This method is run once and only once during an Object’s lifetime, when we call new. 
* Other than that, `initialize` is like any other method where we can put Ruby code
```ruby
class Employee 
    def def initialize
        puts "An Employee class implementation"
    end
end
```

### Modeling State with Attributes

* The instances of the classes we have defined so far are basically useless. Aside from their `object_id`, there is nothing unique about these instances.
* Remember, a class models State and Behavior. Let’s give our Employee some state.

### Example - Attributes

* Let’s add some attributes to the Employee class. 
* The @ symbol before a variable name indicates that it is an `Attribute or Instance Variable`. These two terms mean the exact same thing.

```ruby
class Employee 
    def def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
    end
end
```

* Because `attributes` are something we want to persist throughout an object’s lifetime, we typically define them inside the `initialize` method because we want them to exist as soon as the object is created.

* We have now created a method class that will allow us to create many different instances of Employee, each one slightly different from the last. 
* How do we do that in practice? Let’s update the `main.rb` file so that it includes the following:
```ruby
require './employee'

paul = Employee.new(1, "Paul", 34)
patrick = Employee.new(2, "Patrick", 26)
eric = Employee.new(3, "Eric", 45)

require 'pry'; binding.pry
```

* When we include the arguments to `.new`, Ruby will pass those arguments to the initialize method for us. Note that the arguments that we pass to new are order dependent. So, in the first example when we pass `1` as the first argument, we are saying that the `id` of the Employee we are creating is `1`. When we pass in `2` the second time we call new we are saying that the Employee that we created must have an id `2`.

* What we have just done is a very common pattern. We gave our initialize method some arguments and we saved those arguments to instance variables. While this is a strong pattern, it is not a rule. For instance, you may want to set a variable in your initialize that has a default value that isn’t set using an argument.

```ruby
class Employee 
    def def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
    end
end
```

### Practice

* Create an `objects_classes_and_instances` directory, then touch a `person.rb` file and a `run_person.rb` file. Define a Person class in it and create instances of that class in your runner file.

* Give your Person class some attributes that are set using arguments to initialize and some attributes that have default values. Make some instances of your Person class, and run you runner file.


### Accessing Attributes
* That’s all well and good, but what can we do with all these attributes that we’ve created They’re no good to us if we can’t use them.

* Generally, the way that we access information stored in a class is by sending it messages or calling methods on that class. We do that using . syntax.

* Let’s run our `main` file again and check to see what this returns
```ruby
require './employee'

paul = Employee.new(1, "Paul", 34)
patrick = Employee.new(2, "Patrick", 26)
eric = Employee.new(3, "Eric", 45)

require 'pry'; binding.pry

paul.id
```

* We should get an error that says something about the method `.id` not existing (a no method error). The syntax here is correct, but we haven’t told our `Employee` class how to respond when it receives the message id.

* We can do that with methods like the ones we’ve seen before, but attributes stored as instance variables are special. We can tell our class to provide access to them using `attribute readers`. Let’s do that now.

## Example - Accessing Attributes
* Let’s update our Employee class to include the lines below.
```ruby
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
```

* Let’s run our runner file again and see if you can now call `paul.id`.
* type `paul.id` `paul.name` `paul.age`
```ruby
require './employee'

paul = Employee.new(1, "Paul", 34)
patrick = Employee.new(2, "Patrick", 26)
eric = Employee.new(3, "Eric", 45)


require 'pry'; binding.pry

paul.id
```

* Now, I should be able to call `paul.id` and get back whatever was stored in the instance variable. But wow, this class is suddenly lengthy, harder to read, and has a lot of similar work happening. `A method called id returns @id, name returns @name, etc`. There’s a cleaner way to do the same thing:
```ruby
class Employee
    attr_reader :id, :name, :age, :retirement_age
    
    def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
    end

end
```
* Let’s run our runner file again and see if you can still call `paul.id` and the other attributes.

* An important thing to remember is that although there is a special syntax for creating attr_readers, they are still just methods. Remember the error we got earlier was a no method error for name.

### Practice

* Create `attr_readers` for the attributes in your `Person class`.
* Practice explaining to your what is happening under the hood with the `attr_readers`

### Other Methods

* We can also create other methods that will allow us to send other messages to our `Employee class`. For example, let’s say we wanted to add a `increase salary` to our Employee class. Let’s do that by creating a method called `increase_salary` that will add to the previous salary.

```ruby
class Employee
    attr_reader :id, :name, :age, :retirement_age
    
    def initialize(id, name, age)
        @id = id 
        @name = name 
        @age = age
        @retirement_age = 70 
        @salary = 500
    end

    def increase_salary(amount)
        @salary + amount 
    end

end
```
Let’s update our `main` file so that you:

* Create a new instance of Employee.
* Print the salary of that Employee.
* Add an increase in salary 
* Print the new salary of the Employe.

```ruby
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
```

### Practice

* Create a `have_birthday` method for your Person class. This should increase the age of that person by 1.
* Update your `run_person` file in a similar fashion to steps 1-4 for your Person class.


### Object Interaction
* When we build more complex programs, we typically have many classes, and the instances of those classes interact in some way.

### Example - Object Interaction
* Employee can be working at different Location, so we can have a location class.
```ruby
class Location 
    attr_reader :country, :state, :city
    def initialize(country, state, city)
        @country = country 
        @state = state 
        @city = city 
    end
end
```

### Practice
#### Create a Book Class

* Create a `book class`. Make sure that your book class with `title`, `author`, and `genre` attributes.

* Once you’ve created your class, create a `run_book` file that creates three separate instances of book and saves them to variables.

* Check in with your partner that you’re in a similar place. Discuss an differences you have in your code.

#### Create a Library Class

* Create a Library class. Add attributes as you wish, but the be sure to include a `@collection` instance variable that starts as an `empty array`.

* Check in with your partner that you’re in a similar place. Discuss an differences you have in your code.

If you have time:

* Add a `add_book` method that takes an instance of book and adds it to your collection.
* Add a `titles` method that iterates over your collection of books and returns only their titles.
* Add an `authors` method that iterates over your collection of books and returns the authors for each book. Can you make it so that it does not return any duplicate authors?
* Pretty print: add a method that prints a table of books and authors that the library has. `This will require some string manipulation to get a table to print with columns that line up`.

* Update your `run_book` file to create a new library, add some books to the library, and print information about their collections.