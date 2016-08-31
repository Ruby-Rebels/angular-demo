class Api::V1::PeopleController < ApplicationController
  def index
    @people = Person.all
  end

  def create
    person = Person.create(
      name: params[:name],
      bio: params[:bio]
    )
    render json: {message: "Person was created successfully"}
  end
end
