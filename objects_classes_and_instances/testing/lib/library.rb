class Library 
    attr_reader :collection

    def initialize(collection = [])
        @collection = collection
    end

    def add_book(book)
        @collection << book 
    end

    def titles 
        if @collection.length == 0
            return "Empty Collections"
        else
            @collection.map{|book| book.title}
        end
    end

    def authors 
        if @collection.length == 0
            return "Empty Collections"
        else
            @collection.map{|book| book.author}
        end
    end

    def print
        puts "Book Title=====================Book Author"
        @collection.each do |book|
            puts book.title   + "====================" + book.author
        end
    end

    
end