class ArtistsController < ApplicationController
  before_action :set_artist, only: [:index, :show,:destroy]
end

  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find(params[:id])
    @songs = @artist.songs.all
  end

  def destroy
    @artist.destroy
    redirect_to artists_url, notice: 'Artist deleted'
  end


  private

  def set_artist
  @artist = Artist.find(params[:id])
  end

  def artist_params
      params.require(:artist).permit(:name, :photo) #:songs.id
    end
