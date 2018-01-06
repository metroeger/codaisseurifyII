class ArtistsController < ApplicationController
  before_action :set_artist, only: [:index, :show,:destroy]

  def index
    @artists = Artist.all
  end

  def show
    @songs = @artist.songs.all
  end

  # DELETE /artists/1
  # DELETE /artists/1.json
  def destroy
    @artist.destroy
      redirect_to artists_url, notice: 'Artist deleted.'
  end

  private
    def set_artist
      @artist = Artist.find_by_id(params[:id])
    end

    def artist_params
      params.require(:artist).permit(:name, :image, :songs_id)
    end
end
