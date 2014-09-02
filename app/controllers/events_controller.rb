class EventsController < ApplicationController
  def index
    render json: current_user.events.to_json, status: 200
  end
  def show
    @event = Event.find(params[:id])
    render json: @event.to_json, status: 200
  end
  def create
    @event = Event.new(event_params)
    render json: @event.to_json, status: 200 if @event.save
  end
  def update
    @event = Event.find(params[:id])
    render json: @event.to_json, status: 200 if @event.update(event_params)
  end
  def destroy
    @event = Event.find(params[:id])
    render json: @event.to_json if @event.destroy
  end

  private

  def event_params
    params.require(:event).permit(:title, :location, :start_date, :end_date)
  end
end
