class Location 
    attr_reader :country, :state, :city
    def initialize(country, state, city)
        @country = country 
        @state = state 
        @city = city 
    end
end